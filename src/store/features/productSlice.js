import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
    deleteProductById: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useAddNewProductMutation, useDeleteProductByIdMutation } =
  productsSlice;
