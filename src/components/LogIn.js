import { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  //* Working on Toggle Button change -------------------------------------------------------------------------------------------------
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="logo"
        />
      </div>
      //SECTION - Login Page :-
      <form
        action=""
        className="w-3/2 absolute p-12 bg-black my-24 mx-auto right-0 left-0 "
      >
        <h1 className="text-white text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input type="text" placeholder="Password" className="p-2 m-2" />
        <button type="submit" className="bg-white py-2 px-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignForm}>
          {" "}
          New To Netflix?<span className="underline">Sign Up now</span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
