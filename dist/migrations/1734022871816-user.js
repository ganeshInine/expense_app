"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1734022871816 = void 0;
class User1734022871816 {
    async up(queryRunner) {
        await queryRunner.query(`create table user(id int auto_increment primary key,
            name varchar(120),
            email varchar(150),
            phone int,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp)`);
    }
    async down(queryRunner) {
        await queryRunner.query("DROP TABLE user");
    }
}
exports.User1734022871816 = User1734022871816;
//# sourceMappingURL=1734022871816-user.js.map