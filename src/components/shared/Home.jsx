import imgFront from "../../assets/front.svg";

const Home = () => {
  return (
    <div className="">
      <main className="  w-full flex flex-col items-center justify-center text-center pt-3 ">
        <img
          src={imgFront}
          alt="dp"
          width={200}
          height={100}
          className="items-center text-center"
        />
        <div className="leading-10 uppercase tracking-wide text-3xl  font-extrabold text-emerald-500 p-3 py-10  text-center ">
          Make a quotable lyrics of your{" "}
          <span className="bg-emerald-400 text-white p-1 px-2 rounded-lg">
            favorite
          </span>{" "}
          songs
        </div>
        <article className=" p-1 text-lg font-bold w-1/3 ">
          Encourage a wider audience to join in, sparking discussions, comments,
          and the sharing of their artistic viewpoints. This dynamic environment
          will turn your lyrics into a thriving hub of creativity and meaningful
          connections.
        </article>

        {/* <pre>this is the last modif</pre>
        <pre>this is the last modif monday</pre> */}
      </main>
    </div>
  );
};
export default Home;
