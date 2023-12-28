package keeper

import (
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
)

var _ types.QueryServer = Keeper{}
