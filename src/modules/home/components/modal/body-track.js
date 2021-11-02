import React from "react";
import dayjs from "dayjs";
import msToMin from "../../api/msToMin";
import PropTypes from "prop-types";

const BodyTrack = ({ data }) => {
  const { album } = data;
  const durationMin = msToMin(data.duration_ms);
  const fromAlbum = album.name;
  const albumReleaseData = album.release_date;
  const fmtAlbumReleaseDate = dayjs(albumReleaseData).format("MMMM DD, YYYY");
  const artistList = album.artists.map((artist) => artist.name);
  const fmtArtists = artistList.join(", ");
  const ITEMS = [
    { label: "Album", val: fromAlbum },
    { label: "Duration", val: `${durationMin} min` },
    { label: "Track no", val: `${data.track_number} of ${album.total_tracks}` },
  ];
  return (
    <div className="w-full flex flex-col gap-4  text-sm">
      <div>
        <p className="text-gray-500 mb-0.5 truncate">By {fmtArtists}</p>
        <p className="text-gray-500">Released {fmtAlbumReleaseDate}</p>
      </div>
      <div className="flex flex-col gap-0.5">
        {ITEMS.map(({ label, val }) => (
          <div key={label} className="grid grid-cols-3">
            <div className="text-gray-600">{label}</div>
            <div className="text-gray-900 font-semibold col-span-2">{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

BodyTrack.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      total_tracks: PropTypes.number.isRequired,
      artists: PropTypes.arrayOf(PropTypes.any).isRequired,
    }),
    duration_ms: PropTypes.number,
  }).isRequired,
};

export default BodyTrack;
