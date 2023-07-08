/*
  Warnings:

  - You are about to drop the column `aboutId` on the `Headline` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Headline" DROP CONSTRAINT "Headline_aboutId_fkey";

-- AlterTable
ALTER TABLE "Headline" DROP COLUMN "aboutId";
