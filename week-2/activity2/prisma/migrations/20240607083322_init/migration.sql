-- CreateTable
CREATE TABLE "Product" (
    "ProductID" SERIAL NOT NULL,
    "ProductName" TEXT NOT NULL,
    "ProductDesc" TEXT,
    "Price" INTEGER NOT NULL DEFAULT 0,
    "Type" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("ProductID")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" SERIAL NOT NULL,
    "ProductID" INTEGER NOT NULL,
    "QTY" INTEGER NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);
