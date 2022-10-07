import Link from "next/link";
import { CategoryModel } from "../model/CategoryModel";

type CategoryProps = {
  category: CategoryModel;
};

export const Category = ({ category }: CategoryProps) => {
  return (
    <>
      <Link href={`/`}>Back home</Link>
      
      <h2>{category.name}</h2>

      <h3>Articles</h3>

      {category.articles?.map((article) => (
        <strong key={article.id}>
          <Link href={`/article/${encodeURIComponent(article.slug)}`}>
            {article.name}
          </Link>
        </strong>
      ))}
    </>
  );
};
