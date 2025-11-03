import Image from "next/image";
import Link from "next/link";
import PriceSection from "@/components/PricingCard";
import FeatureHighlights from "@/components/FeatureHighlights";
import logo from "../../public/zaakiy.svg";
import chatwindow from "../../public/ai.svg";
import chatMobile from "../../public/chatmobile.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

import Banner from "@/components/Banner";
import Workflows from "@/components/Workflows";
import RetentionCards from "@/components/RetentionCards";
import Future from "@/components/Future";

export default function Home() {
  return (
    <>
      <div className="mt-1 flex flex-col px-5 sm:px-16">
        <div className="container mx-auto mt-15 min-h-[90vh] grid grid-cols-1 sm:grid-cols-2">
          <Banner />
          <div className="flex sm:items-start h-3/4">
            <Image
              src={chatwindow}
              alt="bot"
              width={100}
              height={100}
              className="w-full sm:w-full h-auto hidden sm:flex "
            />
            <Image
              src={chatMobile}
              alt="bot"
              width={100}
              height={100}
              className="w-full mt-[-150px] sm:w-full h-auto flex sm:hidden"
            />
          </div>
        </div>
        <FeatureHighlights />
        <Workflows />
        <RetentionCards />
        <Future />
        <div
          id="pricing"
          className="bg-[#f9fafb] mt-24 py-15 flex flex-col items-center gap-2 rounded-3xl"
        >
          <PriceSection />
        </div>
        <div className="mt-24 flex flex-col items-center gap-2 px-10 sm:px-34">
          <p className="text-center text-gray-800 text-base">
            Want to try it out?
          </p>
          <p className="text-3xl text-center font-bold text-[#0a0a60] delay-200">
            Get hands on experience with Zaakiy AI
          </p>
          <Link
            href="https://sprw.io/stt-NwNkd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="btn text-bold mt-3">Chat with us !</div>
          </Link>
        </div>
        <div className="mt-15 py-10 grid grid-cols-2 sm:grid-cols-4 items-start gap-2 sm:px-34 bg-[#0a0a60] rounded-3xl">
          <div className="mt-12 px-5 gap-5 h-[100%]">
            <Image
              src={logo}
              alt="logo"
              className="w-[150] h-auto sm:w-[200] sm:h-auto"
            />
          </div>
          <div className="m-5 gap-5 h-[100%]">
            <p className="sm:text-base font-bold text-white  bg-gray-200/20 px-3 py-1 inline-block rounded-xl">
              Zaakiy AI
            </p>
            <p className="mt-4 text-sm text-white px-2">UAE | ITALIA | INDIA</p>
            <div className="mt-5 flex gap-5 px-2">
              <FaInstagram color="#fff" className="w-[24px] h-[24px]" />
              <FaLinkedin color="#fff" className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="m-5 gap-5 h-[100%]">
            <p className="sm:text-base font-bold text-white bg-gray-200/20 px-3 py-1 inline-block rounded-xl">
              Quick Links
            </p>
            <p className="mt-4 px-2 text-sm text-white ">Home</p>
            <p className="mt-2 px-2 text-sm text-white">Integrations</p>
            <p className="mt-2 px-2 text-sm text-white">Price</p>
          </div>
          <div className="m-5 gap-5 h-[100%]">
            <p className="sm:text-base font-bold text-white bg-gray-200/20 px-3 py-1 inline-block rounded-xl">
              Features
            </p>
            <p className="mt-4 px-2 text-sm text-white">Chat Widget</p>
            <p className="mt-2 px-2 text-sm text-white">Whatsapp Bot</p>
            <p className="mt-2 px-2 text-sm text-white">Workflow Agent</p>
          </div>
        </div>
      </div>
      <footer className="w-full py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Zaakiy AI&reg;. All Rights Reserved
          | DesertWhales Team
        </p>
      </footer>
    </>
  );
}
