import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}
