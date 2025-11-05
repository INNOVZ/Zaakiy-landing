"use client";

import React from "react";
import Image from "next/image";
import workflow from "../../public/workflows.svg";
import { motion } from "framer-motion";

const Workflows = () => {
  return (
    <div className="bg-blue-50 mt-24 py-15 flex flex-col items-center gap-2 px-10 rounded-3xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-[#0a0a60]">
          Learn from your Data
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="text-base font-normal text-center text-gray-600">
          Connect your knowledge base and let Zaakiy AI handle the rest.
        </p>
      </motion.div>
      <Image
        src={workflow}
        alt="workflow"
        width={120}
        height={150}
        className="w-full h-auto rounded-3xl"
      />
    </div>
  );
};

export default Workflows;
