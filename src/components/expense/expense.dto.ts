import { IsNumber, IsString } from "class-validator";

export class expenseDto{
    @IsString()
    expense_type:string;

    @IsString()
    description:string;

    @IsNumber()
    amount:number
}