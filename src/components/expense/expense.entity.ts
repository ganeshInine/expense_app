import { create } from 'domain';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import User from '../user/user.entity';

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  expense_type: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()  
  updated_at: Date;

  @ManyToOne(()=>User,user=>user.expenses)
  user:User;

}
