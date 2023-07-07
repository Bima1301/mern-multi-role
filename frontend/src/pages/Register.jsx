import {
  Button,
  Checkbox,
  Label,
  Navbar,
  Spinner,
  TextInput,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { RegisterUser, reset } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import DarkModeButton from "../components/DarkModeButton";
import { BsDoorOpen } from "react-icons/bs";
import Swal from "sweetalert2";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top-right",
        icon: "success",
        title: "Register Success",
        text: "You can login now",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/login");
    }
    dispatch(reset());
  }, [isSuccess, dispatch, navigate]);

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(register));
  };
  const { message: errorMessage } = message;
  return (
    <>
      <link
        rel="stylesheet"
        href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 dark:bg-gray-400 transition-background">
        <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md relative">
          <DarkModeButton className="absolute right-0 scale-110" />
          <div className="w-full flex justify-center">
            <img alt="Logo" className="mr-3 h-6 sm:h-9 scale-150" src={Logo} />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              VI Apps
            </span>
          </div>
          <div className="mt-10">
            <form onSubmit={handleAuth}>
              {isError && (
                <div
                  id="alert-border-2"
                  className="flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 "
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="ml-3 text-sm font-medium flex flex-row gap-2">
                    <p className="font-bold">Error! </p>
                    <p>{errorMessage}</p>
                  </div>
                  <button
                    disabled={isLoading}
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8"
                    onClick={() => dispatch(reset())}
                    aria-label="Close"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              )}
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white"
                >
                  Name:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    {/* //svg name */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#a0aec0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M6 20a20 20 0 0 1 12 0"></path>
                    </svg>
                  </div>

                  <input
                    id="name"
                    type="text"
                    onChange={(e) =>
                      setRegister({ ...register, name: e.target.value })
                    }
                    value={register.name}
                    name="name"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300 dark:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                    value={register.email}
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300 dark:border-transparent"
                    placeholder="E-Mail Address"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white"
                >
                  Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                    value={register.password}
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300 dark:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="confirm_password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600 dark:text-white"
                >
                  Confirm Password:
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <path d="M7 15v-6l2 2l2 -2v6"></path>
                      <path d="M14 13l2 2l2 -2m-2 2v-6"></path>
                    </svg>
                  </div>

                  <input
                    id="confirm_password"
                    type="confirm_password"
                    onChange={(e) =>
                      setRegister({
                        ...register,
                        confirm_password: e.target.value,
                      })
                    }
                    value={register.confirm_password}
                    name="confirm_password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 dark:bg-gray-600 dark:text-white dark:placeholder-gray-300 dark:border-transparent"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                  disabled={isLoading}
                >
                  <span className="mr-2 uppercase">Register</span>
                  <span>
                    {isLoading ? (
                      <Spinner color={"gray"} />
                    ) : (
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <NavLink
              to={"/dashboard/login"}
              className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
            >
              <span>
                <BsDoorOpen className="scale-150" />
              </span>
              <span className="ml-2">Already have an account?, Login here</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
