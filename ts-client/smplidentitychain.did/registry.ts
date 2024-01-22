import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { QueryResolveDidRequestResponse } from "./types/smplidentitychain/did/query";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { ResolveDidRequestResponse } from "./types/smplidentitychain/did/resolve_did_request_response";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { Service } from "./types/smplidentitychain/did/service";
import { Params } from "./types/smplidentitychain/did/params";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.QueryResolveDidRequestResponse", QueryResolveDidRequestResponse],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.ResolveDidRequestResponse", ResolveDidRequestResponse],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }