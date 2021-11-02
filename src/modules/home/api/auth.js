const request = require("request-promise");
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID; // Your client id
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; // Your secret

if (typeof CLIENT_ID === "undefined") {
  throw new Error(
    "REACT_APP_CLIENT_ID is undefined. Make sure it's set in .env"
  );
}
if (typeof CLIENT_SECRET === "undefined") {
  throw new Error(
    "REACT_APP_CLIENT_SECRET is undefined. Make sure it's set in .env"
  );
}

// your application requests authorization
var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};
const requestAuthorization = () => {
  return request.post(authOptions);
};

module.exports = {
  requestAuthorization,
};
