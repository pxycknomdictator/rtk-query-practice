import { Outlet } from "react-router-dom";
import { Header } from "../ui/Header";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
