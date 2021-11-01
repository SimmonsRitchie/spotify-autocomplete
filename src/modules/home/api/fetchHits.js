import axios from "axios";

const RESULT_LIMIT = 10;
const RESULT_TYPES = ["artist", "album", "track"];

async function fetchHits(query, authToken, dispatch, cancelToken) {
  if (query === "") {
    axios.isCancel("empty input");
    dispatch({ type: "FETCH_SUCCESS", payload: null });
    return;
  }
  const resultTypesFmt = RESULT_TYPES.join(",");
  dispatch({ type: "FETCH_START" });

  const encodedQuery = encodeURIComponent(query);
  const url = `https://api.spotify.com/v1/search?q=${encodedQuery}&type=${resultTypesFmt}&include_external=audio&limit=${RESULT_LIMIT}&market=US`;
  try {
    const result = await axios(url, {
      cancelToken,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const payload = result.data;
    dispatch({ type: "FETCH_SUCCESS", payload });
  } catch (err) {
    console.error(err);
    axios.isCancel(err) || dispatch({ type: "FETCH_FAILURE" });
  }
}

export default fetchHits;
