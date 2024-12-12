import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';
export declare class ExpenseService {
    private readonly expeseRepository;
    constructor(expeseRepository: Repository<Expense>);
    findAll(): Promise<Expense[]>;
    getExpense(id: number): Promise<Expense>;
    createExpense(expense: expenseDto): Promise<Expense>;
    updateExpense(expense: Expense, id: number): Promise<Expense>;
}
