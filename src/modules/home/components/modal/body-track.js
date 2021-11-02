import React from "react";
import dayjs from "dayjs";
import msToMin from "../../api/msToMin";



const BodyTrack = ({ data }) => {
  const { album } = data;
  const durationMin = msToMin(data.duration_ms);
  const fromAlbum = album.name;
  const albumReleaseData = album.release_date;
  const fmtAlbumReleaseDate = dayjs(albumReleaseData).format("MMMM YYYY");
  const artistList = album.artists.map(artist => artist.name)
  const artistLabel = artistList.length > 1 ? "Artists" : "Artist";
  const ITEMS = [
    {label: artistLabel, val: artistList.join(", ")},
    {label: "Duration", val: `${durationMin} min`},
    {label: "Album", val: fromAlbum},
    {label: "Released", val: fmtAlbumReleaseDate},
  ]
  return (
    <div className="w-full flex flex-col gap-2 text-base">
      {ITEMS.map(({label, val}) => (
        <div key={label} className="grid grid-cols-2">
          <div className="text-gray-600">{label}</div>
          <div className="text-gray-900 font-semibold">{val}</div>
          </div>
      ))}
    </div>
  );
};

export default BodyTrack;
