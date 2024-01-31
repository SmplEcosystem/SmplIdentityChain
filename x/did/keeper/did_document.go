package keeper

import (
	"github.com/SmplEcosystem/SmplIdentityChain/x/did/types"
)

type DIDDocument types.DIDDocument
type VerificationMethod types.VerificationMethod

// VerificationMethodFrom finds a VerificationMethod from the slice of VerificationRelationship by its ID.
// There are two types of VerificationRelationship. If it has a dedicated VerificationMethod, it is returned as it is.
// If the relationship has only a ID of VerificationMethod, this function tries to find a corresponding VerificationMethod in the DIDDocument.
//func (doc DIDDocument) VerificationMethodFrom(relationships []VerificationRelationship, id string) (VerificationMethod, bool) {
//	for _, relationship := range relationships {
//		if relationship.hasDedicatedMethod() {
//			veriMethod := relationship.GetVerificationMethod()
//			if veriMethod.Id == id {
//				//return *veriMethod, true
//			}
//		} else {
//			veriMethodID := relationship.GetVerificationMethodId()
//			if veriMethodID == id {
//				return doc.VerificationMethodByID(veriMethodID)
//			}
//		}
//	}
//
//	return VerificationMethod{}, false
//}
