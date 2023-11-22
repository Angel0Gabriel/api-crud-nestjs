/*
  Warnings:

  - You are about to drop the `SheregangDevMembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SheregangDevMembers";

-- CreateTable
CREATE TABLE "sheregangDevMembers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "sheregangDevMembers_pkey" PRIMARY KEY ("id")
);
