package keeper_test

import (
	"testing"

	testkeeper "SmplIdentityChain/testutil/keeper"
	"SmplIdentityChain/x/smplidentitychain/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.SmplidentitychainKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
