import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CreateReportRequest } from "../../grpc/proto/services/report/report_service_pb";

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  user_id?: string;

  @Column()
  report_date!: string;

  @Column()
  type!: string;

  @Column()
  description!: string;

  @Column()
  anonymous!: boolean;

  @Column()
  latitude!: number;

  @Column()
  longitude!: number;
}
