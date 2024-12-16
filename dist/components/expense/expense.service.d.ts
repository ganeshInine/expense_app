import { Repository } from 'typeorm';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';
import { UserService } from '../user/user.service';
export declare class ExpenseService {
    private readonly expeseRepository;
    private readonly userService;
    constructor(expeseRepository: Repository<Expense>, userService: UserService);
    findAll(user_id: number, limit: number, offset: number, expense_type: string, created_at: Date, updated_at: Date): Promise<any>;
    getExpense(id: number): Promise<Expense>;
    createExpense(data: expenseDto): Promise<Expense>;
    updateExpense(expense: Expense, id: number): Promise<Expense>;
}
