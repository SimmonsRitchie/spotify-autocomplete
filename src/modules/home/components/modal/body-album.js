import React, { useContext } from "react";
import dayjs from "dayjs";
import useSWR from "swr";
import { AuthContext } from "../../context/auth-context";
import msToMin from "../../api/msToMin";

const BodyAlbum = ({ data }) => {
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
  const trackUrl = `https://api.spotify.com/v1/albums/${data.id}/tracks?limit=5`;
  const { data: trackData, error } = useSWR(trackUrl, fetcher);
  const releaseDate = data.release_date;
  const fmtReleaseDate = dayjs(releaseDate).format("MMMM DD, YYYY");

  if (error) return <div>failed to load</div>;
  if (!trackData) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-2">
      <p>Released: {fmtReleaseDate}</p>
      <div>
        <p className="mb-2 uppercase font-semibold text-sm">Tracks:</p>
        <ul className="space-y-1 list-decimal	 list-inside">
          {trackData.items.map(({name, duration_ms: durationMS}) => {
            const durationMin = msToMin(durationMS)
            return <li className="text-sm truncate">{name} <span className="text-gray-500">({durationMin})</span></li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default BodyAlbum;
