const getItemImg = (item, dataType) => {
  let itemImg;
  if (item.images && item.images.length > 0) {
    itemImg = item.images[1] || item.images[0];
  }
  if (dataType === "tracks" && item.album && item.album.images) {
    itemImg = item.album.images[1] || item.album.images[0];
  }
  return itemImg;
};


export default getItemImg;