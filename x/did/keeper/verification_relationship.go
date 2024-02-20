package keeper

import "github.com/SmplEcosystem/SmplIdentityChain/x/did/types"

type VerificationRelationship struct {
	types.VerificationRelationship
}

func (v *VerificationRelationship) hasDedicatedMethod() bool {
	return v.GetVerificationMethod() != nil
}
