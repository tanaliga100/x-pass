import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { closeModal } from "../features/uiSlice";

const Auth = () => {
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

  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-1 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-800 opacity-75"
            onClick={handleCloseModal}
          />

          <div className="z-10 ">
            {" "}
            {/* Ensure this div is above the backdrop */}
            <Outlet /> {/* Render your form components here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
