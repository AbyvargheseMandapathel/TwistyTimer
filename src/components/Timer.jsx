import React, { useState, useEffect } from "react";

const Timer = ({ initialDuration = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onTimerComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resumeTimer = () => {
    setIsPaused(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(initialDuration);
  };

  const onTimerComplete = () => {
    // Optional callback when timer reaches zero
    console.log("Timer completed!");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold mb-4">Countdown Timer</h2>
      <div className="text-5xl font-mono text-white bg-gray-800 px-6 py-4 rounded-lg shadow-md">
        {formatTime(timeLeft)}
      </div>

      <div className="mt-6 flex gap-3">
        {!isActive ? (
          <button
            onClick={startTimer}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
          >
            Start
          </button>
        ) : isPaused ? (
          <button
            onClick={resumeTimer}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Resume
          </button>
        ) : (
          <button
            onClick={pauseTimer}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
          >
            Pause
          </button>
        )}

        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          disabled={!isActive}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;