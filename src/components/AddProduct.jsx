import { useState } from "react";
import {
  useAddNewProductMutation,
  useGetAllProductsQuery,
} from "../store/features/productSlice";
import { Error, Loading } from "./Status";

export const AddProduct = () => {
  const initialState = {
    title: "",
    price: 0,
    description: "",
  };
  const [formData, setFormData] = useState(initialState);

  const [addProduct, { isError, isLoading }] =
    useAddNewProductMutation(formData);

  const { refetch } = useGetAllProductsQuery();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addProduct(formData);
    setFormData(initialState);
    refetch();
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <form onSubmit={handleSubmit}>
      <section className="grid grid-cols-2 gap-5 mb-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleInputChanges}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded"
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleInputChanges}
          />
        </div>
      </section>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded resize-none"
          name="description"
          id="description"
          rows="5"
          value={formData.description}
          onChange={handleInputChanges}
        ></textarea>
      </div>
      <input
        className="text-white bg-red-500 hover:bg-red-600 py-2 w-full sm:w-auto sm:px-6 mt-3 block rounded cursor-pointer font-semibold"
        type="submit"
        value="Create Product"
        disabled={isLoading && true}
      />
    </form>
  );
};
