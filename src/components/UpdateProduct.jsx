export const UpdateProduct = () => {
  return (
    <form className="mt-7 w-full sm:w-10/12 md:w-2/3 lg:w-10/12 mx-auto p-7 shadow-lg rounded-md">
      <h1 className="mb-5 text-3xl font-semibold">Update Product</h1>
      <section className="grid grid-cols-2 gap-5 mb-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            className="inline-block bg-transparent mt-2 border border-gray-400 outline-none w-full py-2 pl-3 rounded"
            type="number"
            name="price"
            id="price"
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
        ></textarea>
      </div>
      <input
        className="text-white bg-red-500 hover:bg-red-600 py-2 w-full sm:w-auto sm:px-6 mt-3 block rounded cursor-pointer font-semibold"
        type="submit"
        value="Update Product"
      />
    </form>
  );
};
