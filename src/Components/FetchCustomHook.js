import React from "react";
import CustomHooks from "./CustomHooks";

const FetchCustomHook = () => {
  const [data, error] = CustomHooks(
    "https://jsonplaceholder.typicode.com/todos"
  ); //array of object named data[{}]
  console.log("todos Array", data);
  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>Error is {error}</p>
      ) : (
        data.map((todo) => {
          return <p key={todo.id}>{todo.id}</p>;
        })
      )}
    </div>
  );
};

export default FetchCustomHook;
