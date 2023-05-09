import React from "react";
import { useState } from "react";
import "./Custom.css";

// let newDate = new Date();
// const date = newDate.getDate();
// const month = newDate.getMonth()+1;
// const year = newDate.getFullYear();

const DateTimeHooks = () => {
    let newDate = new Date();
    const times = newDate.toLocaleTimeString();
    const [time, setCount] = useState(times);
    
    const Gettime = () => {
        let newDate = new Date();
        const updatetimes = newDate.toLocaleTimeString();
          setCount(updatetimes);
      }

    return (
        <>
    <div className="container">
    <div className="myclass">
    <h1 className="number">{time}</h1>
    <button onClick={Gettime}> Get Time </button>
    {/* <h2>  {` Date is ${newDate.toLocaleDateString()} . Time is ${newDate.toLocaleTimeString()} . Year is ${year}`} </h2> */}
    </div>
    </div>
    </>
    );
}


export default DateTimeHooks;