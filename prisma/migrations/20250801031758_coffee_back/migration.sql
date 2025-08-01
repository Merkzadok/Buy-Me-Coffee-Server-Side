/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `BankCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `country` on table `BankCard` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `profileId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."BankCard" ALTER COLUMN "country" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Donation" ALTER COLUMN "specialMesssage" DROP NOT NULL,
ALTER COLUMN "socialURLOrBuyMeACoffee" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Profile" ALTER COLUMN "about" DROP NOT NULL,
ALTER COLUMN "avatarImage" DROP NOT NULL,
ALTER COLUMN "socialMediaURL" DROP NOT NULL,
ALTER COLUMN "backgroundImage" DROP NOT NULL,
ALTER COLUMN "successMessage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "profileId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "public"."role";

-- CreateIndex
CREATE UNIQUE INDEX "BankCard_userId_key" ON "public"."BankCard"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- AddForeignKey
ALTER TABLE "public"."Donation" ADD CONSTRAINT "Donation_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
