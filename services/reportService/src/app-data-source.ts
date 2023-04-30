import { DataSource } from "typeorm";
import { Report } from "./data/entities/report.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 15432,
  username: "postgres",
//password: process.env.DB_PASSWORD,
  database: "security-mob",
  password: "postgres",
  entities: [Report],
  logging: true,
  synchronize: true,
});
