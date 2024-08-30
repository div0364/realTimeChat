import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";

const Signup = () => {
    const [authUser,setAuthUser]=useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmpassword=watch("confirmpassword","");
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };

  const onSubmit =async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };
   await axios
    .post("http://localhost:5002/user/signup", userInfo)
    .then((response)=>{
        console.log(response.data);
        if(response.data){
            alert("Signup successfully! You can log in.");

        }
        localStorage.setItem("messenger",JSON.stringify(response.data));
        setAuthUser(response.data);
    })
    .catch((error)=>{
      if(error.response){
        alert("Error:"+error.response.data.error);
      }
    });
  };

  return (
    <>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Create a new Account
        </h1>
        <h2 className="text-sm text-gray-600 mb-6">
          It's free and always will be
        </h2>
        <div className="space-y-4">
          {/* Email Field */}
          <label className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-600 text-sm">
              **This field is required**
            </span>
          )}

          {/* Username Field */}
          <label className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow bg-transparent outline-none"
              placeholder="Username"
              {...register("name", { required: true })}
            />
          </label>
          {errors.name && (
            <span className="text-red-600 text-sm">
              **This field is required**
            </span>
          )}

          {/* Password Field */}
          <label className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-transparent outline-none"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-600 text-sm">
              **This field is required**
            </span>
          )}

          {/* Confirm Password Field */}
          <label className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow bg-transparent outline-none"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: true,
                validate: validatePasswordMatch,
              })}
            />
          </label>
          {errors.confirmpassword && (
            <span className="text-red-600 text-sm">
              {errors.confirmpassword.message}
            </span>
          )}
        </div>

        {/* Login Redirect */}
        <p className="text-sm text-gray-600 mt-4">
          Have an account?{" "}
          <a href="#" className="text-orange-500 hover:text-orange-700">
            Login
          </a>
        </p>

        {/* Submit Button */}
        <input
          type="submit"
          value="Sign Up"
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 cursor-pointer"
        />
      </form>
    </div>
    </>
  );
};

export default Signup;
