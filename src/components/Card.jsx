/* eslint-disable react/prop-types */
export const Card = ({ data, onDelete, onUpdate }) => {
  const { title, description, price, id } = data;

  return (
    <li className="w-full shadow-lg px-5 py-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h3 className="text-[1.1rem] text-zinc-600 my-2">Price: {price}</h3>
      <p className="text-[.9rem] my-3 text-gray-500">{description}</p>
      <div className="space-y-3 sm:space-x-3">
        <button
          onClick={() => onUpdate({ id, title, description, price })}
          className="text-white font-semibold py-1.5 w-full sm:w-auto px-5 bg-green-500 hover:bg-green-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-white font-semibold py-1.5 w-full sm:w-auto px-5 bg-red-500 hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
