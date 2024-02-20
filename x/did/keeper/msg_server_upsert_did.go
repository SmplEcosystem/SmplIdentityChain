package keeper

import (
	"context"
	sdkerrors "cosmossdk.io/errors"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpsertDid(goCtx context.Context, msg *types.MsgUpsertDid) (*types.MsgUpsertDidResponse, error) {
	var seq = uint64(0)
	ctx := sdk.UnwrapSDKContext(goCtx)
	CurrentDoc, _ := k.GetDIDDocument(ctx, msg.DidDocument.Id)
	if CurrentDoc == nil {
		seq = 0
	} else {
		seq = CurrentDoc.Sequence
	}
	_, err := k.VerifyDidOwnership(msg.DidDocument, seq, msg.VerificationMethodId, []byte(msg.Signature))
	if err != nil {
		return nil, err
	}
	if CurrentDoc != nil {
		DocBytes, _ := json.Marshal(msg.DidDocument)
		CurrentDocBytes, _ := json.Marshal(CurrentDoc.DidDocument)
		hasher := sha256.New()
		hasher.Write(DocBytes)
		DocHash := hasher.Sum(nil)
		hasher.Reset()
		hasher.Write(CurrentDocBytes)
		CurrentDocHash := hasher.Sum(nil)
		if hex.EncodeToString(DocHash) == hex.EncodeToString(CurrentDocHash) {
			if msg.DidDocumentMetadata.Deactivated == true {
				err := k.SetDid(ctx, msg)
				if err != nil {
					return nil, err
				}
				_ = ctx

				return &types.MsgUpsertDidResponse{}, nil
			} else {
				return nil, sdkerrors.Wrap(types.ErrNoChanges, "No changes to did")
			}
		} else {
			err := k.SetDid(ctx, msg)
			if err != nil {
				return nil, err
			}
			_ = ctx

			return &types.MsgUpsertDidResponse{}, nil
		}
	} else {
		err := k.SetDid(ctx, msg)
		if err != nil {
			return nil, err
		}
		_ = ctx

		return &types.MsgUpsertDidResponse{}, nil
	}
}
