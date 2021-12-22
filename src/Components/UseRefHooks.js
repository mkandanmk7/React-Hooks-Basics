import React, { useEffect, useRef, useState } from "react";

const UseRefHooks = () => {
  const [name, setName] = useState("Muthu");

  const [counter, setCounter] = useState(0);

  const inputEl = useRef("");

  const showName = () => {
    // e.preventDefault();
    setName("");
    console.log(inputEl.current.value);
  };

  useEffect(() => {
    inputEl.current = counter;
  }, [counter]);
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={showName}>Reset Name</button>

      <h3>My name is {name}</h3>

      <p>Counter value is {counter}</p>
      <button onClick={() => setCounter(Math.ceil(Math.random() * 100))}>
        Random Number
      </button>

      {typeof inputEl.current !== "undefined" ? (
        <p>Counter's previous Value is {inputEl.current}</p>
      ) : (
        <p>Value is undefined</p>
      )}

      {/* <p>Previous name is {prevValue.current.value}</p> */}
    </div>
  );
};

export default UseRefHooks;
