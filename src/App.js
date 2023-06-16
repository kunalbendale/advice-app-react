import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    console.log("[App] >> [useEffect]");
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        if (error.message == "Network Error") {
          setAdvice("Check your internet connection!! Please try again");
        }
        console.error(error);
      });
  };

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}!</h2>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
