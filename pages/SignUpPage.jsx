import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { DNA } from "react-loader-spinner";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [eye, setEye] = useState(false);
  let [loader, setLoader] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  const handleSubmit = () => {
    if (!name) {
      setNameerr("Name is required");
    }
    if (!email) {
      setEmailerr("Email is required");
    } else if (
      !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email)
    ) {
      setEmailerr("Invalid Email");
    }
    if (!password) {
      setPassworderr("Password is required");
    }
    if (name && email && password) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setTimeout(() => {
            // Signed up
            navigate("/");
            const user = userCredential.user;
            setLoader(false);
            // ...
          }, 3000);
        })
        .catch((error) => {
          setTimeout(() => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoader(false);
            // ..
          }, 3000);
        });
    }
  };

  return (
    <div className="flex justify-center gap-[69px]">
      <div className="w-1/2 flex justify-end items-center">
        <div>
          <h1 className="text-[34.4px] font-bold text-two">
            Get started with easily register
          </h1>
          <p className=" text-[20px] font-normal text-two/50 mt-[13px] mb-[53px]">
            Free register and you can enjoy it{" "}
          </p>
          <div className="relative">
            <label
              className="text-[13px] font-semibold text-two/50 absolute top-[-23px] left-[30px] p-3 bg-white
            "
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className="w-[368px] h-[81px] rounded-[8.6px] border-2 border-two/50 p-10 outline-none"
              type="text"
              placeholder="Enter Your Email"
              value={email}
            />
            {emailerr && <p className="text-red-500">{emailerr}</p>}
          </div>
          <div className="relative mt-[56px] mb-[56px]">
            <label
              className="text-[13px] font-semibold text-two/50 absolute top-[-23px] left-[30px] p-3 bg-white
            "
            >
              Name
            </label>
            <input
              onChange={handleName}
              className="w-[368px] h-[81px] rounded-[8.6px] border-2 border-two/50 p-10 outline-none"
              type="text"
              placeholder="Enter Your Name"
              value={name}
            />
            {nameerr && <p className="text-red-500">{nameerr}</p>}
          </div>
          <div className="relative">
            <label
              className="text-[13px] font-semibold text-two/50 absolute top-[-23px] left-[30px] p-3 bg-white
            "
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              className="w-[368px] h-[81px] rounded-[8.6px] border-2 border-two/50 p-10 outline-none relative "
              type={eye ? "password" : "text"}
              placeholder="Enter your password"
              value={password}
            />
            {passworderr && <p className="text-red-500">{passworderr}</p>}

            {eye ? (
              <FaEyeSlash
                onClick={() => setEye(false)}
                className="absolute top-[40%] right-[100px]"
              />
            ) : (
              <FaEye
                onClick={() => setEye(true)}
                className="absolute top-[40%] right-[100px]"
              />
            )}
          </div>
          {loader ? (
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto "
            />
          ) : (
            <button
              onClick={handleSubmit}
              className="w-[368px] h-[67px] text-white bg-one rounded-[86px] mt-[51px] mb-[35px] cursor-pointer"
            >
              Sign up
            </button>
          )}

          <div className="flex justify-center mr-20">
            <p>
              Already have an account ?
              <Link to={"/"} className=" text-[#EA6C00]">
                Sign In
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img
          className="ml-auto h-screen w-full object-cover"
          src="signUP.png"
          alt="signUp"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
