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
            className="parent fixed inset-0 bg-emerald-900 opacity-50"
            onClick={() => {
              dispatch(closeModal());
              navigate("/");
            }}
          />
          <div
            className="children z-50 w-3/12 absolute top-32 left-20 bg-emerald-900 
          "
          >
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

//   const handleCloseModal());
//     console.log("triggere =
//     dispatch(closeModald");
//   };
// const nums = [1, 2, 3, 4, 5, 10];

// const result = nums.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     const square = curr * curr;
//     return acc + square;
//   }
//   return acc;
// }, 0);

// console.log("Sum of squares of even numbers:", result);
