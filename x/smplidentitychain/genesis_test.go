package smplidentitychain_test

import (
	"testing"

	keepertest "SmplIdentityChain/testutil/keeper"
	"SmplIdentityChain/testutil/nullify"
	"SmplIdentityChain/x/smplidentitychain"
	"SmplIdentityChain/x/smplidentitychain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SmplidentitychainKeeper(t)
	smplidentitychain.InitGenesis(ctx, *k, genesisState)
	got := smplidentitychain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
