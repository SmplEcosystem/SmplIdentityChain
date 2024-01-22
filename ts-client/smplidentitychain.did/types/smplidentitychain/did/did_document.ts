/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Service } from "./service";
import { VerificationMethod } from "./verification_method";
import { VerificationRelationship } from "./verification_relationship";

export const protobufPackage = "smplidentitychain.did";

export interface DIDDocument {
  contexts: string[];
  id: string;
  verificationMethods: VerificationMethod[];
  authentications: VerificationRelationship[];
  assertionMethods: VerificationRelationship[];
  keyAgreements: VerificationRelationship[];
  capabilityInvocations: VerificationRelationship[];
  capabilityDelegations: VerificationRelationship[];
  services: Service[];
}

function createBaseDIDDocument(): DIDDocument {
  return {
    contexts: [],
    id: "",
    verificationMethods: [],
    authentications: [],
    assertionMethods: [],
    keyAgreements: [],
    capabilityInvocations: [],
    capabilityDelegations: [],
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
    for (const v of message.verificationMethods) {
      VerificationMethod.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.authentications) {
      VerificationRelationship.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.assertionMethods) {
      VerificationRelationship.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.keyAgreements) {
      VerificationRelationship.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.capabilityInvocations) {
      VerificationRelationship.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.capabilityDelegations) {
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

          message.verificationMethods.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authentications.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.assertionMethods.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.keyAgreements.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.capabilityInvocations.push(VerificationRelationship.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.capabilityDelegations.push(VerificationRelationship.decode(reader, reader.uint32()));
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
      verificationMethods: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentications: Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      assertionMethods: Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      keyAgreements: Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityInvocations: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => VerificationRelationship.fromJSON(e))
        : [],
      capabilityDelegations: Array.isArray(object?.capabilityDelegation)
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
    if (message.verificationMethods?.length) {
      obj.verificationMethod = message.verificationMethods.map((e) => VerificationMethod.toJSON(e));
    }
    if (message.authentications?.length) {
      obj.authentication = message.authentications.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.assertionMethods?.length) {
      obj.assertionMethod = message.assertionMethods.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.keyAgreements?.length) {
      obj.keyAgreement = message.keyAgreements.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.capabilityInvocations?.length) {
      obj.capabilityInvocation = message.capabilityInvocations.map((e) => VerificationRelationship.toJSON(e));
    }
    if (message.capabilityDelegations?.length) {
      obj.capabilityDelegation = message.capabilityDelegations.map((e) => VerificationRelationship.toJSON(e));
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
    message.verificationMethods = object.verificationMethods?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentications = object.authentications?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.assertionMethods = object.assertionMethods?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.keyAgreements = object.keyAgreements?.map((e) => VerificationRelationship.fromPartial(e)) || [];
    message.capabilityInvocations = object.capabilityInvocations?.map((e) => VerificationRelationship.fromPartial(e)) ||
      [];
    message.capabilityDelegations = object.capabilityDelegations?.map((e) => VerificationRelationship.fromPartial(e)) ||
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
