"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const expense_entity_1 = require("../components/expense/expense.entity");
dotenv.config();
exports.connectionSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [expense_entity_1.Expense],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: true,
});
//# sourceMappingURL=typeorm.js.map