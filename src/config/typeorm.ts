
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import { Expense } from "../components/expense/expense.entity";
import User from "../components/user/user.entity";
dotenv.config();
export const connectionSource=new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[Expense,User],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize:true,

}) 