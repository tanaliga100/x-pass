import { useHttpWithReducer } from "../hooks/useHttp";

function AppTest() {
  const { data, loading, error, setUrl, fetchData } = useHttpWithReducer(
    "https://jsonplaceholder.typicode.com/posts/",
    {}
  );

  return (
    <div className="flex flex-row gap-5 p-3">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      )}
      <button
        className="bg-black text-white p-2"
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts/2")}
      >
        Load Another Post
      </button>
      <button className="bg-black text-white p-2" onClick={fetchData}>
        Fetch Data Again
      </button>
    </div>
  );
}

export default AppTest;
