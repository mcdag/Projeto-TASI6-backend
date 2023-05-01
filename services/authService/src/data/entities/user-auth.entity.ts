import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserAuth {
  @PrimaryColumn()
  user_id!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @Column()
  authToken?: string;

  @Column()
  authTokenExpirationDate?: Date;

  @Column()
  authTokenCreatedAt?: Date;

  public constructor(init?: Partial<UserAuth>) {
    Object.assign(this, init);
  }
}
