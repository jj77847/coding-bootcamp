import { useEffect, useState } from "react";

export const Thermostat = () => {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    document.title = `Temperature: ${temp}`;
  }, [temp]);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button type="button" className="btn btn-danger" onClick={increaseTemp}>
          Raise temperature
        </button>{" "}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseTemp}
        >
          Lower temperature
        </button>
      </div>
    </div>
  );
};
