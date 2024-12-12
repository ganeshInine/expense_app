"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExpense1733933769572 = void 0;
class CreateExpense1733933769572 {
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE expenses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          amount FLOAT,
          expense_type VARCHAR(100),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE expenses`);
    }
}
exports.CreateExpense1733933769572 = CreateExpense1733933769572;
//# sourceMappingURL=1733933769572-CreateExpense.js.map