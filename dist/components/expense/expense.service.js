"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const expense_entity_1 = require("./expense.entity");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
let ExpenseService = class ExpenseService {
    constructor(expeseRepository, userService) {
        this.expeseRepository = expeseRepository;
        this.userService = userService;
    }
    async findAll(user_id, limit, offset, expense_type, created_at, updated_at) {
        const queryBuilder = this.expeseRepository
            .createQueryBuilder('expenses')
            .where('expenses.userId = :user_id', { user_id })
            .offset(offset)
            .limit(limit);
        console.log(created_at);
        if (expense_type) {
            queryBuilder.andWhere('expenses.expense_type LIKE :expense_type', { expense_type: `%${expense_type}%` });
        }
        if (created_at) {
            queryBuilder.andWhere('expenses.created_at LIKE :created_at', { created_at: `%${created_at}%` });
        }
        if (created_at && updated_at) {
            queryBuilder.andWhere('expenses.created_at BETWEEN :created_at_start AND :updated_at_end', {
                created_at_start: created_at,
                updated_at_end: updated_at
            });
        }
        const [data, total] = await queryBuilder.getManyAndCount();
        return { data, total };
    }
    async getExpense(id) {
        return await this.expeseRepository.findOne({ where: { id: id } });
    }
    async createExpense(data) {
        try {
            const user = await this.userService.getUser(data.user_id);
            if (!user) {
                throw new Error(`user with id${data.user_id} not found`);
            }
            const createdExpense = this.expeseRepository.create({
                expense_type: data.expense_type,
                amount: data.amount,
                description: data.description,
                user: user
            });
            return await this.expeseRepository.save(createdExpense);
        }
        catch (error) {
            console.error('Error creating expense:', error);
            throw error;
        }
    }
    async updateExpense(expense, id) {
        const expenseObj = await this.expeseRepository.findOne({ where: { id } });
        if (!expenseObj) {
            throw new Error('Expense not found');
        }
        (await expenseObj).amount = expense.amount;
        (await expenseObj).expense_type = expense.expense_type;
        (await expenseObj).description = expense.description;
        (await expenseObj).updated_at = new Date();
        return await this.expeseRepository.save(expenseObj);
    }
};
exports.ExpenseService = ExpenseService;
exports.ExpenseService = ExpenseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(expense_entity_1.Expense)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_1.UserService])
], ExpenseService);
//# sourceMappingURL=expense.service.js.map