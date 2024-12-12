import { ExpenseService } from './expense.service';
import { Expense } from './expense.entity';
import { expenseDto } from './expense.dto';
export declare class ExpenseController {
    private readonly expesenService;
    constructor(expesenService: ExpenseService);
    getAllExpenses(): Promise<Expense[]>;
    getExpense(id: number): Promise<Expense>;
    updateExpense(expense: Expense, id: number): Promise<Expense>;
    createExpense(expense: expenseDto): Promise<Expense>;
}
