import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    password: "",
    gym: "",
    phoneNumber: "",
    bio: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isError = false;
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
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleInputChange}
                  value={formData.firstName}
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
            </div>
            <div className="flex flex-col justify-center align-start">
              <div className="label">
                <span className="label-text">Choose a Gym</span>
              </div>
              <select
                className="select text-base mb-4 mx-4 select-bordered flex items-center gap-2"
                onChange={handleInputChange}
                value={formData.gym}
                name="gym"
              >
                <option value="Timonium">Timonium</option>
                <option value="Hampden">Hampden</option>
                <option value="Columbia">Columbia</option>
                <option value="Rockville">Rockville</option>
                <option value="5">Crystal City</option>
                <option value="6">Fairfax</option>
              </select>
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
                  type="tel"
                  className="grow"
                  placeholder="Phone Number"
                  onChange={handleInputChange}
                  value={formData.phoneNumber}
                  name="phoneNumber"
                />
              </label>
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
            Sign Up
          </button>
          {isError && <p className="text-red">Something went wrong</p>}
        </form>
      </div>
    </>
  );
};

export default Signup;
