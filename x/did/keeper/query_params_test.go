package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/SmplEcosystem/SmplIdentityChain/testutil/keeper"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
)

func TestParamsQuery(t *testing.T) {
	keeper, ctx := keepertest.DidKeeper(t)
	params := types.DefaultParams()
	require.NoError(t, keeper.SetParams(ctx, params))

	response, err := keeper.Params(ctx, &types.QueryParamsRequest{})
	require.NoError(t, err)
	require.Equal(t, &types.QueryParamsResponse{Params: params}, response)
}
