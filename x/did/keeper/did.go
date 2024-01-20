package keeper

import (
	"cosmossdk.io/store/prefix"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) SetDid(ctx sdk.Context, doc types.DIDDocument) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(doc.Id)
	bz := k.cdc.MustMarshalLengthPrefixed(&doc)
	store.Set(key, bz)
}
