import React, { useState, useEffect } from "react";
import { requestAuthorization } from "./home/api/auth";
import Home from "./home";
import AuthContextProvider from "./home/context/auth-context";
import Layout from "./home/components/layout";
import Spinner from "./home/components/spinner";

const App = () => {
  //TODO: Handle failure to authorize
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    requestAuthorization().then((token) => setAuthToken(token.access_token));
  }, []);

  if (!authToken) {
    return (
      <Layout>
        <div className="mt-14 mb-6 text-gray-50 text-xl animate-pulse	">
          Connecting to Spotify...
        </div>
        <Spinner />
      </Layout>
    );
  }
  return (
    <AuthContextProvider authToken={authToken}>
      <Home authToken={authToken} />
    </AuthContextProvider>
  );
};

export default App;
