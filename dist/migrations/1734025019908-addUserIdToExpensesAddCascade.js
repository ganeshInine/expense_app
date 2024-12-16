"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIdToExpensesAddCascade1734025019908 = void 0;
class AddUserIdToExpensesAddCascade1734025019908 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE expenses DROP FOREIGN KEY fk_user_id`);
        await queryRunner.query(`
            ALTER TABLE expenses
            ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        `);
    }
    async down(queryRunner) {
    }
}
exports.AddUserIdToExpensesAddCascade1734025019908 = AddUserIdToExpensesAddCascade1734025019908;
//# sourceMappingURL=1734025019908-addUserIdToExpensesAddCascade.js.map