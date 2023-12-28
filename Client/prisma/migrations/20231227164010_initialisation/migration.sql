/*
  Warnings:

  - Added the required column `Test` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Pin" INTEGER NOT NULL,
    "Email" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "Test" TEXT NOT NULL
);
INSERT INTO "new_User" ("Email", "FirstName", "ID", "LastName", "Location", "Password", "Pin", "Username") SELECT "Email", "FirstName", "ID", "LastName", "Location", "Password", "Pin", "Username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_ID_key" ON "User"("ID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
