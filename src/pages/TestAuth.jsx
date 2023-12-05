import React, { useState } from "react";
import {
  monitorAuthState,
  signInEmailAndPassowrd,
  signUpEmailAndPassowrd,
} from "../config/firebase.config";

const TestAuth = () => {
  React.useEffect(() => {
    monitorAuthState();
    return () => monitorAuthState();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const signInHandler = async (e) => {
    e.preventDefault();
    // console.log("email", email);
    // console.log("password", password);
    await signInEmailAndPassowrd(email, password);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    // console.log("email", createEmail);
    // console.log("password", createPassword);
    await signUpEmailAndPassowrd(createEmail, createPassword);
  };
  return (
    <main className="flex flex-row gap-3">
      <form
        className="p-3 flex flex-col w-[35%] gap-3"
        onSubmit={signInHandler}
      >
        <h1>Sign In</h1>
        <input
          type="email"
          name=""
          className="p-1"
          id=""
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          className="p-1"
          id=""
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className=" font-bold flex gap-3 flex-row">
          <button
            type="submit"
            onSubmit={signInHandler}
            className="bg-black text-white p-2 m-1"
          >
            SignIn User
          </button>
        </div>
      </form>

      <form
        className="p-3 flex flex-col w-[35%] gap-3"
        onSubmit={signUpHandler}
      >
        <h1>Sign Up</h1>

        <input
          type="email"
          name=""
          className="p-1"
          id=""
          placeholder="email"
          onChange={(e) => setCreateEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          className="p-1"
          id=""
          placeholder="password"
          onChange={(e) => setCreatePassword(e.target.value)}
        />
        <div className=" font-bold flex gap-3 flex-row">
          <button
            type="submit"
            onSubmit={signUpHandler}
            className="bg-black text-white p-2 m-1"
          >
            Create User
          </button>
        </div>
      </form>
    </main>
  );
};

export default TestAuth;
