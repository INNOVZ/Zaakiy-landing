"use client";

import React from "react";
import Image from "next/image";
import support from "../../public/support.svg";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Future = () => {
  return (
    <div className="lg:bg mt-24 container mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 14, stiffness: 120 }}
      >
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
          The future of customer support
        </h1>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="order-2 py-10 flex flex-col gap-2 px-5 sm:order-1 sm:px-0">
          <p className="text-base font-medium pb-3 bg-gradient-to-r from-[#5D7DDE] to-[#6a8fff] text-transparent bg-clip-text">
            Optimize Customer Xperience
          </p>
          <h1 className="text-2xl sm:text-3xl text-left font-bold text-gray-800 ">
            Interact with every new opportunity
          </h1>
          <p className="mt-3 text-base font-normal text-gray-600">
            Zaakiy AI optimizes your business opportunities with advanced
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
  );
};

export default Future;
