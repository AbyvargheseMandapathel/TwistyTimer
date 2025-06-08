// src/components/CubeImage.jsx
import React from "react";

const CUBE_IMG_URL = "https://cube20.org/images/cube?moves=";

export default function CubeImage({ scramble }) {
  return (
    <div className="my-6 flex justify-center">
      <img
        src={`${CUBE_IMG_URL}${encodeURIComponent(scramble)}`}
        alt="Cube Scramble"
        className="w-64 h-64 object-contain border border-gray-700 rounded-lg shadow-md"
      />
    </div>
  );
}