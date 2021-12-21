import React from "react";
import Component4 from "./Component4";
import NormalMemo from "./NormalMemo";
import UseCallBack from "./UseCallBack";

const Component3 = () => {
  return (
    <div>
      <h1>Component3</h1>
      <Component4 />
      <UseCallBack />
      <hr />
      <NormalMemo />
    </div>
  );
};

export default Component3;
