const requestTrack = (authToken) => {
  console.log("request data with", authToken);
  const myInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  return fetch("https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V", myInit)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => console.log(err));
};

export default requestTrack;