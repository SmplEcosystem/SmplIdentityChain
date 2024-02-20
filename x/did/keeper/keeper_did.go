package keeper

import (
	sdkerrors "cosmossdk.io/errors"
	"cosmossdk.io/store/prefix"
	"crypto/rand"
	"fmt"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cosmos/btcutil/base58"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"golang.org/x/crypto/ed25519"
	"regexp"
	"strings"
	"time"
)

func (k Keeper) SetDid(ctx sdk.Context, msg *types.MsgUpsertDid) error {
	validator := verifyIdStruct(msg.DidDocument.Id)
	if validator == nil {
		var seq uint64
		DocumentOldVersion, _ := k.GetDIDDocument(ctx, msg.DidDocument.Id)
		if DocumentOldVersion == nil {
			seq = 0
		} else {
			seq = DocumentOldVersion.Sequence + 1
		}
		storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
		store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
		key := []byte(msg.DidDocument.Id)
		Documents, err := k.generateDocumentsToStore(msg, ctx, seq)
		if err != nil {
			return err
		}
		bz := k.cdc.MustMarshalLengthPrefixed(Documents)
		store.Set(key, bz)
		return nil
	} else {
		return sdkerrors.Wrap(types.ErrInvalidDidId, "No valid id found")
	}
}

func (k Keeper) generateDocumentsToStore(msg *types.MsgUpsertDid, ctx sdk.Context, seq uint64) (*types.DidInfo, error) {
	var Documents = &types.DidInfo{}
	DocToDeactivate, _ := k.GetDIDDocument(ctx, msg.DidDocument.Id)
	if seq == 0 {
		createdTime := time.Now()
		createdString := createdTime.Format(time.RFC3339)
		msg.DidDocumentMetadata.Created = createdString
	} else {
		updatedTime := time.Now()
		updatedString := updatedTime.Format(time.RFC3339)
		msg.DidDocumentMetadata.Updated = updatedString
		msg.DidDocumentMetadata.Created = DocToDeactivate.DidDocumentMetadata.Created
	}
	if msg.DidDocumentMetadata.Deactivated == false {
		Documents = &types.DidInfo{
			DidDocument:         msg.DidDocument,
			DidDocumentMetadata: msg.DidDocumentMetadata,
			Sequence:            seq,
		}
	} else {
		if DocToDeactivate == nil {
			return nil, sdkerrors.Wrap(types.ErrCantDeactivate, "can't deactivate a doc that does not exist")
		} else {
			Documents = &types.DidInfo{
				DidDocument:         DocToDeactivate.DidDocument,
				DidDocumentMetadata: msg.DidDocumentMetadata,
				Sequence:            seq,
			}
		}
	}
	return Documents, nil
}

func (k Keeper) GetDIDDocument(ctx sdk.Context, did string) (*types.QueryResolveDidResponse, error) {
	var ResolutionMetadata = &types.DidResolutionMetadata{}
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(did)
	bz := store.Get(key)
	if bz == nil {
		err := sdkerrors.Wrap(types.ErrNoDidFound, "cannot find did")
		ResolutionMetadata.Error = err.Error()
	}

	var doc types.DidInfo
	k.cdc.MustUnmarshalLengthPrefixed(bz, &doc)
	var DidDocuments = &types.QueryResolveDidResponse{
		DidDocument:           doc.DidDocument,
		DidResolutionMetadata: ResolutionMetadata,
		DidDocumentMetadata:   doc.DidDocumentMetadata,
		Sequence:              doc.Sequence,
	}

	return DidDocuments, nil
}
func verifyIdStruct(input string) error {
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
	verificationMethod, found := k.VerificationMethodFrom(doc.VerificationMethod, verificationMethodID)
	if !found {
		return 0, sdkerrors.Wrapf(types.ErrVerificationMethodIDNotFound, "VerificationMethodId: %s not found", verificationMethodID)
	}

	if verificationMethod.Type != types.ED25519_2018 {
		return 0, sdkerrors.Wrapf(types.ErrVerificationMethodKeyTypeNotImplemented, "VerificationMethod: %v", verificationMethod.Type)
	}

	data, err := doc.Marshal() // replace this with actual data to be verified
	if err != nil {
		return 0, sdkerrors.Wrapf(types.DidDocumentMarshalFailed, "VerificationMethod: %v", verificationMethod.Type)
	}

	//Fake stuff
	//fakePublicKey, newSig, err := fakeStuff(data)
	//if err != nil {
	//	return 0, sdkerrors.Wrapf(types.DidDocumentMarshalFailed, "VerificationMethod: %v", verificationMethod.Type)
	//}
	//verificationMethod.PublicKeyBase58 = base58.Encode(fakePublicKey)
	//sig = newSig
	//Fake stuff

	publicKeyBytes := base58.Decode(verificationMethod.PublicKeyBase58)

	isVerified := ed25519.Verify(publicKeyBytes, data, sig)
	if !isVerified {
		return 0, sdkerrors.Wrapf(types.ErrSigVerificationFailed, "Could not verify signature for DID Document")
	}

	return seq + 1, nil
}

func (k Keeper) VerificationMethodFrom(verificationMethods []*types.VerificationMethod, id string) (types.VerificationMethod, bool) {
	var foundVerificationMethod types.VerificationMethod
	for _, verificationMethod := range verificationMethods {
		if verificationMethod.Id == id {
			foundVerificationMethod = *verificationMethod
			return foundVerificationMethod, true
		}
	}

	return types.VerificationMethod{}, false
}

func fakeStuff(didDocBytes []byte) (ed25519.PublicKey, []byte, error) {
	publicKey, privateKey, err := ed25519.GenerateKey(rand.Reader)
	if err != nil {
		return nil, nil, sdkerrors.Wrapf(types.ErrSigVerificationFailed, "Could not generate keys")
	}

	signature := ed25519.Sign(privateKey, didDocBytes)

	return publicKey, signature, nil
}
