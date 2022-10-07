import type { NextPage } from "next";
import { CategoryCard } from "../components/CategoryCard";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.default.getAllCategories.useQuery();

  return (
    <div>
      {data ? (
        <>
          {data.map((item) => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
