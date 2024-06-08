/*
  Warnings:

  - You are about to drop the column `ProductID` on the `InventoryItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "InventoryItem" DROP COLUMN "ProductID";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "_InventoryItemToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_InventoryItemToProduct_AB_unique" ON "_InventoryItemToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_InventoryItemToProduct_B_index" ON "_InventoryItemToProduct"("B");

-- AddForeignKey
ALTER TABLE "_InventoryItemToProduct" ADD CONSTRAINT "_InventoryItemToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InventoryItemToProduct" ADD CONSTRAINT "_InventoryItemToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("ProductID") ON DELETE CASCADE ON UPDATE CASCADE;
