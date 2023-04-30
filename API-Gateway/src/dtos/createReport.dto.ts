import {
  CreateReportRequest,
  CreateReportResponse,
  Report,
  ReportType,
} from "../grpc/proto/services/report/report_service_pb";

export class CreateReportRequestDTO {
  userId: string;
  typesList: ReportType[];
  reportDate: Date;
  description: string;
  anonymous: boolean;
  latitude: number;
  longitude: number;

  constructor(dto: Partial<CreateReportRequestDTO>) {
    this.userId = dto.userId || "";
    this.reportDate = new Date();
    this.description = dto.description || "";
    this.anonymous = dto.anonymous || false;
    this.latitude = dto.latitude || 0;
    this.longitude = dto.longitude || 0;
    this.typesList = dto.typesList || [];
  }

  public toProto(): CreateReportRequest {
    const proto = new CreateReportRequest();
    proto.setUserId(this.userId);

    const report = new Report();
    report.setAnonymous(this.anonymous);
    report.setDescription(this.description);
    report.setLatitude(this.latitude);
    report.setLongitude(this.longitude);
    report.setReportDate(this.reportDate.toISOString());
    report.setTypesList(this.typesList);

    proto.setReport(report);
    console.log(`Generated proto: ${proto}`);
    return proto;
  }
}
