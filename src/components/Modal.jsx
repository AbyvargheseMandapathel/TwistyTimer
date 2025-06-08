// src/components/Modal.jsx
import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
    >
      <div
        className="relative bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <div className="w-full h-[400px]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;