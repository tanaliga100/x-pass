const Form = () => {
  return (
    <form action="">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title of the Song
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border rounded-md focus:ring-emerald-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tags"
          className="block text-sm font-medium text-gray-700"
        >
          Tags
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lyrics"
          className="block text-sm font-medium text-gray-700"
        >
          Lyrics of the Song
        </label>
        <textarea
          id="lyrics"
          name="lyrics"
          rows="4"
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-950 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;