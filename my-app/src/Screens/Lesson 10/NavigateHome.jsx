
import { Route, Routes } from "react-router-dom";
import CountNumber from "../Lesson 4/CountNumber";
import TrafficLight from "../Lesson 5/TrafficLight";
import Lesson9 from "../Lesson 9/Lesson 9";
import Home from "./Home";
import NotFound from "./NotFound";

const NavigateHome = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countNumber" element={<CountNumber />} />
      <Route path="/trafficLight" element={<TrafficLight />} />
      <Route path="/lesson9" element={<Lesson9 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavigateHome;
