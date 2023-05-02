// package: services.report
// file: proto/services/report/report_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Report extends jspb.Message { 
    getReportDate(): string;
    setReportDate(value: string): Report;
    getType(): string;
    setType(value: string): Report;
    getDescription(): string;
    setDescription(value: string): Report;
    getAnonymous(): boolean;
    setAnonymous(value: boolean): Report;
    getLatitude(): number;
    setLatitude(value: number): Report;
    getLongitude(): number;
    setLongitude(value: number): Report;
    getUserId(): string;
    setUserId(value: string): Report;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report.AsObject;
    static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report;
    static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
    export type AsObject = {
        reportDate: string,
        type: string,
        description: string,
        anonymous: boolean,
        latitude: number,
        longitude: number,
        userId: string,
    }
}

export class ListAllReportsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllReportsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllReportsRequest): ListAllReportsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllReportsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllReportsRequest;
    static deserializeBinaryFromReader(message: ListAllReportsRequest, reader: jspb.BinaryReader): ListAllReportsRequest;
}

export namespace ListAllReportsRequest {
    export type AsObject = {
    }
}

export class ListAllReportsResponse extends jspb.Message { 
    clearReportsList(): void;
    getReportsList(): Array<Report>;
    setReportsList(value: Array<Report>): ListAllReportsResponse;
    addReports(value?: Report, index?: number): Report;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListAllReportsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListAllReportsResponse): ListAllReportsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListAllReportsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListAllReportsResponse;
    static deserializeBinaryFromReader(message: ListAllReportsResponse, reader: jspb.BinaryReader): ListAllReportsResponse;
}

export namespace ListAllReportsResponse {
    export type AsObject = {
        reportsList: Array<Report.AsObject>,
    }
}
