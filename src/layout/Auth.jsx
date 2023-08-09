import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { closeModal } from "../state/uiSlice";

const Auth = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return <div>{isModalOpen && <Outlet />}</div>;
};

export default Auth;
