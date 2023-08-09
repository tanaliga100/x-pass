import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle login logic here
  };
  return (
    <div className="flex justify-center items-center h-auto bg-gray-100 rounded-3xl ">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-white text-emerald-500 border-2 border-emerald-500 py-2 rounded-lg  hover:ring-emerald-500 hover:text-white hover:bg-emerald-500  duration-150"
          onClick={handleRegister}
        >
          Login
        </button>
        <div className="pt-5">
          <h1>Dont have an account ?</h1>
          <button className="py-3">
            <Link
              to="/auth/register"
              className="text-emerald-500 font-bold hover:underline"
            >
              {" "}
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
