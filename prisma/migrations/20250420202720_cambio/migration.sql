/*
  Warnings:

  - You are about to drop the column `deliveryPersonId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to drop the column `businessId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `businessId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `deliveryPerson` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Delivery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "deliveryPersonId",
DROP COLUMN "orderId",
ADD COLUMN     "deliveryPerson" TEXT NOT NULL,
ADD COLUMN     "order" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "businessId",
DROP COLUMN "userId",
ADD COLUMN     "customer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "orderId",
DROP COLUMN "productId",
ADD COLUMN     "product" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "businessId";
