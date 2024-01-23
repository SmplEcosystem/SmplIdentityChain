package keeper

import (
	"cosmossdk.io/store/prefix"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) SetDid(ctx sdk.Context, msg *types.MsgUpsertDid) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(msg.DidDocument.Id)
	bz := k.cdc.MustMarshalLengthPrefixed(msg)
	store.Set(key, bz)
}
func (k Keeper) GetDIDDocument(ctx sdk.Context, did string) types.QueryResolveDidRequestResponse {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(did)
	bz := store.Get(key)
	if bz == nil {
		return types.QueryResolveDidRequestResponse{}
	}

	var doc types.QueryResolveDidRequestResponse
	k.cdc.MustUnmarshalLengthPrefixed(bz, &doc)
	return doc
}
