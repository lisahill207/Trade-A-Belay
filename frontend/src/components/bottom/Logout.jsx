import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Logout = () => {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "POST",
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
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });
  const { data: authUser } = useQuery({ queryKey: ["authUser"] });

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="grow login-form  flex flex-col justify-center align-center w-dvw p-4">
      <h2 className="self-center py-2 text-2xl text-white">Ready to climb?</h2>
      <button
        className="w-content self-center btn bg-yellow text-dark-blue m-4 font-bold hover:bg-blue-grey"
        onClick={handleClick}
      >
        {isPending ? "Loading..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;
