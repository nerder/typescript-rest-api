import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Balance } from './Balance';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", {
        length: 50
    })
    name!: string;

    @OneToOne(type => Balance, balance => balance.user, { eager: true, cascade: true })
    @JoinColumn()
    balance!: Balance;

}