export class CreateReportRequestDTO {
  userId!: string;
  authToken!: string;
  type!: string;
  reportDate!: Date;
  description!: string;
  anonymous!: boolean;
  latitude!: number;
  longitude!: number;

  constructor(dto: Partial<CreateReportRequestDTO>) {
    this.userId = dto.userId || "";
    this.authToken = dto.authToken || "";
    this.reportDate = new Date();
    this.description = dto.description || "";
    this.anonymous = dto.anonymous || false;
    this.latitude = dto.latitude || 0;
    this.longitude = dto.longitude || 0;
    this.type = dto.type || "";
  }
}
export class CreateReportResponseDTO {
  created!: boolean;

  constructor(dto: Partial<CreateReportResponseDTO>) {
    this.created = dto.created!;
  }
}
