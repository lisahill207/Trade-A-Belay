import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    gym: "",
    style: "",
    bio: "",
  });

  const queryClient = useQueryClient();

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({
      fullName,
      username,
      email,
      password,
      gym,
      style,
      bio,
    }) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            username,
            email,
            password,
            gym,
            style,
            bio,
          }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to create account");
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Account created successfully");

      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="grow max-w-lg mx-auto login-form flex flex-col justify-center content-center p-4">
        <h2 className="self-center py-2 text-2xl text-wrap text-center text-white">
          Sign Up to find your next climbing partner
        </h2>
        <p className="self-center py-2 text-lg text-white">
          Already a member?{" "}
          <Link to="/login" className="underline font-bold">
            Log In
          </Link>
        </p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
          f
        >
          <div className="flex max-w-lg mx-auto flex-row justify-center items-center text-white">
            <div className="flex flex-col justify-center align-start">
              <label className="m-4 text-base self-center input input-bordered flex items-center gap-2">
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
                  placeholder="Email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                />
              </label>
              <label className="m-4 text-base self-center input input-bordered flex items-center gap-2">
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
              <label className="m-4 text-base self-center input input-bordered flex items-center gap-2">
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
              <label className="m-4 text-base self-center input input-bordered flex items-center gap-2">
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
                  placeholder="Full Name"
                  name="fullName"
                  onChange={handleInputChange}
                  value={formData.fullName}
                />
              </label>
            </div>
            <div className="flex flex-col justify-center align-start">
              <div className="label">
                <span className="label-text">
                  Choose a preferred climbing style
                </span>
              </div>
              <select
                className="select text-base mb-2 mx-4 select-bordered flex items-center gap-2"
                onChange={handleInputChange}
                value={formData.style}
                name="style"
                defaultValue="Choose a Climbing Style"
              >
                <option hidden value="Choose a Climbing Style">
                  Choose a Climbing Style
                </option>
                <option value="Top Rope">Top Rope</option>
                <option value="Lead">Lead</option>
                <option value="Boulder">Boulder</option>
              </select>
              <div className="label">
                <span className="label-text">Choose a Gym</span>
              </div>
              <select
                className="select text-base mb-4 mx-4 select-bordered flex items-center gap-2"
                onChange={handleInputChange}
                value={formData.gym}
                name="gym"
                defaultValue="Choose a Gym"
              >
                <option hidden value="Choose a Gym">
                  Choose a Gym
                </option>
                <option value="Timonium">Timonium</option>
                <option value="Hampden">Hampden</option>
                <option value="Columbia">Columbia</option>
                <option value="Rockville">Rockville</option>
                <option value="Crystal City">Crystal City</option>
                <option value="Fairfax">Fairfax</option>
              </select>
              <textarea
                className="textarea textarea-bordered text-base mx-4 self-center grow"
                placeholder="Bio"
                onChange={handleInputChange}
                value={formData.bio}
                name="bio"
              ></textarea>
            </div>
          </div>
          <button className="justify-self-end btn bg-yellow text-dark-blue m-4 font-bold hover:bg-blue-grey">
            {isPending ? "Loading..." : "Sign Up"}
          </button>
          {isError && <p className="text-red-500">{error.message}</p>}
        </form>
      </div>
    </>
  );
};

export default Signup;
