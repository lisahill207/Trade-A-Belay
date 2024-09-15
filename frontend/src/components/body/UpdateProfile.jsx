import { React, useEffect, useState } from "react";
import useUpdateUserProfile from "../../hooks/useUpdateUserProfile.jsx";

const UpdateProfile = ({ authUser }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    newPassword: "",
    currentPassword: "",
    gym: "",
    style: "",
    bio: "",
    profileImg: "",
  });
  const { updateProfile, isUpdatingProfile } = useUpdateUserProfile();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (authUser) {
      setFormData({
        fullName: authUser.fullName,
        username: authUser.username,
        email: authUser.email,
        newPassword: "",
        currentPassword: "",
        gym: authUser.gym,
        style: authUser.style,
        bio: authUser.bio,
      });
    }
  }, [authUser]);

  return (
    <div className="bg-teal rounded-xl p-4 m-4">
      <h2 className="text-white text-center text-2xl font-bold">
        Update Your Profile
      </h2>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={(e) => {
          updateProfile(formData);
        }}
      >
        <div className="flex max-w-lg mx-auto flex-row md:flex-col justify-center items-center text-white">
          <div className="flex flex-col justify-center items-start md:items-center">
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
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
              />
            </label>
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
                placeholder="Full Name"
                name="fullName"
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </label>
          </div>
          <div className="flex flex-col justify-center items-start md:items-center">
            <div className="label">
              <span className="text-white label-text">
                Choose a climbing style
              </span>
            </div>
            <select
              className="bg-dark-blue select text-base mb-2 mx-4 select-bordered flex items-center gap-2"
              onChange={handleInputChange}
              value={formData.style}
              name="style"
            >
              <option hidden value="Choose One">
                Choose One
              </option>
              <option value="Top Rope">Top Rope</option>
              <option value="Lead Rope">Lead Rope</option>
              <option value="Boulder">Boulder</option>
            </select>
            <div className="label">
              <span className="label-text text-white">Choose a Gym</span>
            </div>
            <select
              className="bg-dark-blue select text-base mb-4 mx-4 select-bordered flex items-center gap-2"
              onChange={handleInputChange}
              value={formData.gym}
              name="gym"
            >
              <option hidden value="Choose One">
                Choose One
              </option>
              <option value="Timonium">Timonium</option>
              <option value="Hampden">Hampden</option>
              <option value="Columbia">Columbia</option>
              <option value="Rockville">Rockville</option>
              <option value="Crystal City">Crystal City</option>
              <option value="Fairfax">Fairfax</option>
            </select>
            <textarea
              className="bg-dark-blue textarea textarea-bordered text-base mx-4 self-center grow"
              placeholder="Bio"
              onChange={handleInputChange}
              value={formData.bio}
              name="bio"
            ></textarea>
          </div>
        </div>
        <button className="btn m-4 bg-dark-blue border-none rounded-full btn-sm text-white hover:bg-grey">
          {isUpdatingProfile ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
