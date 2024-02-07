package keeper

import (
	"context"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpsertDid(goCtx context.Context, msg *types.MsgUpsertDid) (*types.MsgUpsertDidResponse, error) {
	var seq = uint64(0)
	ctx := sdk.UnwrapSDKContext(goCtx)
	DocumentToChange := k.GetDIDDocument(ctx, msg.DidDocument.Id)
	if DocumentToChange == nil {
		seq = 0
	} else {
		seq = DocumentToChange.Sequence
	}

	_, err := k.VerifyDidOwnership(msg.DidDocument, seq, msg.VerificationMethodId, []byte(msg.Signature))
	if err != nil {
		return nil, err
	}
	k.SetDid(ctx, msg)
	_ = ctx

	return &types.MsgUpsertDidResponse{}, nil
}
