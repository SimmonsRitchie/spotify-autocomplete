import React, { useState, useEffect } from "react";
import { requestAuthorization } from "./home/api/auth";
import Home from "./home";
import AuthContextProvider from "./home/context/auth-context";

const App = () => {
  //TODO: Handle failure to authorize
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    requestAuthorization().then((token) => setAuthToken(token.access_token));
  }, []);

  if (!authToken) {
    return <div>Connecting to Spotify...</div>;
  }
  return (
    <AuthContextProvider authToken={authToken}>
        <Home authToken={authToken} />
    </AuthContextProvider>
  );
};

export default App;
