import React, { useContext } from "react";
import dayjs from "dayjs";
import useSWR from "swr";
import { AuthContext } from "../../context/auth-context";
import getItemImg from "../../api/getItemImg";

const BodyArtist = ({ data }) => {
  const { authToken } = useContext(AuthContext);

  const fetcher = (url) => {
    const options = {
      headers: new Headers({
        "content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      }),
    };
    return fetch(url, options).then((r) => r.json());
  };
  const trackUrl = `https://api.spotify.com/v1/artists/${data.id}/albums?limit=4`;
  const { data: albumData, error } = useSWR(trackUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (!albumData) return <div>Loading...</div>;
  console.log("albumData", albumData);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase">Albums:</p>
        <div className="grid grid-cols-1 gap-2">
          {albumData.items.map((item) => {
            const { id, name } = item;
            const img = getItemImg(item);
            console.log("img", img);
            return (
              <div key={id} className="flex gap-2">
                {img ? <img
                  src={img.url}
                  alt={`Cover for ${name}`}
                  className="w-8 h-8"
                /> : <div className="flex-shrink-0 w-8 h-8 bg-gray-500"/>}

                <div className="text-sm truncate">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyArtist;
