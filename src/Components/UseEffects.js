import React, { useEffect, useState } from "react";

const UseEffects = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  const [message, setMessage] = useState("Component Updated");

  useEffect(() => {
    console.log("Component Updated");
    const interval = setInterval(
      () => setTime(new Date().toLocaleString()),
      1000
    );

    //component willunmount() lifecycle
    // return () => {
    //   console.log("Clean up the interval");
    //   clearInterval(interval);
    // };
  }, [time, message]);

  const ShowDate = () => {
    setTime(new Date().toLocaleString());
  };

  return (
    <div>
      <p>Time : {time}</p>
      <button onClick={ShowDate}>Change Time</button>
      <h3>Message is {message}</h3>
      <button onClick={() => setMessage(Date.now().toFixed(3))}>Update</button>
    </div>
  );
};

export default UseEffects;
