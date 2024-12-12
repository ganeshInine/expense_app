import { create } from 'domain';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
}
