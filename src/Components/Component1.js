import React, { useEffect, useRef, useState } from "react";
import Fetch from "./Fetch";
import FetchCustomHook from "./FetchCustomHook";

const Component1 = () => {
  const [name, setName] = useState("Muthu");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = name;
  }, [name]);
  console.log(name);
  return (
    <div>
      <h2>component 1</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Current Value is {name}</p>
      <p>Previous Value is {prevValue.current}</p>
      <hr />
      {/* <Fetch /> */}
      <FetchCustomHook />
    </div>
  );
};

export default Component1;
