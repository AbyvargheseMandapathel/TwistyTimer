import React, { useEffect, useRef } from "react";

const CubeVisualization = ({ scramble }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && scramble) {
      playerRef.current.alg = scramble;
      // Optionally reset or play:
      // playerRef.current.reset();
      // playerRef.current.play();
    }
  }, [scramble]);

  return (
    <div className="w-full h-[300px] sm:h-[400px] flex justify-center items-center">
      <twisty-player
        ref={playerRef}
        puzzle="3x3x3"
        style={{ width: "300px", height: "300px" }}
        control-panel="none"
        background="none"
      />
    </div>
  );
};

export default CubeVisualization;
