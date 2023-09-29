import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { provideMessage, removeUser } from "../store/features/authSlice";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUserHandler = async () => {
    await signOut()
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        dispatch(provideMessage("Logs out"));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logoutUserHandler };
};
