import LoadingImage from "../assets/loading.svg";
const LoadingLayout = () => {
  return (
    <div className="container mx-auto ">
      <img
        src={LoadingImage}
        alt=""
        width={500}
        height={500}
        className="mx-auto pt-20"
      />
      ;
    </div>
  );
};
export default LoadingLayout;
