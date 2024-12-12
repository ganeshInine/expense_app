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
let ExpenseService = class ExpenseService {
    constructor(expeseRepository) {
        this.expeseRepository = expeseRepository;
    }
    async findAll() {
        return await this.expeseRepository.find();
    }
    async getExpense(id) {
        return await this.expeseRepository.findOne({ where: { id: id } });
    }
    async createExpense(expense) {
        try {
            const createdExpense = this.expeseRepository.create(expense);
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
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ExpenseService);
//# sourceMappingURL=expense.service.js.map