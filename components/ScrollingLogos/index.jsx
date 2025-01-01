import React from "react";
import Image from "next/image";

const ScrollingLogos = () => {
  return (
    <div className="flex h-[80px] py-8 flex-wrap w-full overflow-hidden items-center">
      <div className="flex animate-scroll space-x-12">
        {/* Add your company logos here */}
        <Image src="/images/scrooling/grenco_logo-1.png.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/BRU.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/EN.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/mcds.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/MTM.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/nyc.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/PG.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/Sony.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
                  
        
        
        
        {/* Duplicate logos for smooth looping */}
        <Image src="/images/scrooling/grenco_logo-1.png.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/BRU.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/EN.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/mcds.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/MTM.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/nyc.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/PG.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
        <Image src="/images/scrooling/Sony.webp" width={110} height={20} alt="Logo 1" className="h-8 mx-4"  />
      </div>
    </div>
  );
};

export default ScrollingLogos;
