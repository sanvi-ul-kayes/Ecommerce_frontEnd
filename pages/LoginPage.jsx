import React, { useState } from "react";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [eye, setEye] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is required");
    } else if (
      !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email)
    ) {
      toast("Invalid credantial");
    }
    if (!password) {
      setPassworderr("Password is required");
    }
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log("Error Code:", error.code);

          if (error.code === "auth/invalid-credential") {
            toast.error("Invalid email or password");
          }

          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  const handlGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[1250p[px] flex justify-center gap-[69px]">
      <div className="w-1/2 flex justify-end items-center">
        <div>
          <h1 className="text-[34.4px] font-bold text-two">
            Login to your account!
          </h1>

          <button onClick={handlGoogleLogin} className="pt-7 pb-8">
            <div className=" flex justify-center items-center gap-2 border-1 p-6 rounded-2xl cursor-pointer">
              <FcGoogle className="text-5" />

              <p>Login with Google</p>
            </div>
          </button>

          <div className="relative mt-[32px]">
            <label
              className="text-[13px] font-semibold text-two/50 absolute top-[-23px] left-[30px] p-3 bg-white
            "
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className="w-[368px] h-[81px] border-b-2 border-two/50 p-10 outline-none"
              type="text"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailerr && <p className="text-red-500">{emailerr}</p>}
          </div>

          <div className="relative mt-[60px]">
            <label
              className="text-[13px] font-semibold text-two/50 absolute top-[-23px] left-[30px] p-3 bg-white
            "
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              className="w-[368px] h-[81px] border-b-2 border-two/50 p-10 outline-none relative "
              type={eye ? "password" : "text"}
              placeholder="Enter your password"
              value={password}
            />
            {passworderr && <p className="text-red-500">{passworderr}</p>}

            {eye ? (
              <FaEyeSlash
                onClick={() => setEye(false)}
                className="absolute top-[40%] right-[100px] text-two/30"
              />
            ) : (
              <FaEye
                onClick={() => setEye(true)}
                className="absolute top-[40%] right-[100px] text-two/30"
              />
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-[368px] h-[67px] text-white bg-one rounded-xl mt-[51px] mb-[35px] cursor-pointer"
          >
            <ToastContainer />
            Login to Continue
          </button>

          <div className="flex justify-center mr-20">
            <p>
              Don’t have an account ?
              <Link to={"/signUpPage"} className=" text-[#EA6C00]">
                Sign up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img
          className="ml-auto h-screen w-full object-cover"
          src="login.jpg"
          alt="login.jpg"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
