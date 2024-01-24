import { GeneratedType } from "@cosmjs/proto-signing";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { ResolveDidRequestResponse } from "./types/smplidentitychain/did/resolve_did_request_response";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { Service } from "./types/smplidentitychain/did/service";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { Params } from "./types/smplidentitychain/did/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.ResolveDidRequestResponse", ResolveDidRequestResponse],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.Params", Params],
    
];

export { msgTypes }