import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
