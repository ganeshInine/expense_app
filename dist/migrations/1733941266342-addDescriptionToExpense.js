"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDescriptionToExpense1733941266342 = void 0;
class AddDescriptionToExpense1733941266342 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER table expenses add description VARCHAR(255) DEFAULT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE expenses');
    }
}
exports.AddDescriptionToExpense1733941266342 = AddDescriptionToExpense1733941266342;
//# sourceMappingURL=1733941266342-addDescriptionToExpense.js.map