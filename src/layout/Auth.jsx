import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { closeModal } from "../state/uiSlice";

const Auth = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

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
          ></div>
          <div className="z-10">
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
