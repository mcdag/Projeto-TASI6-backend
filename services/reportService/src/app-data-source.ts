import { DataSource } from "typeorm";
import { Report } from "./data/entities/report.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "security_mobi",
  entities: [Report],
  logging: true,
  synchronize: true,
});
