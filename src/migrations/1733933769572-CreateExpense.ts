import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateExpense1733933769572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
      CREATE TABLE expenses (
          id INT AUTO_INCREMENT PRIMARY KEY,
          amount FLOAT,
          expense_type VARCHAR(100),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE expenses`)
    }

}
