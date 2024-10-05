import { Card } from "./Card";

export const ProductsList = () => {
  return (
    <ul className="grid grid-cols-1 gap-x-6 md:grid-cols-2 place-items-center gap-y-8 xl:grid-cols-3">
      <Card />
    </ul>
  );
};
