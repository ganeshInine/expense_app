import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { expenseDto } from './expense.dto';

@Injectable()
export class ExpenseService {
    constructor(@InjectRepository(Expense) private readonly expeseRepository:Repository<Expense>){

    }
    async findAll():Promise<Expense[]>{
        return await this.expeseRepository.find();
    }
    async getExpense(id:number):Promise<Expense>{
        return await this.expeseRepository.findOne({where:{id:id}})
    }
    async createExpense(expense:expenseDto):Promise<Expense>{
        try {
            const createdExpense = this.expeseRepository.create(expense);
            return await this.expeseRepository.save(createdExpense);
          } catch (error) {
            console.error('Error creating expense:', error);
            throw error; // or handle the error appropriately
          }
    }
    async updateExpense(expense:Expense,id:number):Promise<Expense>{

        const expenseObj = await this.expeseRepository.findOne({where:{id}});

        if(!expenseObj){
            throw new Error('Expense not found');
        }

         (await expenseObj).amount=expense.amount;
         (await expenseObj).expense_type=expense.expense_type;
         (await expenseObj).description=expense.description;

         (await expenseObj).updated_at=new Date();
         
        return await this.expeseRepository.save(expenseObj);
    }

}
