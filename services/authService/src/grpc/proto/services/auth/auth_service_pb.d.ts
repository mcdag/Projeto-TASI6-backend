// package: services.user
// file: proto/services/auth/auth_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SignUpRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): SignUpRequest;
    getUsername(): string;
    setUsername(value: string): SignUpRequest;
    getPassword(): string;
    setPassword(value: string): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        userId: string,
        username: string,
        password: string,
    }
}

export class SignUpResponse extends jspb.Message { 
    getCreated(): boolean;
    setCreated(value: boolean): SignUpResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResponse;
    static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
}

export namespace SignUpResponse {
    export type AsObject = {
        created: boolean,
    }
}

export class LoginRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): LoginResponse;
    getAuthToken(): string;
    setAuthToken(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        userId: string,
        authToken: string,
    }
}
