import {
  CreateReportRequest,
  Report,
} from "../grpc/proto/services/report/report_service_pb";

export class CreateReportRequestDTO {
  userId: string;
  type: string;
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
    this.type = dto.type || "";
  }

  public toProto(): CreateReportRequest {
    const proto = new CreateReportRequest();
    proto.setUserId(this.userId);

    const report = new Report()
      .setAnonymous(this.anonymous)
      .setDescription(this.description)
      .setLatitude(this.latitude)
      .setLongitude(this.longitude)
      .setReportDate(this.reportDate.toISOString())
      .setType(this.type);

    proto.setReport(report);
    console.log(`Generated proto: ${proto.getReport()?.getLongitude()}`);
    return proto;
  }
}
