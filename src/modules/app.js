import React, { useState, useEffect } from "react";
import { requestAuthorization } from "./home/api/auth";
import Home from "./home";
import AuthContextProvider from "./home/context/auth-context";
import ModalContextProvider from "./home/context/modal-context";

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
      <ModalContextProvider>
        <Home authToken={authToken} />
      </ModalContextProvider>
    </AuthContextProvider>
  );
};

export default App;
