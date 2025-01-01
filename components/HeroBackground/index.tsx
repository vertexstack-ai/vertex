import React from "react";

const HeroBackground: React.FC = () => {
  const folders = ["vc_1", "vc_2", "vc_3"];

  const columns = [
    { folder: folders[0], animation: "animate-scrollUp1" },
    { folder: folders[1], animation: "animate-scrollDown2" },
    { folder: folders[2], animation: "animate-scrollUp3" },
  ];

  return (
    <div
      className="absolute top-0 left-[10%] w-[85%] flex flex-row justify-start gap-[6px] rotate-[15deg]"
    >
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          className={`relative flex flex-col gap-[6px] overflow-hidden ${col.animation}`}
        >
          {[...Array(15)].map((_, slideIndex) => (
            <div key={slideIndex} className="hero-bg_wrap_slide">
              <picture>
                <source
                  srcSet={`/images/${col.folder}/${slideIndex + 1}.webp`}
                  type="image/webp"
                />
                <img
                  src={`/images/${col.folder}/${slideIndex + 1}.webp`}
                  alt={`Slide ${slideIndex + 1}`}
                  width={500}
                  height={281}
                  className="img-cover rounded-lg"
                  decoding="async"
                  loading={slideIndex > 0 ? "lazy" : "eager"}
                />
              </picture>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HeroBackground;
