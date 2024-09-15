import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const queryClient = useQueryClient();

  const {
    mutate: loginMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async ({ username, password }) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success("Login successful");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex flex-col justify-center items-center w-dvw pattern-dots pattern-dot-color pattern-bg-mid-grey
  pattern-size-2 pattern-opacity-100"
    >
      <div className="grow max-w-lg mx-auto login-form flex flex-col justify-center content-center bg-teal rounded-xl p-4 m-4">
        <h2 className="self-center py-2 text-2xl text-wrap text-center text-white">
          Login to view bios
        </h2>

        <p className="self-center py-2 text-white">
          New to our community?{" "}
          <Link to="/signup" className="underline font-bold">
            Sign Up
          </Link>{" "}
          here!
        </p>
        {isError && <p className="text-red text-center">{error.message}</p>}
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center align-center ">
            <label className="bg-dark-blue m-4 text-base self-center input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                name="username"
                onChange={handleInputChange}
                value={formData.username}
              />
            </label>
            <label className="bg-dark-blue m-4 text-base self-center input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={formData.password}
              />
            </label>
          </div>
          <button className="btn m-4 bg-dark-blue border-none rounded-full btn-sm text-white hover:bg-grey">
            {isPending ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
