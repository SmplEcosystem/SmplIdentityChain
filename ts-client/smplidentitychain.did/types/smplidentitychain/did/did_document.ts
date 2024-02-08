/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Service } from "./service";
import { VerificationMethod } from "./verification_method";
import { VerificationRelationship } from "./verification_relationship";

export const protobufPackage = "smplidentitychain.did";

export interface DIDDocument {
  contexts: string[];
  id: string;
  verificationMethod: VerificationMethod[];
  authentication: VerificationRelationship[];
  assertionMethod: VerificationRelationship[];
  keyAgreement: VerificationRelationship[];
  capabilityInvocation: VerificationRelationship[];
  capabilityDelegation: VerificationRelationship[];
  services: Service[];
}

function createBaseDIDDocument(): DIDDocument {
  return {
    contexts: [],
    id: "",
    verificationMethod: [],
    authentication: [],
    assertionMethod: [],
    keyAgreement: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    services: [],
  };
}

export const DIDDocument = {
  encode(message: DIDDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contexts) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.authentication) {
      VerificationRelationship.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.assertionMethod) {
      VerificationRelationship.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.keyAgreement) {
      VerificationRelationship.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.capabilityInvocation) {
      VerificationRelationship.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.capabilityDelegation) {
      VerificationRelationship.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DIDDocument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDIDDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contexts.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authentication.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.assertionMethod.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.keyAgreement.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.capabilityInvocation.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.capabilityDelegation.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.services.push(Service.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DIDDocument {
    return {
      contexts: Array.isArray(object?.contexts) ? object.contexts.map((e: any) => String(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
      verificationMethod: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentication: Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      assertionMethod: Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      keyAgreement: Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      services: Array.isArray(object?.service)
        ? object.service.map((e: any) => Service.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DIDDocument): unknown {
    const obj: any = {};
    if (message.contexts?.length) {
      obj.contexts = message.contexts;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.verificationMethod?.length) {
      obj.verificationMethod = message.verificationMethod.map((e) => VerificationMethod.toJSON(e));
    }
    if (message.authentication?.length) {
      obj.authentication = message.authentication.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.assertionMethod?.length) {
      obj.assertionMethod = message.assertionMethod.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.keyAgreement?.length) {
      obj.keyAgreement = message.keyAgreement.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.capabilityInvocation?.length) {
      obj.capabilityInvocation = message.capabilityInvocation.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.capabilityDelegation?.length) {
      obj.capabilityDelegation = message.capabilityDelegation.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.services?.length) {
      obj.service = message.services.map((e) => Service.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DIDDocument>, I>>(base?: I): DIDDocument {
    return DIDDocument.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DIDDocument>, I>>(object: I): DIDDocument {
    const message = createBaseDIDDocument();
    message.contexts = object.contexts?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentication = object.authentication?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.assertionMethod = object.assertionMethod?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.keyAgreement = object.keyAgreement?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map((e) => VerificationRelationship.fromPartial(e)) ||
      [];
    message.capabilityDelegation = object.capabilityDelegation?.map((e) => VerificationRelationship.fromPartial(e)) ||
      [];
    message.services = object.services?.map((e) => Service.fromPartial(e)) || [];
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
