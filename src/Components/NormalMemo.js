import React, { useMemo, useState } from "react";

const NormalMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calc = useMemo(() => expensiveCalc(count), [count]); //passing count value as arg; intially 0

  const addTodo = () => {
    setTodos((todos) => [...todos, "New Todo"]);
  };

  const inc = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h2>Normal Expensive function</h2>
      {todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>

      <h2>Count Value is {count}</h2>
      <button onClick={inc}>+</button>

      <hr />
      <h2>Expensive function value is {calc}</h2>
    </div>
  );
};

const expensiveCalc = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default NormalMemo;
