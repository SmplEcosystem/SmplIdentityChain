package keeper

import (
	"context"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpsertDid(goCtx context.Context, msg *types.MsgUpsertDid) (*types.MsgUpsertDidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, err := VerifyDIDOwnership(msg.DidDocument, 1, "billy", make([]byte, 1))
	if err != nil {
		return nil, err
	}
	k.SetDid(ctx, msg)
	_ = ctx

	return &types.MsgUpsertDidResponse{}, nil
}
