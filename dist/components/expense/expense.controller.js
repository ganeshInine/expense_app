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
exports.ExpenseController = void 0;
const common_1 = require("@nestjs/common");
const expense_service_1 = require("./expense.service");
const expense_entity_1 = require("./expense.entity");
const expense_dto_1 = require("./expense.dto");
let ExpenseController = class ExpenseController {
    constructor(expesenService) {
        this.expesenService = expesenService;
    }
    async getAllExpenses(user_id, limit, offset, expense_type, created_at, updated_at) {
        return await this.expesenService.findAll(user_id, limit, offset, expense_type, created_at, updated_at);
    }
    async getExpense(id) {
        return await this.expesenService.getExpense(id);
    }
    async updateExpense(expense, id) {
        return await this.expesenService.updateExpense(expense, id);
    }
    async createExpense(expense) {
        return await this.expesenService.createExpense(expense);
    }
};
exports.ExpenseController = ExpenseController;
__decorate([
    (0, common_1.Get)('getAllExpenses/:user_id'),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('offset')),
    __param(3, (0, common_1.Query)('expense_type')),
    __param(4, (0, common_1.Query)('created_at')),
    __param(5, (0, common_1.Query)('updated_at')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Date, Date]),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "getAllExpenses", null);
__decorate([
    (0, common_1.Get)('getExpense'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "getExpense", null);
__decorate([
    (0, common_1.Put)('updateExpense/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)(':id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expense_entity_1.Expense, Number]),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "updateExpense", null);
__decorate([
    (0, common_1.Post)('createExpense'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expense_dto_1.expenseDto]),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "createExpense", null);
exports.ExpenseController = ExpenseController = __decorate([
    (0, common_1.Controller)('expense'),
    __metadata("design:paramtypes", [expense_service_1.ExpenseService])
], ExpenseController);
//# sourceMappingURL=expense.controller.js.map