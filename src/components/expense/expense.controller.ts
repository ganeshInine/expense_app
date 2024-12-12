import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';

@Controller('expense')
export class ExpenseController {

    constructor(private readonly expesenService:ExpenseService){}
    
    @Get('getAllExpenses')
    async getAllExpenses(){
        return await this.expesenService.findAll();
        
    }

    @Get('getExpense')
    async getExpense(id:number){
        return await this.expesenService.getExpense(id);
    }
    @Put('updateExpense/:id')
    async updateExpense(@Body() expense:Expense, @Param(':id')id:number){
        return await this.expesenService.updateExpense(expense,id)
    }
    @Post('createExpense')
    async createExpense(@Body() expense:expenseDto){

        return await this.expesenService.createExpense(expense);
    }

}
