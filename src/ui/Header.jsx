import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-3">
      <section className="w-10/12 mx-auto flex items-center justify-between">
        <h1 to="/" className="text-2xl sm:text-3xl font-semibold">
          Fake <span className="text-red-500">Store</span>
        </h1>
        <nav className="space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold text-[1rem] sm:text-[1.1rem] ${
                isActive && "text-red-500"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `font-semibold text-[1rem] sm:text-[1.1rem] ${
                isActive && "text-red-500"
              }`
            }
          >
            Products
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
