import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../App";
import Component3 from "./Component3";

const Component2 = () => {
  // const [number, setNumber] = useState(0)
  const number = useRef(0);

  useEffect(() => {
    number.current.focus();
  }, []);
  console.log("number rendered:", number.current);
  console.log("ref", number);
  const contextname = useContext(UserContext);
  console.log(contextname);
  return (
    <div>
      <h2>Component2 , {contextname}</h2>
      <input ref={number} type="number" />
      <Component3 />
    </div>
  );
};

export default Component2;
