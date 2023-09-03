-- CreateTable
CREATE TABLE "chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT DEFAULT 'anonymous',
    "content" TEXT NOT NULL
);
