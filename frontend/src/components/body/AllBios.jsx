import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "./Loading.jsx";
import OneBio from "./OneBio.jsx";

const AllBios = () => {
  const getBiosEndpoint = () => {
    return "/api/bios/all";
  };

  const BIOS_ENDPOINT = getBiosEndpoint();

  const {
    data: bios,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["bios"],
    queryFn: async () => {
      try {
        const res = await fetch(BIOS_ENDPOINT);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }

        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {(isLoading || isRefetching) && (
        <div className="flex flex-col justify-center">
          <Loading />
        </div>
      )}
      {!isLoading && !isRefetching && bios?.length === 0 && (
        <p className="text-center my-4">No bios at this time.</p>
      )}
      {!isLoading && !isRefetching && bios && (
        <div className="flex flex-row flex-wrap justify-around items-start">
          {bios.map((bio) => (
            <OneBio key={bio._id} bio={bio} />
          ))}
        </div>
      )}
    </>
  );
};

export default AllBios;
