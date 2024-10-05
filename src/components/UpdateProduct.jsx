import { useLocation, useNavigate } from "react-router-dom";
import {
  useUpdateProductByIdMutation,
  useGetAllProductsQuery,
} from "../store/features/productSlice";
import { useState } from "react";

export const UpdateProduct = () => {
  const [updateProduct] = useUpdateProductByIdMutation();
  const { refetch } = useGetAllProductsQuery();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    title: state.title,
    price: state.price,
    description: state.description,
  });

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = await updateProduct({
      id: state.id,
      updateProduct: update,
    });
    if (error) {
      console.error("Update failed:", error);
    } else {
      navigate("/products");
      refetch();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-7 w-full sm:w-10/12 md:w-2/3 lg:w-10/12 mx-auto p-7 shadow-lg rounded-md"
      >
        <h1 className="mb-5 text-3xl font-semibold">Update Product</h1>
        <section className="grid grid-cols-2 gap-5 mb-4">
          <div>
            <label htmlFor="title">Title</label>
            <input
              className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded"
              type="text"
              name="title"
              id="title"
              value={update.title}
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
              value={update.price}
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
            value={update.description}
            onChange={handleInputChanges}
          ></textarea>
        </div>
        <input
          className="text-white bg-red-500 hover:bg-red-600 py-2 w-full sm:w-auto sm:px-6 mt-3 block rounded cursor-pointer font-semibold"
          type="submit"
          value="Update Product"
        />
      </form>
    </>
  );
};
