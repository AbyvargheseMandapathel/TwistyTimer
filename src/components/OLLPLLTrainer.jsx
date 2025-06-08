// src/components/OLLPLLTrainer.jsx
import { useState } from "react";

const OLL_CASES = [
  "F R U R' U' F'",
  "f R U R' U' f'",
  "R U R' U' R' F R2 U R' U' F'",
  "r U R' U R U2 r'",
];

const PLL_CASES = [
  "R U R' U' R' F R2 U' R' U' R U R' F'",
  "R' U L' U2 R U' R' U2 R L",
  "F R U' R' U' R U R' F' R U R' U' R' F R F'",
];

export default function OLLPLLTrainer() {
  const [type, setType] = useState("oll");
  const [algorithm, setAlgorithm] = useState("");

  const generateCase = () => {
    const cases = type === "oll" ? OLL_CASES : PLL_CASES;
    const random = cases[Math.floor(Math.random() * cases.length)];
    setAlgorithm(random);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        {type.toUpperCase()} Trainer
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setType("oll")}
          className={`px-4 py-2 rounded-md ${
            type === "oll"
              ? "bg-yellow-500 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          OLL
        </button>
        <button
          onClick={() => setType("pll")}
          className={`px-4 py-2 rounded-md ${
            type === "pll"
              ? "bg-green-500 text-black"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          PLL
        </button>
      </div>

      <div className="mb-4 text-center">
        <p className="text-xl font-mono">{algorithm || "Click below to start!"}</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={generateCase}
          className="px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Show New Case
        </button>
      </div>
    </div>
  );
}