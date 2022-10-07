import { PrismaClient } from "@prisma/client";

export const getCategoryBySlug = (prisma: PrismaClient, slug: string) => {
  return prisma.category.findFirst({
    where: { slug },
    include: { articles: true },
  });
};
