import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Balance } from "./Balance";

// tslint:disable
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(
    "varchar",
    { length: 50 }
  )
  name!: string;

  @OneToOne(
    type => Balance,
    balance => balance.user,
    { eager: true, cascade: true }
  )
  @JoinColumn()
  balance!: Balance;

}
