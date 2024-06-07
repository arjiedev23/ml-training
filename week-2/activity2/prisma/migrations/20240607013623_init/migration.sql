-- CreateTable
CREATE TABLE "ContactList" (
    "id" SERIAL NOT NULL,
    "contactFullName" TEXT NOT NULL,
    "contactNumber" INTEGER NOT NULL,
    "emailAdd" TEXT,
    "address" TEXT,

    CONSTRAINT "ContactList_pkey" PRIMARY KEY ("id")
);
