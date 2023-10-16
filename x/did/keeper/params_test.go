package keeper_test

import (
	"testing"

	testkeeper "github.com/SmplEcosystem/SmplIdentityChain/testutil/keeper"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DidKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
