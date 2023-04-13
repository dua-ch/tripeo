import Image from "next/dist/client/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Typical from "react-typical";
import { Typewriter } from 'react-simple-typewriter';

const firstSetIcons = [
  {
    link: "/icons/hotel.png",
    title: "PHYSICAL NFT HOTEL & HOSTEL",
  },
  {
    link: "/icons/pay.png",
    title: "CRYPTO BOOKING PLATFORM",
  },
  {
    link: "/icons/hotel.png",
    title: "NFTS AS MEMBERSHIP DAO ACCESS",
  },
];

const Hero = () => {
  return (

    <>

     <div className="cta-section banner" >
      <div className="container">
          <h2 className="big-2 w-900">Explore the world like never before with Tripeo's AI travel assistant!</h2>
      </div>
    </div>

    <div className="zigzag-wrap">
      <div className="container">
          <div className="col-img">
                  <Image
                    src="/images/illustrationfemale.jpg"
                    alt="laptop palverse"
                    width={550}
                    height={370}
                  />
          </div>
          <div className="col-content">
                <h2 className="big-3"><span className="text-[#000]">Plan, book, and travel with ease for a smooth journey.</span></h2>
                <p className="lead-1">Join Gen Y/Z travelers for personalized destination recommendations based on your search preferences.</p> 
          </div>
      </div>
    </div>

    <div className="zigzag-wrap zig-reverse bot-space">
      <div className="container">

          <div className="col-content">
                <h2 className="big-3">Discovery & Inspiration search</h2>
                <p className="lead-1">Our AI-powered inspiration categories, such as Cultural Experiences, Solo Female Travel, and Adventure Seekers, outshine traditional location searches and redefine travel discovery.
                <span>Dive into an extraordinary adventure and find your dream holiday with us!</span>
                </p> 
          </div>
          <div className="col-img">
                  <Image
                    src="/images/discovery.png"
                    alt="laptop palverse"
                    width={550}
                    height={370}
                  />
          </div>
      </div>
    </div>

    <div className="cta-section how-work-sect">
      <div className="container">
          <h2 className="big-1 green-hd">How it works</h2>
          <h3>Spelling Correction</h3>
          <div className="cta-img">
                  <Image
                    src="/images/illustrationmen.jpg"
                    alt="laptop palverse"
                    width={1200}
                    height={500}
                  />
          </div>
      </div>
    </div>



    <div className="cta-section finding-offer">
      <div className="container">
          <h2 className="big-2">Finding offers</h2>
          <div className="cta-img">
                  <Image
                    src="/images/findingoffers.jpg"
                    alt="laptop palverse"
                   layout="fill"
                  />
          </div>
      </div>
    </div>
   
    <section className="w-full flex flex-col items-center bg-dark_bg text-white px-5 pt-5 pb-16 font-exo white-bg">
      <div className="hidden md:block">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] py-4 font-bold  text-[#ECF7FD] colored-hd change-text">
            Book
            <Typewriter
            className='text'
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> - Pay With Web3 Wallet
          </strong>

          <div className="flex flex-col justify-end items-center py-4 md:py-0">
            <div className=" mt-16 pc">
              <Image
                src="/images/laptop.png"
                alt="laptop palverse"
                width={1000}
                height={500}
              />
            </div>
            <h5 className="text-[26px] font-bold text-center pt-6  text-[#ECF7FD] colored-hd">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h5>
          </div>

        </div>

        <div className="w-screen overflow-x-auto flex flex-col items-center justify-center mt-5 ">
          <h2 className=" text-center pt-10 md:w-9/12 colored-hd big-3 ">
            We help properties access new <br /> Web3 customers  & communities
          </h2>
          <p className="md:text-[22px] pt-3 pb-8 text-[22px] text-center  font-semibold md:w-9/12 text-[#000] lead-2 ">
            We make it easy to onboard properties into web3
          </p>
        </div>
      

        <div className="flex flex-col items-center justify-center pb-10 mt-5  space-y-10 md:space-y-0">
          
          <div className="flex justify-center items-center">
            <Link href="/first-location">
              <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
                Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden overflow-hidden">
        <div className=" flex flex-col items-center">
          <strong className="md:text-[46px] text-[28px] text-center font-bold  text-[#ECF7FD] colored-hd change-text">
            Book
            <Typewriter
              words={[' Hotels', ' Hostels', ' Resorts']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            /> <br /> Pay With Web3 Wallet
          </strong>
          <div className=" mt-5 mobile-pc">
            <Image
              src="/images/laptop.png"
              alt="laptop palverse"
              width={1000}
              height={600}
            />
          </div>
          <div className="bg-[#ECF7FD] text-black py-2 w-screen my-2">
            <h1 className="text-[26px] font-bold text-center colored-hd">
              BETA VERSION IS <span className="text-green_text" >LIVE</span>
            </h1>
          </div>
 

          <div className="w-screen overflow-x-auto flex flex-col items-center justify-center mt-5 ">
            <h2 className="md:text-[40px]  text-[20px] text-center  font-bold md:w-9/12 text-[#ECF7FD]  colored-hd big-3 pl-5 pr-5">
              We help properties access new <br /> Web3 customers  & communities
            </h2>
            <p className="md:text-[22px] pt-3 pb-8 px-6 text-center  font-semibold md:w-9/12 text-[#000] lead-2 ">
              We make it easy to onboard properties into web3
            </p>
          </div>
      

        </div>
       
        <div className="flex justify-center items-center">
          <Link href="/first-location">
            <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  ">
              Learn More <HiArrowNarrowRight className="text-2xl ml-2 " />
            </button>
          </Link>
        </div>
       
      </div>
    </section>


    </>
  );
};

export default Hero;
