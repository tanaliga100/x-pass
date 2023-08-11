import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

const Register = () => {
  const { createUser } = useRegister();
  // eslint-disable-next-line no-unused-vars

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

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

    // FIREBASE AUTH
    //     await createUser(email, password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex justify-center items-center  bg-gray-100  rounded-3xl ">
      <div className=" p-8 rounded shadow-md w-[500px]">
        <form action="" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2focus:ring-emerald-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="text-red-500">{emailError}</div>}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <div className="text-red-500">{passwordError}</div>}
          <button
            type="submit"
            className="w-full bg-white text-emerald-500 border-2 border-emerald-500 py-2 rounded-lg  hover:ring-emerald-500 hover:text-white hover:bg-emerald-500  duration-150"
            onClick={handleRegister}
          >
            Register
          </button>
        </form>

        <div className="pt-5">
          <h1>Already have an account ?</h1>
          <button className="py-3">
            <Link
              to="/auth"
              className="text-emerald-500 font-bold hover:underline"
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
