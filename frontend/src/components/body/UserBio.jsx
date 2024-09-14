import { React, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import logo from "../../images/movement.png";
import { MdEdit } from "react-icons/md";
import axios from "axios";

const UserBio = () => {
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  const profileImgRef = useRef(null);
  const url = `/api/users/update`;
  const [postImage, setPostImage] = useState({ profileImg: "" });

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, profileImg: base64 });
  };

  const createPost = async (postImage) => {
    try {
      await axios.post(url, postImage);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhoto = (postImage) => {
    handleFileUpload().then(createPost(postImage));
  };

  return (
    <div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <figure className="w-96 h-400">
          <img
            className="object-cover"
            src={authUser.profileImg || `${logo}`}
            alt="Profile image"
          />
          <div className="absolute top-5 right-3 p-1 bg-primary rounded-full group-hover/avatar:opacity-100 opacity-0 cursor-pointer">
            <MdEdit
              className="w-4 h-4 text-white"
              onClick={() => profileImgRef.current.click()}
            />
          </div>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={profileImgRef}
            onChange={(e) => {
              updatePhoto(postImage);
            }}
          />
        </figure>

        <div className="card-body text-wrap">
          <h2 className="card-title">{authUser?.fullName}</h2>
          <h3 className="">
            {authUser?.style}, {authUser?.gym}
          </h3>
          <p>{authUser?.bio}</p>
        </div>
      </div>
      <form>
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
            type="file"
            className="grow"
            accept="image/*"
            placeholder="Upload a Photo"
            name="profileImg"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
      </form>
    </div>
  );
};

export default UserBio;
