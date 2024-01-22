/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Any {
  "@type"?: string;
}

export interface Status {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
}

export interface DIDDocument {
  contexts?: string[];
  id?: string;
  verification_methods?: { id?: string; type?: string; controller?: string; public_key_base58?: string }[];
  authentications?: {
    verification_method_id?: string;
    verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
  }[];
  assertion_methods?: {
    verification_method_id?: string;
    verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
  }[];
  key_agreements?: {
    verification_method_id?: string;
    verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
  }[];
  capability_invocations?: {
    verification_method_id?: string;
    verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
  }[];
  capability_delegations?: {
    verification_method_id?: string;
    verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
  }[];
  services?: { id?: string; type?: string; service_endpoint?: string }[];
}

export interface DidDocumentMetadata {
  created?: string;
  updated?: string;
  deactivated?: boolean;
  versionId?: string;
}

export interface DidResolutionMetadata {
  contentType?: string;
  error?: string;
}

export type Params = object;

export interface QueryParamsResponse {
  params?: object;
}

export interface QueryResolveDidRequestResponse {
  resolveDidRequestResponse?: {
    didDocument?: {
      contexts?: string[];
      id?: string;
      verification_methods?: { id?: string; type?: string; controller?: string; public_key_base58?: string }[];
      authentications?: {
        verification_method_id?: string;
        verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
      }[];
      assertion_methods?: {
        verification_method_id?: string;
        verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
      }[];
      key_agreements?: {
        verification_method_id?: string;
        verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
      }[];
      capability_invocations?: {
        verification_method_id?: string;
        verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
      }[];
      capability_delegations?: {
        verification_method_id?: string;
        verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
      }[];
      services?: { id?: string; type?: string; service_endpoint?: string }[];
    };
    didResolutionMetadata?: { contentType?: string; error?: string };
    didDocumentMetadata?: { created?: string; updated?: string; deactivated?: boolean; versionId?: string };
  };
}

export interface ResolveDidRequestResponse {
  didDocument?: {
    contexts?: string[];
    id?: string;
    verification_methods?: { id?: string; type?: string; controller?: string; public_key_base58?: string }[];
    authentications?: {
      verification_method_id?: string;
      verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
    }[];
    assertion_methods?: {
      verification_method_id?: string;
      verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
    }[];
    key_agreements?: {
      verification_method_id?: string;
      verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
    }[];
    capability_invocations?: {
      verification_method_id?: string;
      verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
    }[];
    capability_delegations?: {
      verification_method_id?: string;
      verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
    }[];
    services?: { id?: string; type?: string; service_endpoint?: string }[];
  };
  didResolutionMetadata?: { contentType?: string; error?: string };
  didDocumentMetadata?: { created?: string; updated?: string; deactivated?: boolean; versionId?: string };
}

export interface Service {
  id?: string;
  type?: string;
  service_endpoint?: string;
}

export interface VerificationMethod {
  id?: string;
  type?: string;
  controller?: string;
  public_key_base58?: string;
}

export interface VerificationRelationship {
  verification_method_id?: string;
  verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
}

export type MsgUpdateParamsResponse = object;

export type MsgUpsertDidResponse = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title HTTP API Console smplidentitychain.did
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/SmplEcosystem/SmplIdentityChain/did/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<{ params?: object }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
      path: `/SmplEcosystem/SmplIdentityChain/did/params`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryResolveDidRequest
   * @request GET:/SmplEcosystem/SmplIdentityChain/did/resolve_did_request/{did}
   */
  queryResolveDidRequest = (did: string, params: RequestParams = {}) =>
    this.request<
      {
        resolveDidRequestResponse?: {
          didDocument?: {
            contexts?: string[];
            id?: string;
            verification_methods?: { id?: string; type?: string; controller?: string; public_key_base58?: string }[];
            authentications?: {
              verification_method_id?: string;
              verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
            }[];
            assertion_methods?: {
              verification_method_id?: string;
              verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
            }[];
            key_agreements?: {
              verification_method_id?: string;
              verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
            }[];
            capability_invocations?: {
              verification_method_id?: string;
              verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
            }[];
            capability_delegations?: {
              verification_method_id?: string;
              verification_method?: { id?: string; type?: string; controller?: string; public_key_base58?: string };
            }[];
            services?: { id?: string; type?: string; service_endpoint?: string }[];
          };
          didResolutionMetadata?: { contentType?: string; error?: string };
          didDocumentMetadata?: { created?: string; updated?: string; deactivated?: boolean; versionId?: string };
        };
      },
      { code?: number; message?: string; details?: { "@type"?: string }[] }
    >({
      path: `/SmplEcosystem/SmplIdentityChain/did/resolve_did_request/${did}`,
      method: "GET",
      ...params,
    });
}
