import React, { useReducer } from "react";
const initialState = 0;
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addcount":
      return state + 1;

    case "deccount":
      return state - 1;

    default:
      return state;
  }
};

const UseReducerHooks = () => {
  //   const [counter, setCounter] = useState(0);
  //state used for get state value from reducer function;
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  console.log(state);

  // counter example
  return (
    <div>
      <h2>Counter Value is {state}</h2>
      <button onClick={() => dispatch({ type: "addcount" })}>Inc</button>
      <button onClick={() => dispatch({ type: "deccount" })}>Dec</button>
    </div>
  );
};

export default UseReducerHooks;
