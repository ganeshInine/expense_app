"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserIdToExpenses1734024263545 = void 0;
class AddUserIdToExpenses1734024263545 {
    async up(queryRunner) {
        await queryRunner.query(`
            alter table expenses add
            user_id int,
            add constraint fk_user_id
            foreign key (user_id) REFERENCES user(id)
            `);
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE user');
    }
}
exports.AddUserIdToExpenses1734024263545 = AddUserIdToExpenses1734024263545;
//# sourceMappingURL=1734024263545-addUserIdToExpenses.js.map