import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallBack = () => {
  const [count, setCount] = useState(2);
  const [todoList, setTodoList] = useState(["Old task"]);

  const inc = () => {
    setCount((count) => count + 2);
  };

  const AddTodo = useCallback(() => {
    setTodoList((t) => [...t, "New Todo"]);
  }, [todoList]);

  return (
    <div>
      <h2>Use Call back Todo</h2>
      <p>Count Value{count} </p>
      <button onClick={inc}>+</button>

      <Todos add={AddTodo} todoList={todoList} />
    </div>
  );
};

export default UseCallBack;
