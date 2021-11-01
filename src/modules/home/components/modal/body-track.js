import React from "react";
import dayjs from "dayjs";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const BodyTrack = ({ data }) => {
  const { album } = data;
  const durationMin = millisToMinutesAndSeconds(data.duration_ms);
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
