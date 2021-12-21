import React, { useContext } from "react";
import { UserContext } from "../App";

const Sample = () => {
  const name = useContext(UserContext);
  return (
    <div>
      <p>The name is {name}</p>
    </div>
  );
};

export default Sample;
