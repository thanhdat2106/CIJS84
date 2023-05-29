import TrafficLightLogic from "./TrafficLightLogic";

const TrafficLight = () => {
  const { number, changeLight } = TrafficLightLogic();
  return (
    <div id="container">
      <div>
        <button
          className="btn-round"
          style={{
            backgroundColor: number == 1 ? "yellow" : "white",
          }}
        ></button>
        <button
          className="btn-round"
          style={{
            backgroundColor: number == 2 ? "red" : "white",
          }}
        ></button>
        <button
          className="btn-round"
          style={{
            backgroundColor: number == 3 ? "green" : "white",
          }}
        ></button>
      </div>
      <button className="btn-rec" type="button" onClick={() => changeLight()}>
        Next
      </button>
    </div>
  );
};

export default TrafficLight;
