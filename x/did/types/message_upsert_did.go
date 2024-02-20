package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUpsertDid{}

func NewMsgUpsertDid(creator string, didDocument *DIDDocument, didDocumentMetadata *DidDocumentMetadata) *MsgUpsertDid {
	return &MsgUpsertDid{
		Creator:             creator,
		DidDocument:         didDocument,
		DidDocumentMetadata: didDocumentMetadata,
	}
}

func (msg *MsgUpsertDid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
