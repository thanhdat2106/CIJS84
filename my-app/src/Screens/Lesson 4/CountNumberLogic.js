import { useState } from "react";

const CountNumberLogic = () => {
  const [number, setNumber] = useState(0);
  const increase = () => {
    let x = number;
    x++;
    setNumber(x);
  };
  const decrease = () => {
    let x = number;
    x--;
    setNumber(x);
  };
  return {
    number,
    increase,
    decrease,
  };
};

export default CountNumberLogic;
