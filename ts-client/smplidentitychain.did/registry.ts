import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { DataWithSequence } from "./types/smplidentitychain/did/data_with_sequence";
import { Service } from "./types/smplidentitychain/did/service";
import { Params } from "./types/smplidentitychain/did/params";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { DidInfo } from "./types/smplidentitychain/did/did_info";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.DataWithSequence", DataWithSequence],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.DidInfo", DidInfo],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    
];

export { msgTypes }