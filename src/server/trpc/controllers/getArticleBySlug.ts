import { PrismaClient } from "@prisma/client";

export const getArticleBySlug = (prisma: PrismaClient, slug: string) => {
  return prisma.article.findFirst({
    where: { slug: slug },
    include: { category: true }
  });
};
