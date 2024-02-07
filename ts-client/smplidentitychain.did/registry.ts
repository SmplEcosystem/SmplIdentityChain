import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { Params } from "./types/smplidentitychain/did/params";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { DidInfo } from "./types/smplidentitychain/did/did_info";
import { Service } from "./types/smplidentitychain/did/service";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";
import { DataWithSequence } from "./types/smplidentitychain/did/data_with_sequence";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.DidInfo", DidInfo],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    ["/smplidentitychain.did.DataWithSequence", DataWithSequence],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    
];

export { msgTypes }