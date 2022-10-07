import { NextPage } from "next";
import { useRouter } from "next/router";
import { Article } from "../../components/Article";
import { trpc } from "../../utils/trpc";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = trpc.default.getArticleBySlug.useQuery({
    slug: slug as string,
  });

  return <div>{data ? <Article article={data} /> : "Loading..."}</div>;
};

export default ArticlePage;
