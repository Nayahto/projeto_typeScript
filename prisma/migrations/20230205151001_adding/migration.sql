-- CreateTable
CREATE TABLE "UserTable" (
    "id" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "UserTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_CPF_key" ON "UserTable"("CPF");
