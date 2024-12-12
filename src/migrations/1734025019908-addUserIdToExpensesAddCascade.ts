import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToExpensesAddCascade1734025019908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE expenses DROP FOREIGN KEY fk_user_id`)

        await queryRunner.query(`
            ALTER TABLE expenses
            ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
