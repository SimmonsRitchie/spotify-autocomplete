import React from "react";

const Results = ({ hits }) => {
  if (!hits || hits.length === 0) {
    return <div>No results</div>;
  }
  //TODO: add pagination
  //TODO: add albums, tracks
  //TODO: display each item as specifications require
  //TODO: open a sidebar or modal to display meta information
  return (
    <div>
      <div className="uppercase font-semibold">Artists</div>
      <ul>
        {hits.artists &&
          hits.artists.items.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Results;
