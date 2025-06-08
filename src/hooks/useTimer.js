import { useState, useEffect } from "react";

export const useTimer = () => {
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
    }
    return () => clearInterval(interval);
  }, [running, startTime]);

  const startTimer = () => {
    setStartTime(performance.now());
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const hundredths = Math.floor((ms % 1000) / 10);
    return `${seconds}.${hundredths.toString().padStart(2, "0")}`;
  };

  return {
    time,
    running,
    startTimer,
    stopTimer,
    resetTimer,
    formattedTime: formatTime(time),
  };
};