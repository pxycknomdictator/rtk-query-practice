import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "../store/features/productSlice";
import { Error, Loading } from "./Status";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const ProductsList = () => {
  const navigate = useNavigate();

  const {
    data: products,
    isError,
    isLoading,
    refetch,
  } = useGetAllProductsQuery();

  const [deleteProduct] = useDeleteProductByIdMutation();

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    refetch();
  };

  const handleUpdateProduct = (payload) => {
    navigate(`/products/${payload.id}`, { state: payload });
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <ul className="grid grid-cols-1 gap-x-6 md:grid-cols-2 place-items-center gap-y-8 xl:grid-cols-3">
      {products.map((product) => (
        <Card
          key={Math.random()}
          data={product}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateProduct}
        />
      ))}
    </ul>
  );
};
