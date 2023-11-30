const LoadingLayout = () => {
  return (
    // <div className="container mx-auto ">
    //   <img
    //     src={Spinner}
    //     alt=""
    //     //    width={100}
    //     //    height={100}
    //     className="mx-auto pt-20"
    //   />
    //   ;
    // </div>
    // <div className="s-spinner"></div>

    <div className="lds-spinldner">
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingLayout;

export const LoadingWrapper = () => {
  return (
    <div className="shadow rounded-md p-4 w-full mx-auto inset-0  z-10">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-100 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-100 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-100 rounded col-span-2"></div>
              <div className="h-2 bg-slate-100 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
