import { GeneratedType } from "@cosmjs/proto-signing";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { ResolveDidRequestResponse } from "./types/smplidentitychain/did/resolve_did_request_response";
import { Service } from "./types/smplidentitychain/did/service";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { Params } from "./types/smplidentitychain/did/params";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.ResolveDidRequestResponse", ResolveDidRequestResponse],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.QueryResolveDidRequestResponse", QueryResolveDidRequestResponse],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    
];

export { msgTypes }