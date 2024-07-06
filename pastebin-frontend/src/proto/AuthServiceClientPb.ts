/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.27.1
// source: auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb'; // proto import: "auth.proto"


export class AuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRegister = new grpcWeb.MethodDescriptor(
    '/auth.Auth/Register',
    grpcWeb.MethodType.UNARY,
    auth_pb.RegisterRequest,
    auth_pb.RegisterResponse,
    (request: auth_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    auth_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: auth_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_pb.RegisterResponse>;

  register(
    request: auth_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<auth_pb.RegisterResponse>;

  register(
    request: auth_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/auth.Auth/Login',
    grpcWeb.MethodType.UNARY,
    auth_pb.LoginRequest,
    auth_pb.LoginResponse,
    (request: auth_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    auth_pb.LoginResponse.deserializeBinary
  );

  login(
    request: auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_pb.LoginResponse>;

  login(
    request: auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<auth_pb.LoginResponse>;

  login(
    request: auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

  methodDescriptorIsAdmin = new grpcWeb.MethodDescriptor(
    '/auth.Auth/IsAdmin',
    grpcWeb.MethodType.UNARY,
    auth_pb.IsAdminRequest,
    auth_pb.IsAdminResponse,
    (request: auth_pb.IsAdminRequest) => {
      return request.serializeBinary();
    },
    auth_pb.IsAdminResponse.deserializeBinary
  );

  isAdmin(
    request: auth_pb.IsAdminRequest,
    metadata?: grpcWeb.Metadata | null): Promise<auth_pb.IsAdminResponse>;

  isAdmin(
    request: auth_pb.IsAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.IsAdminResponse) => void): grpcWeb.ClientReadableStream<auth_pb.IsAdminResponse>;

  isAdmin(
    request: auth_pb.IsAdminRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.IsAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.Auth/IsAdmin',
        request,
        metadata || {},
        this.methodDescriptorIsAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.Auth/IsAdmin',
    request,
    metadata || {},
    this.methodDescriptorIsAdmin);
  }

}

