import axios from "axios";

async function fetchHits(query, authToken, dispatch, cancelToken) {
  if (query === "") {
    axios.isCancel('empty input')
    dispatch({ type: "FETCH_SUCCESS", payload: [] });
    return
  }

  dispatch({ type: "FETCH_START" });
  const limit = 10;
  const type = "album,artist,track";
  const encodedQuery = encodeURIComponent(query);
  const url = `https://api.spotify.com/v1/search?q=${encodedQuery}&type=${type}&include_external=audio&limit=${limit}`;
  console.log('request url',url)
  try {
    const result = await axios(url, {
      cancelToken,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log("result from request:", result);
    dispatch({ type: "FETCH_SUCCESS", payload: result.data });
  } catch (err) {
    console.error(err);
    axios.isCancel(err) || dispatch({ type: "FETCH_FAILURE" });
  }
}

export default fetchHits;
