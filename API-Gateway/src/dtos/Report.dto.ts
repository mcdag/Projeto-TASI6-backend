export class ReportDto {
  username?: string;
  latitude!: number;
  longitude!: number;
  type!: string;
  description!: string;
  date!: Date;

  constructor(dto: Partial<ReportDto>) {
    this.username = dto.username;
    this.latitude = dto.latitude ?? 0;
    this.longitude = dto.longitude ?? 0;
    this.type = dto.type ?? "";
    this.date = dto.date ?? new Date();
    this.description = dto.description ?? "";
  }
}
