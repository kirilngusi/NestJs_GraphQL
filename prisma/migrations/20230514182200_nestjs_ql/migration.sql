-- CreateTable
CREATE TABLE "Product_Entry" (
    "id" TEXT NOT NULL,
    "additional_price" DOUBLE PRECISION NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Product_Entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Capacity" (
    "id" TEXT NOT NULL,
    "capacity" TEXT,
    "productEntryId" TEXT NOT NULL,

    CONSTRAINT "Capacity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colour" (
    "id" TEXT NOT NULL,
    "colour" TEXT,
    "productEntryId" TEXT NOT NULL,

    CONSTRAINT "Colour_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product_Entry" ADD CONSTRAINT "Product_Entry_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Capacity" ADD CONSTRAINT "Capacity_productEntryId_fkey" FOREIGN KEY ("productEntryId") REFERENCES "Product_Entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Colour" ADD CONSTRAINT "Colour_productEntryId_fkey" FOREIGN KEY ("productEntryId") REFERENCES "Product_Entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
