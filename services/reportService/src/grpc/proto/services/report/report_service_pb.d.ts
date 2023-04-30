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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Report,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(
    message: Report,
    reader: jspb.BinaryReader
  ): Report;
}

export namespace Report {
  export type AsObject = {
    reportDate: string;
    type: string;
    description: string;
    anonymous: boolean;
    latitude: number;
    longitude: number;
  };
}

export class CreateReportRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreateReportRequest;

  hasReport(): boolean;
  clearReport(): void;
  getReport(): Report | undefined;
  setReport(value?: Report): CreateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateReportRequest
  ): CreateReportRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateReportRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportRequest;
  static deserializeBinaryFromReader(
    message: CreateReportRequest,
    reader: jspb.BinaryReader
  ): CreateReportRequest;
}

export namespace CreateReportRequest {
  export type AsObject = {
    userId: string;
    report?: Report.AsObject;
  };
}

export class CreateReportResponse extends jspb.Message {
  getCreated(): boolean;
  setCreated(value: boolean): CreateReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CreateReportResponse
  ): CreateReportResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CreateReportResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportResponse;
  static deserializeBinaryFromReader(
    message: CreateReportResponse,
    reader: jspb.BinaryReader
  ): CreateReportResponse;
}

export namespace CreateReportResponse {
  export type AsObject = {
    created: boolean;
  };
}

export class ListAllReportsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllReportsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListAllReportsRequest
  ): ListAllReportsRequest.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListAllReportsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListAllReportsRequest;
  static deserializeBinaryFromReader(
    message: ListAllReportsRequest,
    reader: jspb.BinaryReader
  ): ListAllReportsRequest;
}

export namespace ListAllReportsRequest {
  export type AsObject = {};
}

export class ListAllReportsResponse extends jspb.Message {
  clearReportsList(): void;
  getReportsList(): Array<Report>;
  setReportsList(value: Array<Report>): ListAllReportsResponse;
  addReports(value?: Report, index?: number): Report;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllReportsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ListAllReportsResponse
  ): ListAllReportsResponse.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ListAllReportsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ListAllReportsResponse;
  static deserializeBinaryFromReader(
    message: ListAllReportsResponse,
    reader: jspb.BinaryReader
  ): ListAllReportsResponse;
}

export namespace ListAllReportsResponse {
  export type AsObject = {
    reportsList: Array<Report.AsObject>;
  };
}
