import { useState, useEffect } from "react";
import "./sorting-visualizer.css";

import { randomIntFromInterval } from "./helpers";
import { ARRAY_BARS } from "./variables";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateNewArray = () => {
    const array = [];
    for (let i = 0; i < ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(3, 999));
    }
    setArray(array);
  };

  useEffect(() => {
    // generates random array on load
    generateNewArray();
  }, []);

  console.log(array);

  return (
    <div className="content">
      <h1>Sorting Visualizer</h1>
      <button onClick={() => generateNewArray()}>Generate New Array</button>
    </div>
  );
};

export default SortingVisualizer;
