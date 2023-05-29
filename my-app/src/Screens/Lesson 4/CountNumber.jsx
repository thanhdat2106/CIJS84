import CountNumberLogic from "./CountNumberLogic";

const CountNumber = () => {
  const { number, increase, decrease } = CountNumberLogic();
  return (
    <div id="Container">
      <label>{number}</label>
      <div>
        <button
          className="btn btn-default"
          type="button"
          onClick={() => increase()}
        >
          +
        </button>
        <button
          className="btn btn-default"
          type="button"
          onClick={() => decrease()}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CountNumber;
