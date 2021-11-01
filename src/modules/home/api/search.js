const search = (
  authToken,
  { limit = 10, type = "album,artist,track" } = {}
) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  console.log("authToken", authToken);
  const url = `https://api.spotify.com/v1/search?q=britney&type=${type}&include_external=audio&limit=${limit}`;
  return fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default search;
