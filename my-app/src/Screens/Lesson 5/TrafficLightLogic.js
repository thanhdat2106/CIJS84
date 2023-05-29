import { useState } from "react";

const TrafficLightLogic = () => {
  const [number, setNumber] = useState(1);
  const changeLight = () => {
    setNumber(number == 3 ? 1 : number + 1);
  };
  return { number, changeLight };
};

export default TrafficLightLogic;
