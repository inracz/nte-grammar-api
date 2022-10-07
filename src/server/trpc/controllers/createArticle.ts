import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export const CreateArticleInputSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  content: z.string(),
});

type CreateArticleInput = z.infer<typeof CreateArticleInputSchema>;

export const createArticle = (prisma: PrismaClient, input: CreateArticleInput) => {
  return prisma.article.create({
    data: {
      name: input.name,
      slug: input.slug,
      content: input.content,
      categoryId: input.category,
    },
  });
};
