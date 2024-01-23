package keeper

import (
	"context"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpsertDid(goCtx context.Context, msg *types.MsgUpsertDid) (*types.MsgUpsertDidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	k.SetDid(ctx, msg)
	_ = ctx

	return &types.MsgUpsertDidResponse{}, nil
}
