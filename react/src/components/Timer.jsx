import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    // Start a timer when the component mounts
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("timer cleaqred");
    };
  }, [isRunning]);
  return (
    <div>
      <div onClick={()=>setIsRunning(true)}>start</div>
      <h1>{time}</h1>
      <div onClick={()=>setIsRunning(false)}>Stop</div>
      <div onClick={()=>setTime(0)}>reset</div>
    </div>
  );
};

export default Timer;
