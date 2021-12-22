import React from "react";

const ReactMemo = React.memo(({ name }) => {
  console.log("Name comp also rendered");
  return (
    <div>
      <p>Name is {name}</p>
    </div>
  );
});

export default ReactMemo;
