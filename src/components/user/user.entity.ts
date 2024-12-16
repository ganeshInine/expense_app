import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Expense } from "../expense/expense.entity";

@Entity()
export default class User{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    phone:number;

    @OneToMany(()=>Expense, expenses=>expenses.user)
    expenses:Expense
}