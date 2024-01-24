import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { ResolveDidRequestResponse } from "./types/smplidentitychain/did/resolve_did_request_response";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { Params } from "./types/smplidentitychain/did/params";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { Service } from "./types/smplidentitychain/did/service";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.ResolveDidRequestResponse", ResolveDidRequestResponse],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    
];

export { msgTypes }