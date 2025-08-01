/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber]` on the table `BankCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "public"."BankCard" ALTER COLUMN "country" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BankCard_cardNumber_key" ON "public"."BankCard"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "public"."Profile"("userId");
