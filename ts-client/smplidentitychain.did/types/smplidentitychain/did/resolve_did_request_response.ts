/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DIDDocument } from "./did_document";
import { DidDocumentMetadata } from "./did_document_metadata";
import { DidResolutionMetadata } from "./did_resolution_metadata";

export const protobufPackage = "smplidentitychain.did";

export interface ResolveDidRequestResponse {
  didDocument: DIDDocument | undefined;
  didResolutionMetadata: DidResolutionMetadata | undefined;
  didDocumentMetadata: DidDocumentMetadata | undefined;
}

function createBaseResolveDidRequestResponse(): ResolveDidRequestResponse {
  return { didDocument: undefined, didResolutionMetadata: undefined, didDocumentMetadata: undefined };
}

export const ResolveDidRequestResponse = {
  encode(message: ResolveDidRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DIDDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    if (message.didResolutionMetadata !== undefined) {
      DidResolutionMetadata.encode(message.didResolutionMetadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.didDocumentMetadata !== undefined) {
      DidDocumentMetadata.encode(message.didDocumentMetadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolveDidRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolveDidRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.didDocument = DIDDocument.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.didResolutionMetadata = DidResolutionMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.didDocumentMetadata = DidDocumentMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResolveDidRequestResponse {
    return {
      didDocument: isSet(object.didDocument) ? DIDDocument.fromJSON(object.didDocument) : undefined,
      didResolutionMetadata: isSet(object.didResolutionMetadata)
        ? DidResolutionMetadata.fromJSON(object.didResolutionMetadata)
        : undefined,
      didDocumentMetadata: isSet(object.didDocumentMetadata)
        ? DidDocumentMetadata.fromJSON(object.didDocumentMetadata)
        : undefined,
    };
  },

  toJSON(message: ResolveDidRequestResponse): unknown {
    const obj: any = {};
    if (message.didDocument !== undefined) {
      obj.didDocument = DIDDocument.toJSON(message.didDocument);
    }
    if (message.didResolutionMetadata !== undefined) {
      obj.didResolutionMetadata = DidResolutionMetadata.toJSON(message.didResolutionMetadata);
    }
    if (message.didDocumentMetadata !== undefined) {
      obj.didDocumentMetadata = DidDocumentMetadata.toJSON(message.didDocumentMetadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResolveDidRequestResponse>, I>>(base?: I): ResolveDidRequestResponse {
    return ResolveDidRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResolveDidRequestResponse>, I>>(object: I): ResolveDidRequestResponse {
    const message = createBaseResolveDidRequestResponse();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DIDDocument.fromPartial(object.didDocument)
      : undefined;
    message.didResolutionMetadata =
      (object.didResolutionMetadata !== undefined && object.didResolutionMetadata !== null)
        ? DidResolutionMetadata.fromPartial(object.didResolutionMetadata)
        : undefined;
    message.didDocumentMetadata = (object.didDocumentMetadata !== undefined && object.didDocumentMetadata !== null)
      ? DidDocumentMetadata.fromPartial(object.didDocumentMetadata)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
