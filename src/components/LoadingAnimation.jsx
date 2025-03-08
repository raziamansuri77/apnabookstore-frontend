import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            📚
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Loading Books...
          </h2>
          <div className="mt-2 text-gray-500">
            <span className="inline-block animate-bounce">.</span>
            <span className="inline-block animate-bounce delay-100">.</span>
            <span className="inline-block animate-bounce delay-200">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
