package keeper

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpsertDid(goCtx context.Context, msg *types.MsgUpsertDid) (*types.MsgUpsertDidResponse, error) {
	var seq = uint64(0)
	ctx := sdk.UnwrapSDKContext(goCtx)
	CurrentDoc := k.GetDIDDocument(ctx, msg.DidDocument.Id)
	if CurrentDoc == nil {
		seq = 0
	} else {
		seq = CurrentDoc.Sequence
	}
	DocBytes, _ := json.Marshal(msg.DidDocument)
	CurrentDocBytes, _ := json.Marshal(CurrentDoc)
	hasher := sha256.New()
	hasher.Write(DocBytes)
	DocHash := hasher.Sum(nil)
	hasher.Reset()
	hasher.Write(CurrentDocBytes)
	CurrentDocHash := hasher.Sum(nil)
	if hex.EncodeToString(DocHash) == hex.EncodeToString(CurrentDocHash) {
		if msg.DidDocumentMetadata.Deactivated == true {
			_, err := k.VerifyDidOwnership(msg.DidDocument, seq, msg.Signature, msg.VerificationMethodId)
			if err != nil {
				return nil, err
			}
			k.SetDid(ctx, msg)
			_ = ctx

			return &types.MsgUpsertDidResponse{}, nil
		} else {
			return nil, nil
		}
	} else {
		_, err := k.VerifyDidOwnership(msg.DidDocument, seq, msg.Signature, msg.VerificationMethodId)
		if err != nil {
			return nil, err
		}
		k.SetDid(ctx, msg)
		_ = ctx

		return &types.MsgUpsertDidResponse{}, nil
	}
}
