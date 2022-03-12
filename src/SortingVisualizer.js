import { useState, useEffect } from "react";
import "./sorting-visualizer.css";

import { randomIntFromInterval } from "./helpers";
import {
  ARRAY_BARS,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  PRIMARY_COLOR,
} from "./variables";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateNewArray = () => {
    const array = [];
    for (let i = 0; i < ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER));
    }
    setArray(array);
  };

  useEffect(() => {
    // generates random array on load
    generateNewArray();
  }, []);

  return (
    <>
      <header className="header">
        <h1>Sorting Visualizer</h1>
        <button onClick={() => generateNewArray()}>Generate New Array</button>
      </header>
      <main className="array-container" style={{ height: MAX_RANDOM_NUMBER }}>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </main>
    </>
  );
};

export default SortingVisualizer;
