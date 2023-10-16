/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "smplidentitychain.did";

export interface VerificationMethod {
  id: string;
  vmType: string;
  controller: string[];
  publicKeyBase58: string;
}

function createBaseVerificationMethod(): VerificationMethod {
  return { id: "", vmType: "", controller: [], publicKeyBase58: "" };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.vmType !== "") {
      writer.uint32(18).string(message.vmType);
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }
    if (message.publicKeyBase58 !== "") {
      writer.uint32(34).string(message.publicKeyBase58);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.vmType = reader.string();
          break;
        case 3:
          message.controller.push(reader.string());
          break;
        case 4:
          message.publicKeyBase58 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      vmType: isSet(object.vmType) ? String(object.vmType) : "",
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      publicKeyBase58: isSet(object.publicKeyBase58) ? String(object.publicKeyBase58) : "",
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.vmType !== undefined && (obj.vmType = message.vmType);
    if (message.controller) {
      obj.controller = message.controller.map((e) => e);
    } else {
      obj.controller = [];
    }
    message.publicKeyBase58 !== undefined && (obj.publicKeyBase58 = message.publicKeyBase58);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VerificationMethod>, I>>(object: I): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.vmType = object.vmType ?? "";
    message.controller = object.controller?.map((e) => e) || [];
    message.publicKeyBase58 = object.publicKeyBase58 ?? "";
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
