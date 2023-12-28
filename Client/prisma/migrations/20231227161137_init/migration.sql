-- CreateTable
CREATE TABLE "User" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Pin" INTEGER NOT NULL,
    "Email" TEXT NOT NULL,
    "Location" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ID_key" ON "User"("ID");
