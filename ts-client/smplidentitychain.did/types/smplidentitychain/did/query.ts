/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { ResolveDidRequestResponse } from "./resolve_did_request_response";

export const protobufPackage = "smplidentitychain.did";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryResolveDidRequest {
  did: string;
}

export interface QueryResolveDidResponse {
  resolveDidRequestResponse: ResolveDidRequestResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryResolveDidRequest(): QueryResolveDidRequest {
  return { did: "" };
}

export const QueryResolveDidRequest = {
  encode(message: QueryResolveDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveDidRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.did = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResolveDidRequest {
    return { did: isSet(object.did) ? String(object.did) : "" };
  },

  toJSON(message: QueryResolveDidRequest): unknown {
    const obj: any = {};
    if (message.did !== "") {
      obj.did = message.did;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResolveDidRequest>, I>>(base?: I): QueryResolveDidRequest {
    return QueryResolveDidRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryResolveDidRequest>, I>>(object: I): QueryResolveDidRequest {
    const message = createBaseQueryResolveDidRequest();
    message.did = object.did ?? "";
    return message;
  },
};

function createBaseQueryResolveDidRequestResponse(): QueryResolveDidResponse {
  return { resolveDidRequestResponse: undefined };
}

export const QueryResolveDidRequestResponse = {
  encode(message: QueryResolveDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resolveDidRequestResponse !== undefined) {
      ResolveDidRequestResponse.encode(message.resolveDidRequestResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResolveDidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResolveDidRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resolveDidRequestResponse = ResolveDidRequestResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResolveDidResponse {
    return {
      resolveDidRequestResponse: isSet(object.resolveDidRequestResponse)
        ? ResolveDidRequestResponse.fromJSON(object.resolveDidRequestResponse)
        : undefined,
    };
  },

  toJSON(message: QueryResolveDidResponse): unknown {
    const obj: any = {};
    if (message.resolveDidRequestResponse !== undefined) {
      obj.resolveDidRequestResponse = ResolveDidRequestResponse.toJSON(message.resolveDidRequestResponse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResolveDidResponse>, I>>(base?: I): QueryResolveDidResponse {
    return QueryResolveDidRequestResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryResolveDidResponse>, I>>(
    object: I,
  ): QueryResolveDidResponse {
    const message = createBaseQueryResolveDidRequestResponse();
    message.resolveDidRequestResponse =
      (object.resolveDidRequestResponse !== undefined && object.resolveDidRequestResponse !== null)
        ? ResolveDidRequestResponse.fromPartial(object.resolveDidRequestResponse)
        : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ResolveDidRequest items. */
  ResolveDidRequest(request: QueryResolveDidRequest): Promise<QueryResolveDidResponse>;
}

export const QueryServiceName = "smplidentitychain.did.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ResolveDidRequest = this.ResolveDidRequest.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(_m0.Reader.create(data)));
  }

  ResolveDidRequest(request: QueryResolveDidRequest): Promise<QueryResolveDidResponse> {
    const data = QueryResolveDidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResolveDidRequest", data);
    return promise.then((data) => QueryResolveDidRequestResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
