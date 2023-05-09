import { useState } from "react";
import "./Custom.css";

 const Hooks = () => {
    const [count, setCount] = useState(0);
    const IncNum = () => {
          setCount(count + 1);
      }
       const DecNum = () => {
                setCount(count - 1);
            }
            const ResetNum = () => {
                setCount(0);
            }

    return (
        <>
    <div className="container">
    <div className="myclass">
    <h1 className="number">{count}</h1>
    <button onClick={IncNum}> Increment </button>
    <button onClick={DecNum}> Decrement </button>
    <button onClick={ResetNum}> Reset </button>
    </div>
    </div>
    </>
    );
}
  
export default Hooks;

