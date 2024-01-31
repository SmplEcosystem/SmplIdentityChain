package keeper

import (
	"cosmossdk.io/store/prefix"
	"fmt"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"regexp"
	"strings"
)

func (k Keeper) SetDid(ctx sdk.Context, msg *types.MsgUpsertDid) {
	validator := processString(msg.DidDocument.Id)
	if validator == nil {
		storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
		store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
		key := []byte(msg.DidDocument.Id)
		var Documents = &types.DidInfo{
			DidDocument:         msg.DidDocument,
			DidDocumentMetadata: msg.DidDocumentMetadata,
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

func VerifyDIDOwnership(doc *types.DIDDocument, seq uint64, verificationMethodID string, sig []byte) (uint64, error) {
	//verificationMethod, ok := doc.VerificationMethodFrom(doc.Authentications, verificationMethodID)
	//if !ok {
	//return 0, sdkerrors.Wrapf(types.ErrVerificationMethodIDNotFound, "VerificationMethodId: %s", verificationMethodID)
	//}
	//
	//// TODO: Currently, only ES256K1 is supported to verify DID ownership.
	////       It makes sense for now, since a DID is derived from a Secp256k1 public key.
	////       But, need to support other key types (according to verificationMethod.Type).
	//if verificationMethod.Type != types.ES256K_2019 && verificationMethod.Type != types.ES256K_2018 {
	//return 0, sdkerrors.Wrapf(types.ErrVerificationMethodKeyTypeNotImplemented, "VerificationMethod: %v", verificationMethod.Type)
	//}
	//pubKeySecp256k1, err := secp256k1util.PubKeyFromBase58(verificationMethod.PublicKeyBase58)
	//if err != nil {
	//return 0, sdkerrors.Wrapf(types.ErrInvalidSecp256k1PublicKey, "PublicKey: %v", verificationMethod.PublicKeyBase58)
	//}
	//newSeq, ok := types.Verify(sig, signData, seq, pubKeySecp256k1)
	//if !ok {
	//return 0, types.ErrSigVerificationFailed
	//}
	return 1, nil
}
