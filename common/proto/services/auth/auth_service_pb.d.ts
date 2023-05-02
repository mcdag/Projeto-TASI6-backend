// package: services.auth
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
    getUserId(): string;
    setUserId(value: string): SignUpResponse;

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
        userId: string,
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

export class ValidateUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): ValidateUserRequest;
    getAuthToken(): string;
    setAuthToken(value: string): ValidateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateUserRequest): ValidateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateUserRequest;
    static deserializeBinaryFromReader(message: ValidateUserRequest, reader: jspb.BinaryReader): ValidateUserRequest;
}

export namespace ValidateUserRequest {
    export type AsObject = {
        userId: string,
        authToken: string,
    }
}

export class UserInfo extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): UserInfo;
    getUsername(): string;
    setUsername(value: string): UserInfo;
    getEmail(): string;
    setEmail(value: string): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
    export type AsObject = {
        userId: string,
        username: string,
        email: string,
    }
}

export class ValidateUserResponse extends jspb.Message { 
    getValid(): boolean;
    setValid(value: boolean): ValidateUserResponse;

    hasUserinfo(): boolean;
    clearUserinfo(): void;
    getUserinfo(): UserInfo | undefined;
    setUserinfo(value?: UserInfo): ValidateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateUserResponse): ValidateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateUserResponse;
    static deserializeBinaryFromReader(message: ValidateUserResponse, reader: jspb.BinaryReader): ValidateUserResponse;
}

export namespace ValidateUserResponse {
    export type AsObject = {
        valid: boolean,
        userinfo?: UserInfo.AsObject,
    }
}
