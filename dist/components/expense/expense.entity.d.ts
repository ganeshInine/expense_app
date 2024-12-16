import User from '../user/user.entity';
export declare class Expense {
    id: number;
    amount: number;
    expense_type: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    user: User;
}
