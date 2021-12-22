import React from "react";
import CustomHooks from "./CustomHooks";

const FetchCustomHook = () => {
  const [data, error] = CustomHooks(
    "https://jsonplaceholder.typicode.com/todos"
  ); //array of object named data[{}]
  console.log("todos Array", data);
  return (
    <div>
      <p style={{ color: "red" }}>Error is {error}</p>
      {data.map((todo) => {
        return <p>{todo.id}</p>;
      })}
      {/* {data && data.map((item)=> { 
          return (<li key={item.id}>{item.id}</li>)
        }

    } */}
    </div>
  );
};

export default FetchCustomHook;
