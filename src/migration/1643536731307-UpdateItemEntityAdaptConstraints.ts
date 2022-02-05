import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateItemEntityAdaptConstraints1643536731307
  implements MigrationInterface
{
  name = "UpdateItemEntityAdaptConstraints1643536731307";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "isDone" SET DEFAULT false`
    );
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "referenceLink" DROP NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "referenceLink" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "item" ALTER COLUMN "isDone" DROP DEFAULT`
    );
  }
}
