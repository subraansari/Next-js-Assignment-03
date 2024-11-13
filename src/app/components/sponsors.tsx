// import react from "react";
import Image from "next/image";
import Apple from "/public/Apple.png";
import Microsoft from "/public/Microsoft.png";
import Slack from "/public/Slack.png";
import Google from "/public/Google.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Sponsors = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px] top-[4654] px-[220px] py-[140px] flex-col justify-center bg-white">
        <h1
          className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] text-center mb-24 ${inter.className}`}
        >
          Our sponsors
        </h1>

        <div className="w-[1482px] h-[71px] flex justify-between ">
          <Image
            src={Apple}
            alt="Apple Logo"
            className="w-[55.47px] h-[68px]"
          />
          <Image
            src={Microsoft}
            alt="Microsoft Logo"
            className="w-[287px] h-[62px]"
          />
          <Image src={Slack} alt="Slack Logo" className="w-[280px] h-[71px]" />
          <Image
            src={Google}
            alt="Google Logo"
            className="w-[211px] h-[69.81px]"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;