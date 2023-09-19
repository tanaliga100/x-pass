import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { closeModal } from "../features/uiSlice";
import { useAuth } from "../hooks/useAuth";

const Auth = () => {
  const isAuth = useAuth();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [hasToasted, setHasToasted] = useState(false); // New state variable

  if (authState.isAuthenticated) {
    dispatch(closeModal());
  }

  if (authState.message && !hasToasted) {
    toast.success(authState.message);
    setHasToasted(true);
  }

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  React.useEffect(() => {
  }, [isModalOpen, isAuth]);
  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-emerald-950 opacity-50"
            onClick={handleCloseModal}
          />
          <div className="z-50 w-1/4 ">
            {/* Your modal content here */}
            <Outlet />
          </div>
        </div>
      )}
    </div>

    //     <div>
    //       {isModalOpen && (
    //         <div className="fixed inset-0 flex items-center justify-center z-50">
    //           <div
    //             className="fixed inset-0 bg-gray-800 opacity-75"
    //             onClick={handleCloseModal}
    //           />
    //           <div className="z-10">
    //             <div className="w-96 p-6 bg-white rounded-lg shadow-xl">
    //               {/* Your modal content here */}
    //               <Outlet />
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
  );
};

export default Auth;
