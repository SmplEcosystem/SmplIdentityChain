package types

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/did module sentinel errors
var (
	ErrInvalidSigner                           = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrVerificationMethodIDNotFound            = sdkerrors.Register(ModuleName, 1101, "VerificationMethodID not found")
	ErrVerificationMethodKeyTypeNotImplemented = sdkerrors.Register(ModuleName, 1102, "Verification not implemented with key type")
	ErrInvalidSecp256k1PublicKey               = sdkerrors.Register(ModuleName, 1103, "Invalid Secp256k1 public key")
	ErrSigVerificationFailed                   = sdkerrors.Register(ModuleName, 1104, "DID signature verification was failed")
	DidDocumentMarshalFailed                   = sdkerrors.Register(ModuleName, 1105, "DID Document marshaling to byte array failed")
)
