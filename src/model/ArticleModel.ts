import { CategoryModel } from "./CategoryModel";

export interface ArticleModel {
  id: string;
  name: string;
  slug: string;
  content: string;

  category?: CategoryModel;
}
