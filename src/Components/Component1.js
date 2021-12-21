import React, { useEffect, useRef, useState } from "react";

const Component1 = () => {
  const [name, setName] = useState("Muthu");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = name;
  }, [name]);
  console.log(name);
  return (
    <div>
      component 1
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Current Value is {name}</p>
      <p>Previous Value is {prevValue.current}</p>
    </div>
  );
};

export default Component1;
