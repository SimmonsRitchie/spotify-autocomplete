/**
 * Extracts an artist, album or track image from
 * Spotify's API response object.
 *
 * @param {Object} item - Spotify API response object
 * @param {String} dataType - Type of data. eg. 'artist', 'album' or 'track'
 * @param {String} imgSize - Size of image. eg. 'small', 'medium', 'large'
 *
 * @returns {Object} - an object with the image url and the image size. Returns undefined
 *  if no image is found.
 */
const getItemImg = (item, dataType, imgSize = "medium") => {
  if (!["small", "medium", "large"].includes(imgSize)) {
    throw new Error(
      "Invalid image size. Specify either: 'small', 'medium' or 'large'"
    );
  }
  // find images based on datatype
  let itemImgs;
  if (item.images && item.images.length > 0) {
    itemImgs = item.images;
  }
  if (
    dataType === "tracks" &&
    item.album &&
    item.album.images &&
    item.album.images.length > 0
  ) {
    itemImgs = item.album.images;
  }
  if (typeof itemImgs === "undefined") {
    // no images found
    return;
  }

  // handle size
  // Spotify images are an array ordered by smallest to largest size
  if (imgSize === "small") {
    return itemImgs[0];
  }
  if (imgSize === "medium") {
    return itemImgs[1] || itemImgs[0]; // fallback if no medium image
  }
  if (imgSize === "large") {
    return itemImgs[2] || itemImgs[1] || itemImgs[0]; // fallback if no large image
  }
};

export default getItemImg;
