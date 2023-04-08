import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const Faq = () => {
  return (
    <div className="min-h-[90vh] bg-[#2A2A29]">
      <div className="h-fit  flex justify-center  items-center bg-[#ECF7FD]">
        <div className="flex items-center mr-40 md:mr-48">

          <Image priority={true} src="/images/NFT-FAQ.png" height={150} width={150} layout="fixed" alt="FAQ Banner" />
          <h1 className="mt-6  font-exo text-center text-5xl font-bold text-dark_bg ">
            FAQ
          </h1>
        </div>

      </div>

      <div className="max-w-4xl px-4 py-6 mx-auto">

        <FaqAccordian title="Blockchains?" desc="Solana. Palmverse Booking Platform will be multi-chain in the near future." />
        <FaqAccordian title="Supply, price, date?" desc="Supply: TBA, Price:  TBA,  Date: TBA." />
        <FaqAccordian title="When will the Proof of Concept be ready?" desc="The Web3 Booking Platform will be live on mainnet and the 1st Palmverse Hotel & Hostel will be ready soon after the mint." />


      </div>
    </div>
  );
};
export default Faq;

const FaqAccordian = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <div className="flex">
        <h1 className="text-center w-full bg-[#ECF7FD] py-5 px-2 font-bold text-lg text-[#2a2a29] font-exo">
          {title}
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-center px-4 bg-slate-400 bg-opacity-90"
        >
          {" "}
          {
            open ? (

              <AiOutlineMinus className="text-[#2A2A29] bg-transparent text-2xl" />
            ) : (

              <AiOutlinePlus className="text-[#2A2A29] bg-transparent text-2xl" />
            )
          }
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"
          } duration-300 ease-in transition-all  font-exo bg-gray-100`}
      >
        <p className="p-4 text-[#2a2a29] bg-[#ECF7FD] ">
          {desc}
        </p>
      </div>
    </div>
  );
};


