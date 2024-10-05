import { useGetAllProductsQuery } from "../store/features/productSlice";
import { Card } from "./Card";

const Loading = () => <h1>Loading...</h1>;
const Error = () => <h1>Oh nooooooooo we got an Error!!!</h1>;

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
