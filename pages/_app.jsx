import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { BsTwitter } from 'react-icons/bs';
import Head from "next/head";
import '../styles/globals.css';
import 'animate.css';

const navs = [
  {
    name: 'Home',
    link: '/',
  },

  {
    name: 'Who We Are',
    link: '/who-we-are'
  },

  {
    name: 'what we build',
    link: '/first-location'
  },
]

function MyApp({ Component, pageProps }) {
  const [showDrop, setShowDrop] = useState(false);
  const [mobilNav, setMobilNav] = useState(false);
  console.log(showDrop)
  return (
    <>
      <Head>
        <title>
          PALMVERSE
        </title>
      </Head>
      <Header showDrop={showDrop} setShowDrop={setShowDrop} mobilNav={mobilNav} setMobilNav={setMobilNav} />
      {
        mobilNav ? (
          <>
            {
              mobilNav && (
                <div className=" pb-6 pt-10  flex flex-col  absolute z-50 right-0 w-screen  top-24 bg-dark_bg h-[91vh] mobile-nav ">

                  <div className="flex flex-col items-center  justify-center space-y-8 pt-20">
                    {
                      navs.map(nav => (
                        <Link
                          key={nav.link}
                          href={nav.link}

                        >
                          <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl py-2 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                            {nav.name}
                          </h3>
                        </Link>
                      ))
                    }
                   
                    <div className="relative">
                   
                      <a onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl text-center text-[#fff] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer">
                        <h3 className="text-center text-[#fff]"> Book</h3>

                      </a> 
                    </div>


                  </div>
                </div>)
            }
          </>
        ) : (
          <Component {...pageProps} />
        )
      }


      <Footer />
    </>
  );
}

export default MyApp;
