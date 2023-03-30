package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgGetDid = "get_did"

var _ sdk.Msg = &MsgGetDid{}

func NewMsgGetDid(creator string, fingerprint string) *MsgGetDid {
	return &MsgGetDid{
		Creator:     creator,
		Fingerprint: fingerprint,
	}
}

func (msg *MsgGetDid) Route() string {
	return RouterKey
}

func (msg *MsgGetDid) Type() string {
	return TypeMsgGetDid
}

func (msg *MsgGetDid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgGetDid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgGetDid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
