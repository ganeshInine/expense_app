import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseModule } from './components/expense/expense.module';
import { Expense } from './components/expense/expense.entity';
import { UserModule } from './components/user/user.module';
import User from './components/user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      port:3306,
      database:'expense',
      username:'root',
      password:'root',
      entities:[Expense,User],
      synchronize:true
    }),
    ExpenseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
