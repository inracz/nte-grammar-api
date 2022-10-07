import Link from "next/link";
import { CategoryModel } from "../model/CategoryModel";
import styles from "./CategoryCard.module.css";

type CategoryCardProps = {
  category: CategoryModel;
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className={styles.categoryCard}>
      <Link href={`/category/${encodeURIComponent(category.slug)}`}>
        {category.name}
      </Link>

      <hr />

      <em>{category.description}</em>
    </div>
  );
};
