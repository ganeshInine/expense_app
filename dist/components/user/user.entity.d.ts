import { Expense } from "../expense/expense.entity";
export default class User {
    id: number;
    name: string;
    email: string;
    phone: number;
    expenses: Expense;
}
