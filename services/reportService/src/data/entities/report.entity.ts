import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
