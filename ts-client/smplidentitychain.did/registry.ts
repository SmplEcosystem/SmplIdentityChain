import { GeneratedType } from "@cosmjs/proto-signing";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { Params } from "./types/smplidentitychain/did/params";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { Service } from "./types/smplidentitychain/did/service";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { DidInfo } from "./types/smplidentitychain/did/did_info";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.DidInfo", DidInfo],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    
];

export { msgTypes }