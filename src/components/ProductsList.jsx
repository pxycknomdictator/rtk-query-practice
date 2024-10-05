import { useGetAllProductsQuery } from "../store/features/productSlice";
import { Error, Loading } from "./Status";
import { Card } from "./Card";

export const ProductsList = () => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <ul className="grid grid-cols-1 gap-x-6 md:grid-cols-2 place-items-center gap-y-8 xl:grid-cols-3">
      {products.map((product) => (
        <Card key={Math.random()} data={product} />
      ))}
    </ul>
  );
};
