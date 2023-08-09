import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Handle registration logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2focus:ring-emerald-500"
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
          className="w-full bg-emerald-900 text-white py-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
          onClick={handleRegister}
        >
          Register
        </button>
        <div className="pt-5">
          <h1>Already have an account ?</h1>
          <button className="py-3">
            <Link
              to="/auth"
              className="text-emerald-800 font-bold hover:underline"
            >
              {" "}
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
