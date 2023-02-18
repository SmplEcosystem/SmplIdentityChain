package keeper_test

import (
	"context"
	"testing"

	keepertest "SmplIdentityChain/testutil/keeper"
	"SmplIdentityChain/x/smplidentitychain/keeper"
	"SmplIdentityChain/x/smplidentitychain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.SmplidentitychainKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
