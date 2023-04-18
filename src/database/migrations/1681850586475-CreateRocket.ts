import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRocket1681850586475 implements MigrationInterface {
    name = 'CreateRocket1681850586475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "crew" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rocket" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_89b0efae402998623e1367aa34a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rocket"`);
        await queryRunner.query(`DROP TABLE "crew"`);
    }

}
