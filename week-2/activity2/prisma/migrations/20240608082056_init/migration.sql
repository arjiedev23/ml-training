-- CreateTable
CREATE TABLE "HabitTracker" (
    "id" SERIAL NOT NULL,
    "goalTitle" TEXT NOT NULL,
    "goalDesc" TEXT NOT NULL,
    "UserID" INTEGER NOT NULL,
    "goalProgress" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HabitTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabitUser" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "userAdd" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,

    CONSTRAINT "HabitUser_pkey" PRIMARY KEY ("id")
);
