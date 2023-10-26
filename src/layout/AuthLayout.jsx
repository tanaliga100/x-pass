import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Home from "../components/shared/Home";
import { closeModal } from "../store/features/uiSlice";

const AuthLayout = () => {
  //   const isAuth = useAuth();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Home />
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          // onClick={(e) => {
          //   e.stopPropagation();
          // }}
        >
          <div
            className="parent fixed inset-0 bg-emerald-950 opacity-50"
            onClick={() => {
              dispatch(closeModal());
              navigate("/");
            }}
          />
          <div className="children z-50 w-1/4 ">
            {/* Your modal content here */}
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};
export default AuthLayout;

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

//   const authState = useSelector((state) => state.auth);
//   const [hasToasted, setHasToasted] = useState(false); // New state variable

//   if (authState.isAuthenticated) {
//     dispatch(closeModal());
//   }

//   if (authState.message && !hasToasted) {
//     toast.success(authState.message);
//     setHasToasted(true);
//   }

//   const handleCloseModal =
//     dispatch(closeModal());
//     console.log("triggered");
//   };
