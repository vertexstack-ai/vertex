import React, { useState } from 'react';


const GradientButton = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });


  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - buttonRect.left) / buttonRect.width) * 100; // Percentage relative to button width
    const y = ((event.clientY - buttonRect.top) / buttonRect.height) * 100; // Percentage relative to button height
    setGradientPosition({ x, y });
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };




    return (
      <div
        className="relative inline-flex items-center group overflow-hidden rounded-full"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {/* Flame Gradient Layer */}
        <div
          className="absolute inset-0 rounded-full transition-transform duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100"
          style={{
            background: `conic-gradient(from 180deg, #FF4500, #FF6347, #FFD700, #FF4500)`,
            mask: 'radial-gradient(circle, transparent 70%, black 75%)',
            WebkitMask: 'radial-gradient(circle, transparent 70%, black 75%)',
          }}
        ></div>
  
        {/* White Background Layer */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with 80% opacity
          }}
        ></div>
  
        {/* Outer Radial Gradient */}
        <div
          className="absolute inset-0 rounded-full transition-transform duration-300"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #FFFFF5 3.5%, #FFAA81 26.5%, #FFDA9F 37.5%, rgba(255,170,129,0.50) 49%, rgba(210,106,58,0.00) 92.5%)`,
          }}
        ></div>
  
        {/* Liquid Blur Layer */}
        <div
          className="absolute inset-0 rounded-full bg-transparent mix-blend-overlay"
          style={{
            backdropFilter: 'blur(10px)', // for Safari
            WebkitBackdropFilter: 'blur(10px)', // for other browsers
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        ></div>
  
        {/* Button */}
        <a
          href="/signup"
          className="relative z-10 uppercase font-bold flex items-center justify-center h-10 px-16 text-12 text-black -tracking-[0.015em] rounded-full border bg-transparent space-x-1 sm:pl-[59px] sm:pr-[52px]"
        >
          <span className="text-[#1C2817]">Try it Free</span>
          {/* SVG Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-[9px] w-[17px] text-[#5A250A]">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    );
  };


export default GradientButton;
