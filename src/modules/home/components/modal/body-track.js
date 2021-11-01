import React from "react";
import dayjs from "dayjs";
import msToMin from "../../api/msToMin";



const BodyTrack = ({ data }) => {
  const { album } = data;
  const durationMin = msToMin(data.duration_ms);
  const fromAlbum = album.name;
  const albumReleaseData = album.release_date;
  const fmtAlbumReleaseDate = dayjs(albumReleaseData).format("MMMM YYYY");
  return (
    <div className="w-full flex flex-col gap-4">
      <p >Duration: {durationMin}</p>
      <p >
        From album: {fromAlbum} ({fmtAlbumReleaseDate})
      </p>
      <p >Released: {fmtAlbumReleaseDate}</p>
    </div>
  );
};

export default BodyTrack;
