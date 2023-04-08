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
          <video
            loop
            autoPlay
            src="/videos/web3_mobile_1.mp4"
            muted
            playsInline
            preload='true'
            className="md:h-[90vh] object-cover  w-full "
            onContextMenu={false}
          />) : (
          <video
            loop
            autoPlay
            src="/videos/web3_desktop.mp4"
            muted
            onContextMenu={false}
            className="md:h-[90vh] object-cover  w-full "
          />
        )
      }



      {/* <Link href="/who-we-are">
        <div className="absolute z-20 top-[48%] md:top-[38%] translate-y-1/2   md:left-10 left-5 flex items-center cursor-pointer hover:pl-5 transition-all" >
          <HiArrowNarrowRight className="md:text-3xl text-lg  text-white   " />
          <p className="text-white font-exo font-bold text-base md:text-[25px] md:tracking-wider pl-4">Discover Our Story</p>
        </div>
      </Link> */}
    </div>

    <Hero />
  </>
}

export default Homepage;
