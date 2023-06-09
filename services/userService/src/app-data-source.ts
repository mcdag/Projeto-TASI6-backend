import { DataSource } from "typeorm";
import { User } from "./data/entities/user.entity";

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: "postgres",
  password: process.env.DB_PASSWORD,
  database: "security_mobi",
  entities: [User],
  logging: false,
  synchronize: true,
});
