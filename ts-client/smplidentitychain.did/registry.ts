import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryResolveDidRequest } from "./types/smplidentitychain/did/query";
import { MsgUpdateParams } from "./types/smplidentitychain/did/tx";
import { DIDDocument } from "./types/smplidentitychain/did/did_document";
import { QueryParamsRequest } from "./types/smplidentitychain/did/query";
import { VerificationRelationship } from "./types/smplidentitychain/did/verification_relationship";
import { DidInfo } from "./types/smplidentitychain/did/did_info";
import { DataWithSequence } from "./types/smplidentitychain/did/data_with_sequence";
import { VerificationMethod } from "./types/smplidentitychain/did/verification_method";
import { ResolutionOptions } from "./types/smplidentitychain/did/resolution_options";
import { DidDocumentMetadata } from "./types/smplidentitychain/did/did_document_metadata";
import { Service } from "./types/smplidentitychain/did/service";
import { QueryParamsResponse } from "./types/smplidentitychain/did/query";
import { MsgUpsertDidResponse } from "./types/smplidentitychain/did/tx";
import { GenesisState } from "./types/smplidentitychain/did/genesis";
import { QueryResolveDidResponse } from "./types/smplidentitychain/did/query";
import { Params } from "./types/smplidentitychain/did/params";
import { MsgUpdateParamsResponse } from "./types/smplidentitychain/did/tx";
import { MsgUpsertDid } from "./types/smplidentitychain/did/tx";
import { DidResolutionMetadata } from "./types/smplidentitychain/did/did_resolution_metadata";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/smplidentitychain.did.QueryResolveDidRequest", QueryResolveDidRequest],
    ["/smplidentitychain.did.MsgUpdateParams", MsgUpdateParams],
    ["/smplidentitychain.did.DIDDocument", DIDDocument],
    ["/smplidentitychain.did.QueryParamsRequest", QueryParamsRequest],
    ["/smplidentitychain.did.VerificationRelationship", VerificationRelationship],
    ["/smplidentitychain.did.DidInfo", DidInfo],
    ["/smplidentitychain.did.DataWithSequence", DataWithSequence],
    ["/smplidentitychain.did.VerificationMethod", VerificationMethod],
    ["/smplidentitychain.did.ResolutionOptions", ResolutionOptions],
    ["/smplidentitychain.did.DidDocumentMetadata", DidDocumentMetadata],
    ["/smplidentitychain.did.Service", Service],
    ["/smplidentitychain.did.QueryParamsResponse", QueryParamsResponse],
    ["/smplidentitychain.did.MsgUpsertDidResponse", MsgUpsertDidResponse],
    ["/smplidentitychain.did.GenesisState", GenesisState],
    ["/smplidentitychain.did.QueryResolveDidResponse", QueryResolveDidResponse],
    ["/smplidentitychain.did.Params", Params],
    ["/smplidentitychain.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/smplidentitychain.did.MsgUpsertDid", MsgUpsertDid],
    ["/smplidentitychain.did.DidResolutionMetadata", DidResolutionMetadata],
    
];

export { msgTypes }