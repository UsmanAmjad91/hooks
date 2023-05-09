import React from "react";
import { useState } from "react";
import "./Custom.css";

const LiveTime = () => {

    let newDate = new Date();
    const times = newDate.toLocaleTimeString();
    const [time, setCount] = useState(times);

    const Livetime = () => {
        let newDate = new Date();
        const updatetimes = newDate.toLocaleTimeString();
          setCount(updatetimes);
      }
      setInterval(Livetime, 500);
  return (
    <>
      <div className="container">
        <div className="myclass">
          <h1 className="number">{times}</h1>
          <div>
          {/* <button  onClick={Livetime}> Get Live Time </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveTime;
