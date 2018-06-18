import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

// tslint:disable
@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "double",
    default: "0" 
  })
  amount!: number;

  @OneToOne(
    type => User,
    user => user.balance
  )
  user!: User;
}
