import React, { useState, useEffect } from "react";
import { requestAuthorization } from "./home/api/auth";
import Home from "./home";

const App = () => {
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    requestAuthorization().then((token) => setAuthToken(token.access_token));
  }, []);

  if (!authToken) {
    return <div>Authenticating...</div>;
  }
  return <Home authToken={authToken} />;
};

export default App;
