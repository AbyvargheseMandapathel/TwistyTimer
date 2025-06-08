import { useState, useEffect } from "react";
import { generateScramble } from "../utils/scrambleGenerator";

export default function ScrambleDisplay({ onNewScramble }) {
  const [scramble, setScramble] = useState("");

  useEffect(() => {
    setScramble(generateScramble());
  }, []);

  const handleNewScramble = () => {
    const newScramble = generateScramble();
    setScramble(newScramble);
    onNewScramble?.(newScramble);
  };

  return (
    <div className="text-center my-4">
      <p className="text-xl font-mono">{scramble}</p>
      <button
        onClick={handleNewScramble}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        New Scramble
      </button>
    </div>
  );
}