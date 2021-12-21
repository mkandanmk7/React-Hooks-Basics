import React, { useContext, useReducer } from "react";
import { UserContext } from "../App";
import Sample from "./Sample";

const LastComponent = () => {
  const initialState = [
    {
      id: 1,
      task: "React Hooks",
      complete: false,
    },
    {
      id: 2,
      task: "custom Hooks",
      complete: true,
    },
  ];

  //two params state,action
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "Completed": {
        return state.map((todo) => {
          console.log("todo:", todo);
          console.log("action id", action.id);
          if (todo.id === action.id)
            return { ...todo, complete: !todo.complete };
          else return todo;
        });
      }

      default:
        return state;
    }
  };
  const handleComplete = (todo) => {
    console.log("handle :", todo);
    dispatch({ type: "Completed", id: todo.id });
  };
  const name = useContext(UserContext);
  const [check, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Context Global Value is {name}</p>

      <h2>Sample Components</h2>
      {check.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => handleComplete(todo)}
          />{" "}
          {todo.task}
        </div>
      ))}

      <Sample />
    </div>
  );
};

export default LastComponent;
