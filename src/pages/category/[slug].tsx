import { NextPage } from "next";
import { useRouter } from "next/router";
import { Category } from "../../components/Category";
import { trpc } from "../../utils/trpc";

const CategoryPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data } = trpc.default.getCategoryBySlug.useQuery({
    slug: slug as string,
  });

  return <div>{data ? <Category category={data} /> : "Loading..."}</div>;
};

export default CategoryPage;
