import React, { useContext } from "react";
import { UserContext } from "../App";
import Sample from "./Sample";

const LastComponent = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <p>Context Global Value is {name}</p>
      <h2>Sample Components</h2>
      <Sample />
    </div>
  );
};

export default LastComponent;
