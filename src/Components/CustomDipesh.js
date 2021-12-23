import { useState } from "react";

export const CustomDipesh = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };
  return [value, increment, decrement];
};
