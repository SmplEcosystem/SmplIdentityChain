package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/SmplEcosystem/SmplIdentityChain/testutil/keeper"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.DidKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
