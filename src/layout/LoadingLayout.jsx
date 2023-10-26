import Spinner from "../assets/Spinner.svg";
const LoadingLayout = () => {
  return (
    <div className="container mx-auto ">
      <img
        src={Spinner}
        alt=""
        //    width={100}
        //    height={100}
        className="mx-auto pt-20"
      />
      ;
    </div>
  );
};
export default LoadingLayout;
