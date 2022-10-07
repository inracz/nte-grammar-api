import { PrismaClient } from "@prisma/client";

export const getAllCategories = (prisma: PrismaClient) => {
  return prisma.category.findMany();
};
