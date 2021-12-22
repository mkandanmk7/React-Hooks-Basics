import React, { useMemo, useState } from "react";
import ReactMemo from "./ReactMemo";

const UseMemo = () => {
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);
  const [name, setName] = useState("");

  return (
    <div>
      <p>
        Factorial of {counter} is : <span>{result}</span>
      </p>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
      <hr />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter Your name"
      />
      <hr />
      <ReactMemo name={name} />
    </div>
  );
};

const factorial = (n) => {
  let i = 0;
  while (i < 100000000) i++;
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1); //recursion;
};
export default UseMemo;
