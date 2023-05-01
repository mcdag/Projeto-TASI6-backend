import { DataSource } from "typeorm";
import { UserAuth } from "./data/entities/user-auth.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "security_mobi",
  entities: [UserAuth],
  logging: false,
  synchronize: true,
});
