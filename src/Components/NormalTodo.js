import React, { useState } from "react";
import Todos from "./Todos";

const NormalTodo = () => {
  const [count, setCount] = useState(0);
  //   console.log("count value", count);
  const [todos, setTodos] = useState([]);

  const inc = () => {
    setCount((count) => count + 1);
  };

  //it will recreated while changing count value. (referential equality)
  const addTodo = () => {
    setTodos((list) => [...list, "new Task"]);
  };
  return (
    <div>
      <h2>Normal Todo </h2>
      <p>Count Value {count}</p>
      <button onClick={inc}>+</button>
      <hr />
      <Todos todoList={todos} add={addTodo} />
    </div>
  );
};

export default NormalTodo;
