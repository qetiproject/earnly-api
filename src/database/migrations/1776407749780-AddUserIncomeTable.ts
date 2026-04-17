import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIncomeTable1776407749780 implements MigrationInterface {
    name = 'AddUserIncomeTable1776407749780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."income_currency_enum" AS ENUM('GEL', 'USD', 'EUR')`);
        await queryRunner.query(`CREATE TYPE "public"."income_status_enum" AS ENUM('pending', 'received', 'failed')`);
        await queryRunner.query(`CREATE TABLE "income" ("id" SERIAL NOT NULL, "project_name" character varying NOT NULL, "client_name" character varying NOT NULL, "amount" numeric NOT NULL, "currency" "public"."income_currency_enum" NOT NULL DEFAULT 'GEL', "status" "public"."income_status_enum" NOT NULL DEFAULT 'pending', "description" character varying NOT NULL, "payment_date" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" integer NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "income"`);
        await queryRunner.query(`DROP TYPE "public"."income_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."income_currency_enum"`);
    }

}
