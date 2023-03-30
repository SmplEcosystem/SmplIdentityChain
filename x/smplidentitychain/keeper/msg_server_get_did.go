package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/google/uuid"

	"SmplIdentityChain/x/smplidentitychain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) GetDid(goCtx context.Context, msg *types.MsgGetDid) (*types.MsgGetDidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DidKey))

	id := uuid.New()
	did := types.Did{
		Id:            id.String(),
		Fingerprint:   msg.Fingerprint,
		BaseAccountId: "bob",
	}

	appendedValue, _ := did.Marshal()

	idBytes, _ := id.MarshalBinary()
	store.Set(idBytes, appendedValue)

	return &types.MsgGetDidResponse{Did: id.String()}, nil
}
