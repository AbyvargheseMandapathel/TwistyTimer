// src/components/Timer.jsx
import { useState, useEffect } from "react";

const Timer = ({ onSolve }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime(performance.now() - startTime);
      }, 10);
    } else if (!running && time !== 0) {
      clearInterval(interval);
      onSolve(formatTime(time));
      setTimeout(() => {
        setTime(0);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, startTime]);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const hundredths = Math.floor((ms % 1000) / 10);
    return `${seconds}.${hundredths.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="text-6xl font-mono text-center my-8">
        {formatTime(time)}
      </div>

      {/* Spacebar Control Indicators */}
      <div className="text-center">
        {running ? (
          <p className="text-xl">Timer Running</p>
        ) : (
          <p className="text-xl">Press Spacebar to Start</p>
        )}
      </div>
    </div>
  );
};

export default Timer;