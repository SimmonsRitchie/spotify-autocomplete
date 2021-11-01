import axios from "axios";

async function fetchMeta(payload, resultType, authToken, cancelToken) {
  const artistIds = payload[resultType].items.map((item) => item.id);
  const artistIdsClean = artistIds.join(",");
  const metaUrl = `https://api.spotify.com/v1/${resultType}?ids=${artistIdsClean}`;
  const resultMeta = await axios(metaUrl, {
    cancelToken,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  payload[resultType].meta = resultMeta.data[resultType];
}

export default fetchMeta;
