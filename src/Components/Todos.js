import React from "react";

const Todos = ({ add, todoList }) => {
  console.log("child render");
  console.log("todoList", todoList);
  return (
    <div>
      <hr />
      <h4>Todos Component</h4>
      {todoList.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
      <button onClick={add}>Add Todo</button>
    </div>
  );
};

export default Todos;
