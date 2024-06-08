/*
  Warnings:

  - You are about to drop the `HabitUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "HabitUser";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "userAdd" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
