import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { ArticleModel } from "../model/ArticleModel";

type ArticleProps = {
  article: ArticleModel;
};

export const Article = ({ article }: ArticleProps) => {
  return (
    <>
      <Link href={`/`}>Back home</Link> |
      <Link href={`/category/${article.category?.slug}`}>Back to category</Link>

      <h2>Article {article.name}</h2>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {article.content}
      </ReactMarkdown>
    </>
  );
};
