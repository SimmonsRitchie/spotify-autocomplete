import axios from "axios";

async function fetchMoreHits(url, dataType, authToken, dispatch) {
  dispatch({ type: "FETCH_START" });
  try {
    const result = await axios(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const refinedResults = result.data[dataType].items;
    const nextPage = result.data[dataType].next;
    dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        hits: refinedResults,
        next: nextPage,
      },
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: "FETCH_FAILURE" });
  }
}

export default fetchMoreHits;
