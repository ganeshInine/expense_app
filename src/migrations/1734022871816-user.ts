import { MigrationInterface, QueryRunner } from "typeorm";

export class User1734022871816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `create table user(id int auto_increment primary key,
            name varchar(120),
            email varchar(150),
            phone int,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp)`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE user")
    }

}
