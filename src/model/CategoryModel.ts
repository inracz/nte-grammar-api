import { ArticleModel } from "./ArticleModel";

export interface CategoryModel {
  id: string;
  name: string;
  slug: string;
  description: string;
  prerequisites: string;

  articles?: ArticleModel[];
}
