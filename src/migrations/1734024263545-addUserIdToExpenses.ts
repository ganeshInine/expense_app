import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToExpenses1734024263545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            alter table expenses add
            user_id int,
            add constraint fk_user_id
            foreign key (user_id) REFERENCES user(id)
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE user')
    }

}
