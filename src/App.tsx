import React, { useEffect, useState } from "react";
import "./App.css";
import getState from "./api/firebase/getState";

function App() {
  const [data, setData] = useState<any>();
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          fetchData();
          return 10;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fetchData = async () => {
    const time = await getState();
    console.log("time: ", time?.time);
    setData(time?.time);
  };
  return (
    <div className="layout">
      <div className="">
        <p>Time to next check out: {count}</p>
        <p>Last checked time: {data}</p>

        <button className="btn" onClick={fetchData}>
          Force reload
        </button>
      </div>
    </div>
  );
}

export default App;
