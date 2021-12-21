import React, { useContext } from "react";
import { UserContext } from "../App";

const Component4 = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <p style={{ color: "Red" }}>My name is {name}</p>
    </div>
  );
};

export default Component4;
