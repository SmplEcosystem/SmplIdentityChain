/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "smplidentitychain.did";

export interface DidDocumentMetadata {
  created: string;
  updated: string;
  deactivated: boolean;
  versionId: string;
}

function createBaseDidDocumentMetadata(): DidDocumentMetadata {
  return { created: "", updated: "", deactivated: false, versionId: "" };
}

export const DidDocumentMetadata = {
  encode(message: DidDocumentMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created !== "") {
      writer.uint32(10).string(message.created);
    }
    if (message.updated !== "") {
      writer.uint32(18).string(message.updated);
    }
    if (message.deactivated === true) {
      writer.uint32(24).bool(message.deactivated);
    }
    if (message.versionId !== "") {
      writer.uint32(34).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocumentMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocumentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.created = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updated = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deactivated = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DidDocumentMetadata {
    return {
      created: isSet(object.created) ? String(object.created) : "",
      updated: isSet(object.updated) ? String(object.updated) : "",
      deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
    };
  },

  toJSON(message: DidDocumentMetadata): unknown {
    const obj: any = {};
    if (message.created !== "") {
      obj.created = message.created;
    }
    if (message.updated !== "") {
      obj.updated = message.updated;
    }
    if (message.deactivated === true) {
      obj.deactivated = message.deactivated;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DidDocumentMetadata>, I>>(base?: I): DidDocumentMetadata {
    return DidDocumentMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DidDocumentMetadata>, I>>(object: I): DidDocumentMetadata {
    const message = createBaseDidDocumentMetadata();
    message.created = object.created ?? "";
    message.updated = object.updated ?? "";
    message.deactivated = object.deactivated ?? false;
    message.versionId = object.versionId ?? "";
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
