/*
  Warnings:

  - You are about to drop the `InventoryItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "QTY" INTEGER DEFAULT 0;

-- DropTable
DROP TABLE "InventoryItem";
