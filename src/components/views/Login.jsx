import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { loginUser } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || email.trim().length === 0) {
      setEmailError("Email is required");
      setTimeout(() => {
        setEmailError(""); // Clear email error after 3 seconds
      }, 1000);
      return;
    } else {
      setEmailError(""); // Clear the error if email is provided
    }

    if (!password || password.trim().length === 0) {
      setPasswordError("Password is required");
      setTimeout(() => {
        setPasswordError(""); // Clear password error after 3 seconds
      }, 1000);
      return;
    } else {
      setPasswordError(""); // Clear the error if password is provided
    }
    console.log("LOGIN : EMAIL AND PASSWORD", email, password);

    // FIREBASE AUTH
    await loginUser(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-auto rounded-3xl ">
      <div className=" p-8 rounded shadow-md  w-[500px]">
        <form action="" onSubmit={handleRegister}>
          <h2 className="text-xl  text-emerald-500 mb-4 font-extrabold">
            Login
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className=" text-red-500">{emailError}</div>}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute top-3 right-4 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          {passwordError && <div className="text-red-500">{passwordError}</div>}
          <button
            type="submit"
            className="w-full bg-white text-emerald-500 border-2 border-emerald-500 py-2 rounded-lg  hover:ring-emerald-500 hover:text-white hover:bg-emerald-500  duration-150"
            onClick={handleRegister}
          >
            Login
          </button>
        </form>

        <div className="pt-5">
          <h1 className="text-white text-sm font-serif">
            Dont have an account ?
          </h1>
          <button className="py-3">
            <Link
              to="/auth/register"
              className="text-emerald-500 font-thin text-sm hover:bg-black bg-black/80 p-2 shadow-lg rounded-md"
            >
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
