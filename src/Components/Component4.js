import React, { useContext } from "react";
import { UserContext } from "../App";
import NormalTodo from "./NormalTodo";

const Component4 = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <p style={{ color: "Red" }}>My name is {name}</p>
      <NormalTodo />
    </div>
  );
};

export default Component4;
