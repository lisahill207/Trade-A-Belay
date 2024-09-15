import { React, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import logo from "../../images/movement.png";
import { MdEdit } from "react-icons/md";
import useUpdateUserProfile from "../../hooks/useUpdateUserProfile.jsx";

const UserBio = () => {
  const [profileImg, setProfileImg] = useState(null);
  const profileImgRef = useRef(null);
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  const { username } = useParams();

  /*const {
    data: user,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });*/

  const { isUpdatingProfile, updateProfile } = useUpdateUserProfile();

  const handleImgChange = (e, state) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        state === "profileImg" && setProfileImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /*useEffect(() => {
    refetch();
  }, [username, refetch]);*/

  return (
    <div>
      <div className="card m-2 bg-dark-blue max-w-96 shadow-xl">
        <div className="w-32 rounded-full relative">
          <figure className="w-96 h-400">
            <img
              className="object-cover"
              src={authUser.profileImg || `${logo}`}
              alt="Profile image"
            />
            <div className="absolute top-5 right-3 p-1 bg-yellow rounded-full bg-opacity-95 cursor-pointer">
              <MdEdit
                className="w-4 h-4 text-white"
                onClick={() => profileImgRef.current.click()}
              />
            </div>
            <div className="flex justify-end px-4 mt-5">
              {profileImg && (
                <button
                  className="btn btn-primary rounded-full btn-sm text-white px-4 ml-2"
                  onClick={async () => {
                    await updateProfile({ profileImg });
                    setProfileImg(null);
                  }}
                >
                  {isUpdatingProfile ? "Updating..." : "Update"}
                </button>
              )}
            </div>
          </figure>
          <input
            type="file"
            hidden
            accept="image/*"
            ref={profileImgRef}
            onChange={(e) => handleImgChange(e, "profileImg")}
          />
        </div>

        <div className="card-body text-wrap">
          <h2 className="card-title">{authUser?.fullName}</h2>
          <h3 className="">
            {authUser?.style}, {authUser?.gym}
          </h3>
          <p>{authUser?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
