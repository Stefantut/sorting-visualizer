import { useState, useEffect } from "react";
import "./sorting-visualizer.css";

import { randomIntFromInterval } from "./helpers";
import {
  ARRAY_BARS,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  ANIMATION_SPEED,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
} from "./variables";

import { getMergeSortAnimations } from "./sortingAlgorithms";

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

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 !== 0 ? PRIMARY_COLOR : SECONDARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  };

  return (
    <>
      <header className="header">
        <h1>Sorting Visualizer</h1>
        <button onClick={() => generateNewArray()} className="generate-btn">
          Generate New Array
        </button>
        <button onClick={() => mergeSort()} className="merge-btn">
          Merge Sort
        </button>
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
          />
        ))}
      </main>
    </>
  );
};

export default SortingVisualizer;
