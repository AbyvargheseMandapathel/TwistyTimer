export default function SolveHistory({ solves, onDelete }) {
    const calculateAverage = (arr, count) => {
      if (arr.length < count) return "--";
      const recent = arr.slice(-count).map(parseFloat);
      const avg = recent.reduce((a, b) => a + b, 0) / count;
      return avg.toFixed(2);
    };
  
    return (
      <div className="my-4">
        <h2 className="text-lg font-bold">Solve History</h2>
        <ul className="list-disc pl-5 max-h-60 overflow-y-auto">
          {solves.map((solve, index) => (
            <li key={index} className="flex justify-between">
              <span>{solve}</span>
              <button
                onClick={() => onDelete(index)}
                className="text-red-500 ml-2"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
  
        <div className="mt-2 text-sm">
          <p>Ao5: {calculateAverage(solves, 5)}</p>
          <p>Ao12: {calculateAverage(solves, 12)}</p>
        </div>
  
        <div className="flex justify-between mt-4">
          <button
            onClick={() => alert("Exporting not implemented yet")}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Export Times
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear all solves?")) {
                onDelete(null); // Clear all solves
              }
            }}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Clear All
          </button>
        </div>
      </div>
    );
  }