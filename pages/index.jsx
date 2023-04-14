import { useState, useEffect } from "react";
import Hero from "../components/Page/Home/Hero";
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from "next/link";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const listener = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);

  
  
    
    if (isMobile)  {
     return(
      <>
        <div className="hero-video">
            <video
            loop
            autoPlay
            src="/videos/V1.mobile.mp4"
            muted
            playsInline
            preload='true'
            className="md:h-[90vh] object-cover  w-full "
            onContextMenu={false}
            />
        </div>
        <Hero />
      </>
     ) ;
  } else {
    return(
      <>
      <div className="hero-video">
          <video
          loop
          autoPlay
          src="/videos/V1.desktop.mp4"
          muted
          onContextMenu={false}
          className="md:h-[90vh] object-cover  w-full "
          />
          <h2 className="big-2 w-900 text-[#fff]">AI Travel Assistant</h2>
      </div>
      <Hero />
      </>
    )
  }
}

 

    
    
    


  



export default Homepage;
