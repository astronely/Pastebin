import * as jspb from 'google-protobuf'



export class RegisterRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterRequest;

  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    username: string,
    email: string,
    password: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    userId: number,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  getAppId(): number;
  setAppId(value: number): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
    appId: number,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
  }
}

export class IsAdminRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): IsAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminRequest): IsAdminRequest.AsObject;
  static serializeBinaryToWriter(message: IsAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminRequest;
  static deserializeBinaryFromReader(message: IsAdminRequest, reader: jspb.BinaryReader): IsAdminRequest;
}

export namespace IsAdminRequest {
  export type AsObject = {
    userId: number,
  }
}

export class IsAdminResponse extends jspb.Message {
  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): IsAdminResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsAdminResponse): IsAdminResponse.AsObject;
  static serializeBinaryToWriter(message: IsAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsAdminResponse;
  static deserializeBinaryFromReader(message: IsAdminResponse, reader: jspb.BinaryReader): IsAdminResponse;
}

export namespace IsAdminResponse {
  export type AsObject = {
    isAdmin: boolean,
  }
}

