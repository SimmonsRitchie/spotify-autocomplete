import React, { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "../../context/auth-context";
import getItemImg from "../../api/getItemImg";
import Pagination from "./pagination";

const BodyArtist = ({ data }) => {
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
  const [albumData, setAlbumData] = useState();

  const nextPage = () => {
    if (!pageData.nextUrl) {
      console.log('no next url!')
      return
    }
    console.log("next!");
    console.log(pageData.nextUrl);
    fetcher(pageData.nextUrl);
  };
  const prevPage = () => {
    if (!pageData.prevUrl) {
      console.log('no prev url!')
      return
    }
    console.log("prev!");
    console.log(pageData.prevUrl);
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
          console.log("data", data);
          setPageData({
            nextUrl: data.next,
            prevUrl: data.previous,
            offset: data.offset,
            limit: data.limit,
            totalItemCount: data.total,
            itemCount: data.items.length,
          });
          setAlbumData(data)
        })
        .catch((err) => setError(err));    },
    [authToken],
  )

  useEffect(() => {
    const albumsUrl = `https://api.spotify.com/v1/artists/${data.id}/albums?limit=4`;
    fetcher(albumsUrl);

  },[data.id, fetcher])
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
            return (
              <div key={id} className="flex gap-2">
                {img ? (
                  <img
                    src={img.url}
                    alt={`Cover for ${name}`}
                    className="w-8 h-8"
                  />
                ) : (
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-500" />
                )}

                <div className="text-sm truncate">{name}</div>
              </div>
            );
          })}
          <Pagination data={pageData} nextPage={nextPage} prevPage={prevPage} />
        </div>
      </div>
    </div>
  );
};

export default BodyArtist;
