package keeper

import (
	"context"

	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ResolveDidRequest(goCtx context.Context, req *types.QueryResolveDidRequest) (*types.QueryResolveDidRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	DidReturn := k.GetDIDDocument(ctx, req.Did)

	//k.GetDIDDocument(ctx, req.Did)
	_ = ctx

	return DidReturn, nil
}
