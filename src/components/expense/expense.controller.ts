import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';
import { query } from 'express';

@Controller('expense')
export class ExpenseController {

    constructor(private readonly expesenService:ExpenseService){}
    
    @Get('getAllExpenses/:user_id')
    async getAllExpenses(@Param('user_id')user_id:number,@Query('limit')limit:number,@Query('offset')offset:number,@Query('expense_type')expense_type:string,@Query('created_at')created_at:Date,@Query('updated_at')updated_at:Date){
        
        return await this.expesenService.findAll(user_id,limit,offset,expense_type,created_at,updated_at);

    }

    @Get('getExpense/:id')
    async getExpense(@Param('id')id:number){
        return await this.expesenService.getExpense(id);
    }
    @Put('updateExpense/:id')
    async updateExpense(@Body() expense:Expense, @Param('id')id:number){
      return await this.expesenService.updateExpense(expense,id)
    }
    @Post('createExpense')
    async createExpense(@Body() expense:expenseDto){

        return await this.expesenService.createExpense(expense);
    }

}
