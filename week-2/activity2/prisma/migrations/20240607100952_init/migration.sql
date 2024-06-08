/*
  Warnings:

  - You are about to drop the `_InventoryItemToProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ProductID` to the `InventoryItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_InventoryItemToProduct" DROP CONSTRAINT "_InventoryItemToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_InventoryItemToProduct" DROP CONSTRAINT "_InventoryItemToProduct_B_fkey";

-- AlterTable
ALTER TABLE "InventoryItem" ADD COLUMN     "ProductID" INTEGER NOT NULL,
ALTER COLUMN "QTY" SET DEFAULT 0;

-- DropTable
DROP TABLE "_InventoryItemToProduct";
