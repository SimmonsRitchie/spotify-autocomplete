/**
 * Converts milliseconds to string of format 'mm:ss'
 *
 * @param {number} ms - milliseconds
 * @returns {string} - string of format 'mm:ss'
 */
const msToMin = (ms) => {
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export default msToMin;
