import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState({
    data: null,
    isLoading: true,
  });

  useEffect(function fetchMessageWhenMounted() {
    async function fetchMessage() {
      console.log("use effect running");
      const userResult = await axios.get("https://127.0.0.1:5000");
      console.log("got past axios");
      setMessage({
        data: userResult.data,
        isLoading: false,
      });
    }
    fetchMessage();
  }, []);

  if (message.isLoading) return <i>Loading...</i>;

  console.log("is it getting to console.log? ", message);

  return <div className="App">{message.data.data}</div>;
}

export default App;
