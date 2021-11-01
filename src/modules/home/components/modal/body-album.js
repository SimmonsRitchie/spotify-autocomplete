import React from "react";
import dayjs from "dayjs";


const BodyAlbum = ({data}) => {
  console.log('album data',data)
  const releaseDate = data.release_date
  const fmtReleaseDate = dayjs(releaseDate).format('MMMM DD, YYYY')
  return <div className="flex flex-col gap-4">
  <p>Released: {fmtReleaseDate}</p>
  <div>
  <p className="mb-1">Tracks:</p>
  <ul>
  <li>Track 1</li>
  <li>Track 2</li>
  </ul>
  </div>
  </div>;
};

export default BodyAlbum;
