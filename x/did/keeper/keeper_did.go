package keeper

import (
	sdkerrors "cosmossdk.io/errors"
	"cosmossdk.io/store/prefix"
	"fmt"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cometbft/cometbft/crypto"
	"github.com/cometbft/cometbft/crypto/secp256k1"
	"github.com/cosmos/btcutil/base58"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"regexp"
	"strings"
)

func (k Keeper) SetDid(ctx sdk.Context, msg *types.MsgUpsertDid) {
	validator := processString(msg.DidDocument.Id)
	if validator == nil {
		var seq uint64
		DocumentOldVersion := k.GetDIDDocument(ctx, msg.DidDocument.Id)
		if DocumentOldVersion == nil {
			seq = 0
		} else {
			seq = DocumentOldVersion.Sequence + 1
		}
		storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
		store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
		key := []byte(msg.DidDocument.Id)
		var Documents = &types.DidInfo{
			DidDocument:         msg.DidDocument,
			DidDocumentMetadata: msg.DidDocumentMetadata,
			Sequence:            seq,
		}
		bz := k.cdc.MustMarshalLengthPrefixed(Documents)
		store.Set(key, bz)
	} else {
	}

}

func (k Keeper) GetDIDDocument(ctx sdk.Context, did string) *types.QueryResolveDidResponse {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(did)
	bz := store.Get(key)
	if bz == nil {
		return nil
	}

	var doc types.DidInfo
	k.cdc.MustUnmarshalLengthPrefixed(bz, &doc)
	var ResolutionMetadata = &types.DidResolutionMetadata{}
	var DidDocuments = &types.QueryResolveDidResponse{
		DidDocument:           doc.DidDocument,
		DidResolutionMetadata: ResolutionMetadata,
		DidDocumentMetadata:   doc.DidDocumentMetadata,
		Sequence:              doc.Sequence,
	}

	return DidDocuments
}
func processString(input string) error {
	parts := strings.Split(input, ":")

	if len(parts) != 3 {
		return fmt.Errorf("the input should contain three comma-separated parts")
	}

	if parts[0] != "did" {
		return fmt.Errorf("the first part should be 'did'")
	}

	if parts[1] != "smpl" {
		return fmt.Errorf("the second part should be 'smpl'")
	}

	uuidRegex := `^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89aAbB][0-9a-f]{3}-[0-9a-f]{12}$`
	match, _ := regexp.MatchString(uuidRegex, parts[2])
	if !match {
		return fmt.Errorf("the third part should be a valid UUID")
	}

	return nil
}

func (k Keeper) VerifyDidOwnership(doc *types.DIDDocument, seq uint64, verificationMethodID string, sig []byte) (uint64, error) {
	verificationMethod, ok := k.VerificationMethodFrom(doc.VerificationMethods, verificationMethodID)
	if !ok {
		return 0, sdkerrors.Wrapf(types.ErrVerificationMethodIDNotFound, "VerificationMethodId: %s", verificationMethodID)
	}

	// TODO: Currently, only ES256K1 is supported to verify DID ownership.
	//       It makes sense for now, since a DID is derived from a Secp256k1 public key.
	//       But, need to support other key types (according to verificationMethod.Type).
	if verificationMethod.Type != types.ES256K_2019 && verificationMethod.Type != types.ES256K_2018 {
		return 0, sdkerrors.Wrapf(types.ErrVerificationMethodKeyTypeNotImplemented, "VerificationMethod: %v", verificationMethod.Type)
	}
	pubKeySecp256k1, err := k.PubKeyFromBase58(verificationMethod.PublicKeyBase58)
	if err != nil {
		return 0, sdkerrors.Wrapf(types.ErrInvalidSecp256k1PublicKey, "PublicKey: %v", verificationMethod.PublicKeyBase58)
	}
	newSeq, ok := k.Verify(sig, doc, seq, pubKeySecp256k1)
	if !ok {
		return 0, types.ErrSigVerificationFailed
	}
	return newSeq, nil
}

func (k Keeper) Verify(signature []byte, signableData *types.DIDDocument, seq uint64, pubKey crypto.PubKey) (uint64, bool) {
	signBytes := mustGetSignBytesWithSeq(signableData, seq)

	if !pubKey.VerifySignature(signBytes, signature) {
		return 0, false
	}
	return seq + 1, true
}

// mustGetSignBytesWithSeq returns a byte slice which is the combination of data and seq.
// The return value is deterministic, so that it can be used for signing.
func mustGetSignBytesWithSeq(signableData *types.DIDDocument, seq uint64) []byte {
	dAtA, err := signableData.Marshal()
	if err != nil {
		panic(fmt.Sprintf("marshal failed: %s, signableData: %s", err.Error(), signableData))
	}
	dataWithSeq := types.DataWithSequence{
		Data:     dAtA,
		Sequence: seq,
	}

	dAtA, err = dataWithSeq.Marshal()

	if err != nil {
		panic(fmt.Sprintf("marshal failed: %s, dataWithSeq: %v", err.Error(), dataWithSeq))
	}

	return dAtA
}

func (k Keeper) VerificationMethodFrom(verificationMethods []*types.VerificationMethod, id string) (types.VerificationMethod, bool) {
	var foundVerificationMethod types.VerificationMethod
	for _, verificationMethod := range verificationMethods {
		if verificationMethod.Id == id {
			foundVerificationMethod = *verificationMethod
		}
	}

	return foundVerificationMethod, false
}

// PubKeyFromBase58 decodes a base58-encoded Secp256k1 public key.
// It returns an error when the length of the input is invalid.
func (k Keeper) PubKeyFromBase58(b58 string) (secp256k1.PubKey, error) {
	key := make([]byte, secp256k1.PubKeySize)
	decoded := base58.Decode(b58)
	if len(decoded) != len(key) {
		return key, fmt.Errorf("invalid Secp256k1 public key. len:%d, expected:%d", len(decoded), len(key))
	}
	copy(key[:], decoded)
	return key, nil
}
