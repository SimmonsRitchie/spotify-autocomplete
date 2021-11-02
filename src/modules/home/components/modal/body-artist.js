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
      return
    }
    fetcher(pageData.nextUrl);
  };
  const prevPage = () => {
    if (!pageData.prevUrl) {
      return
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

  return (
    <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col">
          <p className="mb-3 text-base text-gray-600 font-semibold">Albums</p>
          <div className="grid grid-cols-1 gap-2">
            {albumData.items.map((item) => {
              const { id, name } = item;
              const img = getItemImg(item);
              return (
                <div key={id} className="flex gap-3 items-center">
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
          </div>
        </div>
        <Pagination data={pageData} nextPage={nextPage} prevPage={prevPage} />

    </div>
  );
};

export default BodyArtist;
