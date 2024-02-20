package keeper

import (
	sdkerrors "cosmossdk.io/errors"
	"crypto/ed25519"
	"crypto/rand"
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
	"github.com/cosmos/btcutil/base58"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestVerifyDidOwnership(t *testing.T) {
	// Test Keeper instance mocking
	keeper := Keeper{
		// Mocking required functionalities for testing
	}

	publicKey, privateKey, err := ed25519.GenerateKey(rand.Reader)
	if err != nil {
		assert.FailNow(t, "Key generation failed")
		return
	}

	didId := "did:smpl:2112"
	keyId := didId + "#TomSawyer"
	didDoc := types.DIDDocument{
		Id: didId,
		VerificationMethods: []*types.VerificationMethod{
			{
				Id:              keyId,
				Type:            types.ED25519_2018,
				Controller:      didId,
				PublicKeyBase58: base58.Encode(publicKey),
			},
		},
	}

	didDocBytes, err := didDoc.Marshal()
	if err != nil {
		assert.FailNow(t, "Failed to marshal did doc")
		return
	}
	signature := ed25519.Sign(privateKey, didDocBytes)

	// Test cases
	testCases := []struct {
		name                 string
		doc                  *types.DIDDocument
		seq                  uint64
		verificationMethodID string
		sig                  []byte
		expectedSeq          uint64
		expectedErr          error
	}{
		{
			name:                 "Successful verification",
			doc:                  &didDoc,
			seq:                  1,
			verificationMethodID: keyId,
			sig:                  signature,
			expectedSeq:          2,
			expectedErr:          nil,
		},
		{
			name:                 "Failed verification",
			doc:                  &didDoc,
			seq:                  1,
			verificationMethodID: keyId,
			sig:                  []byte("Cygnus"),
			expectedSeq:          0,
			expectedErr:          sdkerrors.Wrapf(types.ErrSigVerificationFailed, "Could not verify signature for DID Document"),
		},
		// Further test cases...
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			newSeq, err := keeper.VerifyDidOwnership(tc.doc, tc.seq, tc.verificationMethodID, tc.sig)
			assert.Equal(t, tc.expectedSeq, newSeq)
			assert.Equal(t, tc.expectedErr.Error(), err.Error())
		})
	}
}
