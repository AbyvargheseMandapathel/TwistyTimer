import { useState } from "react";
import Timer from "./components/Timer";
import ScrambleDisplay from "./components/ScrambleDisplay";
import SolveHistory from "./components/SolveHistory";
import CubeVisualization from "./components/CubeVisualization";
import OLLPLLTrainer from "./components/OLLPLLTrainer";

function App() {
  const [solves, setSolves] = useState([]);
  const [scramble, setScramble] = useState("");
  const [mode, setMode] = useState("timer"); // 'timer' or 'oll_pll'

  // Function to handle new scramble generation
  const handleNewScramble = (newScramble) => {
    setScramble(newScramble);
  };

  const handleSolve = (time) => {
    setSolves([...solves, time]);
  };

  const handleDelete = (index) => {
    const newSolves = [...solves];
    newSolves.splice(index, 1);
    setSolves(newSolves);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-2 sm:p-4 md:p-8">
      <div className="flex flex-col flex-grow w-full max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          CSTimer Clone
        </h1>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setMode("timer")}
            className={`px-4 py-2 text-base rounded-md ${
              mode === "timer"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Timer
          </button>
          <button
            onClick={() => setMode("oll_pll")}
            className={`px-4 py-2 text-base rounded-md ${
              mode === "oll_pll"
                ? "bg-purple-500 text-white"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            Train OLL/PLL
          </button>
        </div>

        <div className="flex flex-col flex-grow overflow-hidden">
          {mode === "timer" && (
            <>
              <ScrambleDisplay onNewScramble={handleNewScramble} />

              {/* Make cube visualization flex-grow to fill */}
              <div className="flex-grow my-4 min-h-[320px] sm:min-h-[400px] w-full">
                <CubeVisualization scramble={scramble} />
              </div>

              <Timer onSolve={handleSolve} />

              <SolveHistory solves={solves} onDelete={handleDelete} />
            </>
          )}

          {mode === "oll_pll" && <OLLPLLTrainer />}
        </div>
      </div>
    </div>
  );
}

export default App;