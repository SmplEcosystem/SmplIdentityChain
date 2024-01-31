/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DIDDocument } from "./did_document";
import { DidDocumentMetadata } from "./did_document_metadata";

export const protobufPackage = "smplidentitychain.did";

export interface DidInfo {
  didDocument: DIDDocument | undefined;
  didDocumentMetadata: DidDocumentMetadata | undefined;
  sequence: number;
}

function createBaseDidInfo(): DidInfo {
  return { didDocument: undefined, didDocumentMetadata: undefined, sequence: 0 };
}

export const DidInfo = {
  encode(message: DidInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didDocument !== undefined) {
      DIDDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
    }
    if (message.didDocumentMetadata !== undefined) {
      DidDocumentMetadata.encode(message.didDocumentMetadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.sequence !== 0) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidInfo();
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

          message.didDocumentMetadata = DidDocumentMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.sequence = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DidInfo {
    return {
      didDocument: isSet(object.didDocument) ? DIDDocument.fromJSON(object.didDocument) : undefined,
      didDocumentMetadata: isSet(object.didDocumentMetadata)
        ? DidDocumentMetadata.fromJSON(object.didDocumentMetadata)
        : undefined,
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
    };
  },

  toJSON(message: DidInfo): unknown {
    const obj: any = {};
    if (message.didDocument !== undefined) {
      obj.didDocument = DIDDocument.toJSON(message.didDocument);
    }
    if (message.didDocumentMetadata !== undefined) {
      obj.didDocumentMetadata = DidDocumentMetadata.toJSON(message.didDocumentMetadata);
    }
    if (message.sequence !== 0) {
      obj.sequence = Math.round(message.sequence);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DidInfo>, I>>(base?: I): DidInfo {
    return DidInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DidInfo>, I>>(object: I): DidInfo {
    const message = createBaseDidInfo();
    message.didDocument = (object.didDocument !== undefined && object.didDocument !== null)
      ? DIDDocument.fromPartial(object.didDocument)
      : undefined;
    message.didDocumentMetadata = (object.didDocumentMetadata !== undefined && object.didDocumentMetadata !== null)
      ? DidDocumentMetadata.fromPartial(object.didDocumentMetadata)
      : undefined;
    message.sequence = object.sequence ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
