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
	var Documents = &types.ResolveDidRequestResponse{
		DidDocument:         msg.DidDocument,
		DidDocumentMetadata: msg.DidDocumentMetadata,
	}
	var DocumentStore = &types.QueryResolveDidResponse{
		ResolveDidRequestResponse: Documents,
	}
	bz := k.cdc.MustMarshalLengthPrefixed(DocumentStore)
	store.Set(key, bz)
}

func (k Keeper) GetDIDDocument(ctx sdk.Context, did string) *types.QueryResolveDidResponse {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.DIDKeyPrefix)
	key := []byte(did)
	bz := store.Get(key)
	if bz == nil {
		return nil
	}

	var doc *types.QueryResolveDidResponse
	k.cdc.MustUnmarshalLengthPrefixed(bz, doc)
	return doc
}
