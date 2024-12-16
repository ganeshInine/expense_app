import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';
export declare class ExpenseController {
    private readonly expesenService;
    constructor(expesenService: ExpenseService);
    getAllExpenses(user_id: number, limit: number, offset: number, expense_type: string, created_at: Date, updated_at: Date): Promise<any>;
    getExpense(id: number): Promise<Expense>;
    updateExpense(expense: Expense, id: number): Promise<Expense>;
    createExpense(expense: expenseDto): Promise<Expense>;
}
