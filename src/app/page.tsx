import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import PriceSection from "@/components/PricingCard";
import FeatureHighlights from "@/components/FeatureHighlights";
import logo from "../../public/zaakiy.svg";
import workflow from "../../public/workflows.svg";
import chatwindow from "../../public/ai.svg";
import chatMobile from "../../public/chatmobile.svg";
import support from "../../public/support.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="mt-1 flex flex-col px-5 sm:px-16">
        <div className="container mx-auto min-h-[90vh] grid grid-cols-1 sm:grid-cols-2 mt-15">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="pt-10 text-4xl sm:text-6xl mt-5 ">Meet Zaakiy</h1>
            <p className="mt-5 text-center sm:text-left text-base font-normal">
              Our very first AI enabled virtual assistant and Intelligent
              customer support chatbot for your business.
            </p>
            <Link
              href="https://sprw.io/stt-NwNkd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-8 hidden pointer bg-[#0a0a60] md:flex items-center space-x-4 text-white duration-300 transition-colors px-5 py-2 rounded-lg gap-3">
                Try it now !
              </button>
            </Link>
          </div>
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
              className="w-full mt-[-150px] sm:w-full h-auto flex sm:hidden "
            />
          </div>
        </div>
        <div className="bg-indigo-50 py-15 flex flex-col items-center px-10 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
            Transform your Business
          </h1>
          <p className="mt-3 text-base text-center font-normal text-gray-600">
            Integrate Zaakiy AI
          </p>
          <FeatureHighlights />
        </div>
        <div className="bg-blue-50 mt-24 py-15 flex flex-col items-center gap-2 px-10 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
            Learn from your Data
          </h1>
          <p className="text-base font-normal text-gray-600">
            Connect your knowledge base and let Zaakiy AI handle the rest.
          </p>
          <Image
            src={workflow}
            alt="workflow"
            width={120}
            height={150}
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="container mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
            <div className="text-3xl sm:text-5xl font-bold text-white">
              +80%
            </div>
            <p></p>
            <p className="text-base font-medium text-white">Conversion Rate</p>
          </div>
          <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
            <div className="text-3xl sm:text-5xl font-bold text-white">
              +90%
            </div>
            <p></p>
            <p className="text-base font-medium text-white">
              Support Resources Saved
            </p>
          </div>
          <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
            <div className="text-3xl sm:text-5xl font-bold text-white">
              +90%
            </div>
            <p></p>
            <p className="text-base font-medium text-white">
              Customer Satisfaction Score
            </p>
          </div>
        </div>
        <div className="mt-24 container mx-auto">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
            The future of customer support
          </h1>
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="order-2 py-10 flex flex-col gap-2 px-5 sm:order-1 sm:px-0">
              <p className="text-base font-medium pb-3 bg-gradient-to-r from-[#5D7DDE] to-[#6a8fff] text-transparent bg-clip-text">
                Optimize Customer Xperience
              </p>
              <h1 className="text-2xl sm:text-3xl text-left font-bold text-gray-800 ">
                Interact with every new opportunity
              </h1>
              <p className="mt-3 text-base font-normal text-gray-600">
                ZaaKy AI optimizes your business opportunities with advanced
                artificial intelligence.
              </p>
              <ul className="py-6">
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-normal text-gray-600">
                      Automate customer interactions
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-normal text-gray-600">
                      24/7 continuous support
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-normal text-gray-600">
                      Communicate your information accurately
                    </p>
                  </span>
                </li>

                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />

                    <p className="text-base font-normal text-gray-600">
                      Eliminate the waiting time
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />

                    <p className="text-base font-normal text-gray-600">
                      Multilingual Support
                    </p>
                  </span>
                </li>
              </ul>
              <Link
                href="https://sprw.io/stt-NwNkd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="btn text-lg font-bold">Try it now</div>
              </Link>
            </div>
            <div className="order-1 flex justify-center sm:order-2">
              <Image
                src={support}
                alt="bot"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div
          id="pricing"
          className="bg-[#f9fafb] mt-24 py-15 flex flex-col items-center gap-2 rounded-3xl"
        >
          <PriceSection />
        </div>
        <div className="mt-24 flex flex-col items-center gap-2 px-10 sm:px-34">
          <h1 className="text-center text-[#5D7DDE] text-base">
            Want to try it out?
          </h1>
          <p className="text-3xl text-center font-bold text-[#0a0a60] delay-200">
            Get hands on experience with ZaaKy AI
          </p>
          <div className="btn text-bold mt-3">Chat with us !</div>
        </div>
        <div className="mt-15 py-10 grid grid-cols-2 sm:grid-cols-4 items-center gap-2 px-10 sm:px-34 bg-[#0a0a60] rounded-3xl">
          <div className="gap-5">
            <Image
              src={logo}
              alt="logo"
              className="w-[150] h-[250] sm:w-[250] sm:h-[250]"
            />
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <p className="text-xl font-bold text-white">Zaakiy AI</p>
            <p className="mt-4 text-base text-white"></p>{" "}
            <p className="mt-4 text-base text-white">UAE | ITALIA</p>
            <div className="mt-5 flex gap-5">
              <FaInstagram color="#fff" className="w-[24px] h-[24px]" />
              <FaLinkedin color="#fff" className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <p className="text-xl font-bold text-white">Quick Links</p>
            <p className="mt-4 text-base text-white">Home</p>
            <p className="mt-2 text-base text-white">Integrations</p>
            <p className="mt-2 text-base text-white">Price</p>
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <p className="text-xl font-bold text-white">Features</p>
            <p className="mt-4 text-base text-white">Chat Widget</p>
            <p className="mt-2 text-base text-white">Whatsapp Bot</p>
            <p className="mt-2 text-base text-white">Workflow Agent</p>
          </div>
        </div>
      </div>
      <footer className="w-full py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Zaakiy AI&reg;. All Rights Reserved.{" "}
        </p>
      </footer>
    </>
  );
}
