import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { expenseDto } from './expense.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class ExpenseService {
    constructor(@InjectRepository(Expense) private readonly expeseRepository:Repository<Expense>,
private readonly userService:UserService){

    }
    async findAll(user_id: number,limit:number,offset:number,expense_type:string,created_at:Date,updated_at:Date):Promise<any>{
        const queryBuilder = this.expeseRepository
        .createQueryBuilder('expenses')
        .where('expenses.userId = :user_id', { user_id })
        .offset(offset)
        .limit(limit);
        console.log(created_at);
        if(expense_type){
            queryBuilder.andWhere('expenses.expense_type LIKE :expense_type', { expense_type: `%${expense_type}%`})
        }
        if(created_at){
            queryBuilder.andWhere('expenses.created_at LIKE :created_at', { created_at: `%${created_at}%` });
        }
        if(created_at && updated_at){
            queryBuilder.andWhere('expenses.created_at BETWEEN :created_at_start AND :updated_at_end', { 
                created_at_start: created_at, 
                updated_at_end: updated_at 
              });
          
        }
        
    //   console.log(queryBuilder.getSql()); 
    //   console.log(user_id,expense_type); 
      
    const [data, total] = await queryBuilder.getManyAndCount();
      
      return {data,total};
    }
    async getExpense(id:number):Promise<Expense>{
        return await this.expeseRepository.findOne({where:{id:id}})
    }
    async createExpense(data:expenseDto):Promise<Expense>{
        try {
            const user =await this.userService.getUser(data.user_id);

            if(!user){
                throw new Error(`user with id${data.user_id} not found`)
            }
            const createdExpense = this.expeseRepository.create({
                expense_type:data.expense_type,
                amount:data.amount,
                description:data.description,
                user:user
            });
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
