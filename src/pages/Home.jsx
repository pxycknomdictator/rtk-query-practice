import { AddProduct } from "../components/AddProduct";

export const Home = () => {
  return (
    <section className="mt-7 w-full sm:w-10/12 md:w-2/3 lg:w-10/12 mx-auto p-7 shadow-lg rounded-md">
      <h1 className="mb-5 text-3xl font-semibold">Add Product</h1>
      <AddProduct />
    </section>
  );
};
