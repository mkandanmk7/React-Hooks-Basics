import React from "react";
import CustomHooks from "./CustomHooks";

const Comp5 = () => {
  const [data] = CustomHooks("https://jsonplaceholder.typicode.com/users");
  console.log("user details", data);
  return <div></div>;
};

export default Comp5;
