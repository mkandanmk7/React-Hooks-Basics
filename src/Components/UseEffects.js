import React, { useEffect, useState } from "react";

const UseEffects = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  const [messgae, setMessage] = useState("Component Updated");

  useEffect(() => {
    console.log("Component Updated");
  }, [time]);
  return (
    <div>
      <p>Time : {time}</p>
      <button onClick={() => setTime(new Date().toLocaleString())}>
        Change Time
      </button>
    </div>
  );
};

export default UseEffects;
