/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "smplidentitychain.did";

export interface ResolutionOptions {
  accept: string;
}

function createBaseResolutionOptions(): ResolutionOptions {
  return { accept: "" };
}

export const ResolutionOptions = {
  encode(message: ResolutionOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accept !== "") {
      writer.uint32(10).string(message.accept);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResolutionOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResolutionOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accept = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResolutionOptions {
    return { accept: isSet(object.accept) ? String(object.accept) : "" };
  },

  toJSON(message: ResolutionOptions): unknown {
    const obj: any = {};
    if (message.accept !== "") {
      obj.accept = message.accept;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResolutionOptions>, I>>(base?: I): ResolutionOptions {
    return ResolutionOptions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResolutionOptions>, I>>(object: I): ResolutionOptions {
    const message = createBaseResolutionOptions();
    message.accept = object.accept ?? "";
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
