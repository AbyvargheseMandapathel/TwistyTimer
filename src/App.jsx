import { useState } from "react";
import Timer from "./components/Timer";
import ScrambleDisplay from "./components/ScrambleDisplay";
import SolveHistory from "./components/SolveHistory";
import CubeVisualization from "./components/CubeVisualization"; // Use CubeVisualization instead of CubeImage
import OLLPLLTrainer from "./components/OLLPLLTrainer"; // Added missing import
import Modal from "./components/Modal"; // New modal component

function App() {
  const [solves, setSolves] = useState([]);
  const [scramble, setScramble] = useState("");
  const [mode, setMode] = useState("timer"); // 'timer' or 'oll_pll'
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSolve = (time) => {
    setSolves([...solves, time]);
  };

  const handleDelete = (index) => {
    const newSolves = [...solves];
    newSolves.splice(index, 1);
    setSolves(newSolves);
  };

  const handleNewScramble = (newScramble) => {
    setScramble(newScramble);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white p-2 sm:p-4 md:p-8">
      <div className="max-w-md mx-auto w-full flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6 text-center">TwistyCuber</h1>

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

        <div className="w-full overflow-x-hidden">
          {mode === "timer" && (
            <>
              <ScrambleDisplay onNewScramble={handleNewScramble} />

              {/* Cube Visualization in Bottom-Right Corner */}
              <div
                className="fixed bottom-4 right-4 z-10 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <CubeVisualization scramble={scramble} />
              </div>

              {/* Timer Component */}
              <Timer onSolve={handleSolve} />

              {/* Solve History */}
              <SolveHistory solves={solves} onDelete={handleDelete} />
            </>
          )}

          {mode === "oll_pll" && <OLLPLLTrainer />}
        </div>

        {/* Modal for Full-Screen Cube View */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <CubeVisualization scramble={scramble} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;