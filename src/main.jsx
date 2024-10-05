import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { AppLayout } from "./layout/AppLayout.jsx";
import { Products } from "./pages/Products.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { UpdateProduct } from "./components/UpdateProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="products/:productId" element={<UpdateProduct />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
