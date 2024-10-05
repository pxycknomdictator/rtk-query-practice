import { ProductsList } from "../components/ProductsList";

export const Products = () => {
  return (
    <main className="w-10/12 mx-auto">
      <h1 className="my-7 text-3xl font-semibold">All Products</h1>
      <ProductsList />
    </main>
  );
};
