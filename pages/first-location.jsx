import Image from "next/image";
import hero from '../public/images/hero.jpg'

const FirstLocation = () => {
    return (
        <>
            <section className="hero" style={{zIndex:-1 , position:'relative', width:'100%' , height:'100%'}}>
                               <Image
                                    src="/images/hero.jpg"
                                    alt="what-we-build-hero"
                                    layout="fill"
                                    objectFit="cover"
                                />
                <div className="pl-container">
                    <div className="hero-text">
                        <h1 className="big-2 w-900 text-[white]">We wished a better travel booking platform existed</h1>
                        <h2 className="big-3 green-hd mt-5">So we made it.</h2>
                    </div>
                </div>
            </section>
           
            <section className="cta gray-bg">
                <div className="pl-container">
                    <div className="cta-text">
                        <h2 className="big-2 w-900">Built on big ideas</h2>
                        <p className="mt-5 lead-1">We are Tripeo, and we believe that putting a great tailored Ai travel search, and easy-to-use web3 wallet at your fingerprint will make your journey stress-free and enjoyable. </p>
                    </div>
                </div>
            </section>        
            <section className="cta">
                <div className="pl-container">
                    <div className="icon-wrap mb-5">
                        <h2 className="big-3">Welcome to the future of hospitality</h2>
                        <p className="lead-2 mt-3">We make it easy to book your next trip directly from your web3 wallet.</p>
                    </div>

                    <div className="icon-boxes mt-5">
                        <div className="flex flex-col items-center justift-center">
                            <div className="img-box">
                                <Image
                                    src="/bland/search.png"
                                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                                    height={156}
                                    width={156}
                                    layout={"fixed"}
                                />
                            </div>
                            <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                                Fast Tailored Search
                            </h5>
                            <p className="text-lg text-center">
                                Stable & Fast & Flexible AI travel search
                            </p>
                        </div>
                        <div className="flex flex-col items-center justift-center">
                            <div className="img-box">
                                <Image
                                    src="/bland/lock.png"
                                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                                    height={156}
                                    width={156}
                                    layout={"fixed"}
                                />
                            </div>
                            <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                                No Log-ins
                            </h5>
                            <p className="text-lg text-center">
                                Pay with a Web3 wallet.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justift-center">
                            <div className="img-box">
                                <Image
                                    src="/bland/conversion.png"
                                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                                    height={156}
                                    width={156}
                                    layout={"fixed"}
                                />
                            </div>
                            <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                                Cashback Travel Rewards
                            </h5>
                            <p className="text-lg text-center">
                                Earn rewards while travelling
                            </p>
                        </div>
                        <div className="flex flex-col items-center justift-center">
                            <div className="img-box">
                                <Image
                                    src="/bland/membership.png"
                                    alt="PHYSICAL NFT HOTEL & HOSTEL"
                                    height={156}
                                    width={156}
                                />
                            </div>
                            <h5 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">
                                NFTs As Membership
                            </h5>
                            <p className="text-lg text-center">
                                Verify NFT ownership to apply <br /> discounts
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

export default FirstLocation

