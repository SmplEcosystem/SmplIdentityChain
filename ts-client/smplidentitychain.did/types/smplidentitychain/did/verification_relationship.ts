/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { VerificationMethod } from "./verification_method";

export const protobufPackage = "smplidentitychain.did";

export interface VerificationRelationship {
  verificationMethodId?: string | undefined;
  verificationMethod?: VerificationMethod | undefined;
}

function createBaseVerificationRelationship(): VerificationRelationship {
  return { verificationMethodId: undefined, verificationMethod: undefined };
}

export const VerificationRelationship = {
  encode(message: VerificationRelationship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationMethodId !== undefined) {
      writer.uint32(10).string(message.verificationMethodId);
    }
    if (message.verificationMethod !== undefined) {
      VerificationMethod.encode(message.verificationMethod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRelationship {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationRelationship();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verificationMethodId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationMethod = VerificationMethod.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationRelationship {
    return {
      verificationMethodId: isSet(object.verificationMethodId) ? String(object.verificationMethodId) : undefined,
      verificationMethod: isSet(object.verificationMethod)
        ? VerificationMethod.fromJSON(object.verificationMethod)
        : undefined,
    };
  },

  toJSON(message: VerificationRelationship): unknown {
    const obj: any = {};
    if (message.verificationMethodId !== undefined) {
      obj.verificationMethodId = message.verificationMethodId;
    }
    if (message.verificationMethod !== undefined) {
      obj.verificationMethod = VerificationMethod.toJSON(message.verificationMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationRelationship>, I>>(base?: I): VerificationRelationship {
    return VerificationRelationship.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationRelationship>, I>>(object: I): VerificationRelationship {
    const message = createBaseVerificationRelationship();
    message.verificationMethodId = object.verificationMethodId ?? undefined;
    message.verificationMethod = (object.verificationMethod !== undefined && object.verificationMethod !== null)
      ? VerificationMethod.fromPartial(object.verificationMethod)
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
