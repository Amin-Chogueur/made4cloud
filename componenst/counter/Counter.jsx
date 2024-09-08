"use client";

// components/NumberCounter.js
import { useEffect, useState } from "react";

function NumberCounter({ num }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < num) {
          return prevNumber + 1;
        } else {
          clearInterval(intervalId);
          return prevNumber;
        }
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{currentNumber}</div>;
}

export default NumberCounter;
