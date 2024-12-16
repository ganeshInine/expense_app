import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { ExpenseController } from './expense.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Expense]),UserModule
    ],
  controllers:[ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule {}
