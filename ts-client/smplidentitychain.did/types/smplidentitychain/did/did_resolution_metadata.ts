/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "smplidentitychain.did";

export interface DidResolutionMetadata {
  contentType: string;
  error: string;
}

function createBaseDidResolutionMetadata(): DidResolutionMetadata {
  return { contentType: "", error: "" };
}

export const DidResolutionMetadata = {
  encode(message: DidResolutionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidResolutionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidResolutionMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contentType = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DidResolutionMetadata {
    return {
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      error: isSet(object.error) ? String(object.error) : "",
    };
  },

  toJSON(message: DidResolutionMetadata): unknown {
    const obj: any = {};
    if (message.contentType !== "") {
      obj.contentType = message.contentType;
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DidResolutionMetadata>, I>>(base?: I): DidResolutionMetadata {
    return DidResolutionMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DidResolutionMetadata>, I>>(object: I): DidResolutionMetadata {
    const message = createBaseDidResolutionMetadata();
    message.contentType = object.contentType ?? "";
    message.error = object.error ?? "";
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
