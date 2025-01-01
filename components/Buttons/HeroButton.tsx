import React from "react";
const AnimatedButton = () => {
  return (
    <button className="relative inline-block px-6 sm:px-2 sm:py-4 h-16 bg-black border text-white font-bold text-lg uppercase max-w-[570px] overflow-hidden group">
      <span className="flex text-center items-center justify-center relative z-10 group-hover:text-black duration-300">
        <a className="inline-flex px-2 text-center">
          REQUEST A QUOTE
        </a>
        <svg className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 28 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27.2715 22.0249L0.592198 44.0468L10.5 22.0249L0.0301896 0.70223L27.2715 22.0249Z" fill="" />
        </svg>
      </span>
      {/* Gradient animation (bottom to top) */}
      <span className="absolute inset-0 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd transform translate-y-full group-hover:animate-gradientUp"></span>
      {/* White animation (left to right) */}
      <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:animate-whiteRight z-[1]"></span>
    </button>
  );
};

export default AnimatedButton;