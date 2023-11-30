import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imgFront from "../../assets/front.svg";
import { openAuthModal } from "../../store/features/uiSlice";
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <main className="  w-full flex flex-col items-center justify-center text-center pt-3 ">
        <section className="flex flex-row items-center w-[60%]  place-content-center gap-6">
          <img
            src={imgFront}
            alt="dp"
            width={200}
            height={100}
            className="items-center text-center"
          />
          <Link
            className="bg-emerald-900 h-fit text-sm p-3 rounded-sm font-bold mt-4 hover:bg-emerald-800 text-white hover:text-slate-100 duration-200 "
            to="/auth"
            onClick={() => dispatch(openAuthModal())}
          >
            Register/ Login
          </Link>
        </section>
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
