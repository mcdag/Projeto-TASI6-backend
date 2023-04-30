import { DataSource } from "typeorm";
import { Report } from "./data/entities/report.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "mysecretpassword",
  database: "teste_tasi",
  entities: [Report],
  logging: true,
  synchronize: true,
});
