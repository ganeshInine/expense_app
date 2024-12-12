import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionToExpense1733941266342 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER table expenses add description VARCHAR(255) DEFAULT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE expenses')
    }

}
