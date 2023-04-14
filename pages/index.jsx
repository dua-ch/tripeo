import { useState, useEffect } from "react";
import Hero from "../components/Page/Home/Hero";
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from "next/link";

const Homepage = () => {
  const [mobilescreen, setmobilescreen] = useState(null);

  useEffect(() => {
    setmobilescreen(window.screen.width);
  }, [mobilescreen]);
  return <>
    <div className="relative">

      {
        mobilescreen < 768 ? (
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
          </>
         
          ) : (
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
               <h2 className="big-2 w-900 text-[#fff]">AI Travel Assistant!</h2>
            </div>
            </>
         
        )
      }
    </div>

    <Hero />
  </>
}

export default Homepage;
