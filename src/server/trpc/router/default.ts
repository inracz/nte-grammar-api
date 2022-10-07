import { z } from "zod";
import { t } from "../trpc";

import { getAllCategories } from "../controllers/getAllCategories";
import { getArticleBySlug } from "../controllers/getArticleBySlug";
import { getCategoryBySlug } from "../controllers/getCategoryBySlug";
import { createArticle, CreateArticleInputSchema } from "../controllers/createArticle";

export const defaultRouter = t.router({
  getAllCategories: t.procedure.query(({ ctx }) =>
    getAllCategories(ctx.prisma)
  ),

  getCategoryBySlug: t.procedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => getCategoryBySlug(ctx.prisma, input.slug)),

  getArticleBySlug: t.procedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => getArticleBySlug(ctx.prisma, input.slug)),

  createArticle: t.procedure
    .input(CreateArticleInputSchema)
    .mutation(({ ctx, input }) => createArticle(ctx.prisma, input)),
});
