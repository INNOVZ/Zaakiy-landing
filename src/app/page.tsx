import Image from "next/image";
// import Bot from "../../../public/bot.png";
import { CircleCheckBig } from "lucide-react";
import PriceSection from "@/components/PricingCard";
import logo from "../../public/zaakiy.svg";
import image from "../../public/imag.svg";
import workflow from "../../public/workflows.svg";
import chatwindow from "../../public/ai.svg";
import integration from "../../public/animated_orbit.svg";
export default function Home() {
  return (
    <>
      <div className="mt-1 flex flex-col px-5 sm:px-16">
        <div className="container mx-auto min-h-[95vh] grid grid-cols-1 sm:grid-cols-2 mt-15">
          <div className="flex flex-col items-start">
            <h1 className="pt-10 text-4xl sm:text-6xl mt-5">Meet Zaakiy</h1>
            <p className="mt-5 text-base">
              Our very first AI enabled virtual assistant and Intelligent
              customer support chatbot for your business.
            </p>
            <button className="mt-8 hidden pointer bg-[#0a0a60] font-semibold md:flex items-center space-x-4 text-white hover:text-[#3fe4aa] duration-300 transition-colors px-5 py-2 rounded-lg gap-3">
              Try it now !
            </button>
          </div>
          <div className="flex items-start">
            <Image
              src={chatwindow}
              alt="bot"
              width={100}
              height={100}
              className="w-full sm:w-full h-auto"
            />
          </div>
        </div>
        <div className="bg-indigo-50 py-15 flex flex-col items-center px-10 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
            Transform your Business
          </h1>
          <p className="mt-3 text-base text-center font-medium text-gray-600">
            Integrate Zaakiy AI
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 rounded-3xl">
            <div className=" py-10 flex flex-col justify-center items-center">
              <Image
                src={integration}
                alt="bot"
                width={520}
                height={520}
                className="h-auto"
              />
              <p className="text-base text-center font-medium text-gray-600">
                Connect with the tools your business already loves.
              </p>
            </div>
            <div className="sm:pr-20 flex flex-col justify-center">
              <h1 className="mt-8 text-xl sm:text-2xl font-bold text-[#0a0a60]">
                No Endless conversations
              </h1>
              <p className="mt-3 text-base font-medium text-gray-600">
                Responds to your customers queries with real information
                instantly and automatically without the need for manual
                intervention.
              </p>
              <h1 className="mt-8 text-xl sm:text-2xl font-bold text-[#0a0a60]">
                Unleashed Experience
              </h1>
              <p className="mt-3 text-base font-medium text-gray-600">
                Run your business 24/7 with Zaakiy AI where your customers can
                get instant answers to their queries. Zaakiy AI optimizes your business
                opportunities with advanced artificial intelligence, ensuring
                efficiency and responsiveness in your industry.
              </p>
              <h1 className="mt-8 text-xl sm:text-2xl font-bold text-[#0a0a60]">
                Integrate seemlessly
              </h1>
              <p className="mt-3 text-base font-medium text-gray-600">
                Omnichannel AI Assistant that responds to your customers on your Website,
                WhatsApp and Social medias and 
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 mt-24 py-15 flex flex-col items-center gap-2 px-10 rounded-3xl">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
            Learn from your Data
          </h1>
          <p className="text-base font-medium text-gray-600">
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
        <div className="container mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-10">
            <div className="text-3xl sm:text-5xl font-bold text-white">
              +80%
            </div>
            <p></p>
            <p className="text-base font-medium text-white">Conversion Rate</p>
          </div>
          <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
            <div className="text-3xl sm:text-5xl font-bold text-white">
              +65%
            </div>
            <p></p>
            <p className="text-base font-medium text-white">
              Customer Support Resources Saved
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
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2">
            <div className="py-10 flex flex-col gap-2 px-5 sm:px-0">
              <p className="text-base font-medium pb-3 bg-gradient-to-r from-[#5D7DDE] to-[#6a8fff] text-transparent bg-clip-text">
                Optimize Customer Xperience
              </p>
              <h1 className="text-2xl sm:text-3xl text-left font-bold text-gray-800 ">
                Interact with every new opportunity
              </h1>
              <p className="mt-3 text-base font-medium text-gray-600">
                ZaaKy AI optimizes your business opportunities with advanced
                artificial intelligence.
              </p>
              <ul className="py-6">
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-medium text-gray-600">
                      Automate customer interactions
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-medium text-gray-600">
                      24/7 continuous support
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />
                    <p className="text-base font-medium text-gray-600">
                      Communicate your information accurately
                    </p>
                  </span>
                </li>

                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />

                    <p className="text-base font-medium text-gray-600">
                      Eliminate the waiting time
                    </p>
                  </span>
                </li>
                <li className="py-3">
                  <span className="flex flex-row items-center gap-9">
                    <CircleCheckBig color="#5D7DDE" />

                    <p className="text-base font-medium text-gray-600">
                      Multilingual Support
                    </p>
                  </span>
                </li>
              </ul>
              <div className="btn text-lg font-bold">Try it now</div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={image}
                alt="bot"
                width={100}
                height={100}
                className="w-full sm:w-3/4 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#f9fafb] mt-24 py-15 flex flex-col items-center gap-2 rounded-3xl">
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
        <div className="mt-15 py-10 grid grid-cols-1 sm:grid-cols-3 items-center gap-2 px-10 sm:px-34 bg-[#0a0a60] rounded-4xl">
          <div className="mt-12 gap-5 h-[100%]">
            <Image src={logo} alt="logo" width={150} height={150} />
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <h1 className="text-xl font-bold text-white">Products</h1>
            <p className="mt-4 text-base text-white">ZaaKy AI</p>{" "}
          </div>
          <div className="mt-12 gap-5 h-[100%]">
            <h1 className="text-xl font-bold text-white">Company</h1>
            <p className="mt-4 text-base text-white">Home</p>
            <p className="mt-2 text-base text-white">Price</p>
            <p className="mt-2 text-base text-white">About Us</p>
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
