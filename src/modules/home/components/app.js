import React, { useEffect, useState } from "react";
import { requestAuthorization } from "../api/auth";
import requestTrack from "../api/requestTrack";
import search from "../api/search";

function App() {
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState();

  useEffect(() => {
    requestAuthorization().then((res) => {
      setLoading(false);
      setAuthToken(res.access_token);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full flex flex-col h-full gap-7 px-4 py-6 justify-center items-center">
      <h3>New project</h3>
      <button
        className="bg-red-800 text-white rounded p-3"
        onClick={() => requestTrack(authToken)}
      >
        Request track
      </button>
      <button
        className="bg-blue-800 text-white rounded p-3"
        onClick={() => search(authToken)}
      >
        Search
      </button>
    </div>
  );
}

export default App;
