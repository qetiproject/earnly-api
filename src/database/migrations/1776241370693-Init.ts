import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1776241370693 implements MigrationInterface {
    name = 'Init1776241370693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."income_currency_enum" AS ENUM('GEL', 'USD', 'EUR')`);
        await queryRunner.query(`CREATE TYPE "public"."income_status_enum" AS ENUM('pending', 'received', 'failed')`);
        await queryRunner.query(`CREATE TABLE "income" ("id" SERIAL NOT NULL, "project_name" character varying NOT NULL, "client_name" character varying NOT NULL, "amount" numeric NOT NULL, "currency" "public"."income_currency_enum" NOT NULL DEFAULT 'GEL', "status" "public"."income_status_enum" NOT NULL DEFAULT 'pending', "description" character varying NOT NULL, "payment_date" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "income"`);
        await queryRunner.query(`DROP TYPE "public"."income_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."income_currency_enum"`);
    }

}
