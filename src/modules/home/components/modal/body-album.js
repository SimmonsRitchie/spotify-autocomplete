import React, { useContext, useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { AuthContext } from "../../context/auth-context";
import msToMin from "../../api/msToMin";
import Pagination from "./pagination";

const BodyAlbum = ({ data }) => {
  const { authToken } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [pageData, setPageData] = useState({
    nextUrl: null,
    prevUrl: null,
    offset: 0,
    limit: 0,
    totalItemCount: 0,
    itemCount: 0,
  });
  const [tracksData, setTracksData] = useState();
  const nextPage = () => {
    if (!pageData.nextUrl) {
      return;
    }
    fetcher(pageData.nextUrl);
  };
  const prevPage = () => {
    if (!pageData.prevUrl) {
      return;
    }
    fetcher(pageData.prevUrl);
  };

  const fetcher = useCallback(
    (url) => {
      const options = {
        headers: new Headers({
          "content-type": "application/json",
          Authorization: `Bearer ${authToken}`,
        }),
      };
      return fetch(url, options)
        .then((r) => r.json())
        .then((data) => {
          setPageData({
            nextUrl: data.next,
            prevUrl: data.previous,
            offset: data.offset,
            limit: data.limit,
            totalItemCount: data.total,
            itemCount: data.items.length,
          });
          setTracksData(data);
        })
        .catch((err) => setError(err));
    },
    [authToken]
  );

  useEffect(() => {
    const tracksUrl = `https://api.spotify.com/v1/albums/${data.id}/tracks?limit=5`;
    fetcher(tracksUrl);
  }, [data.id, fetcher]);
  if (error) return <div>failed to load</div>;
  if (!tracksData) return <div>Loading...</div>;
  const releaseDate = data.release_date;
  const fmtReleaseDate = dayjs(releaseDate).format("MMMM DD, YYYY");
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4  text-sm" >
        <p className="text-gray-500">Released {fmtReleaseDate}</p>
        <div>
          <p className="mb-2 uppercase font-semibold">Tracks:</p>
          <ul className="space-y-1 list-decimal	 list-inside">
            {tracksData.items.map(({ id, name, duration_ms: durationMS }) => {
              const durationMin = msToMin(durationMS);
              return (
                <li key={id} className="text-sm truncate">
                  {name} <span className="text-gray-500">({durationMin})</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Pagination data={pageData} nextPage={nextPage} prevPage={prevPage} />

    </div>
  );
};

export default BodyAlbum;
