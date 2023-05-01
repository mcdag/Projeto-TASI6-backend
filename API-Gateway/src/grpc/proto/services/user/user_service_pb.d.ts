// package: services.user
// file: proto/services/user/user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        name: string,
        email: string,
        username: string,
    }
}

export class CreateUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class CreateUserResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): CreateUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        userId: string,
    }
}

export class GetUserInfoRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInfoRequest): GetUserInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInfoRequest;
    static deserializeBinaryFromReader(message: GetUserInfoRequest, reader: jspb.BinaryReader): GetUserInfoRequest;
}

export namespace GetUserInfoRequest {
    export type AsObject = {
        userId: string,
    }
}

export class GetUserInfoResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): GetUserInfoResponse;
    getEmail(): string;
    setEmail(value: string): GetUserInfoResponse;
    getUsername(): string;
    setUsername(value: string): GetUserInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserInfoResponse): GetUserInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserInfoResponse;
    static deserializeBinaryFromReader(message: GetUserInfoResponse, reader: jspb.BinaryReader): GetUserInfoResponse;
}

export namespace GetUserInfoResponse {
    export type AsObject = {
        name: string,
        email: string,
        username: string,
    }
}
