import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = () => {
    signOut()
      .then(() => {
        dispatch(logoutUser());
        navigate("/");
        toast.succes("Successfully Logout");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logoutUser };
};
