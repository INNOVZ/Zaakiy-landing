"use client";
import React from "react";
import Link from "next/link";
import { motion} from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col  items-center sm:items-start gap-3">
      <motion.div
        initial={{ x: -90, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "tween",
          duration: 0.9,
          stiffness: 100,
          damping: 20,
          delay: 0.3,
        }}
        className="mt-20 text-4xl sm:text-6xl"
      >
        <h1>Meet Zaakiy</h1>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          type: "tween",
          duration: 0.9,
          stiffness: 100,
          damping: 20,
          delay: 0.3,
        }}
      >
        <p className="text-center sm:text-left text-base font-normal">
          Our very first AI enabled virtual assistant and Intelligent customer
          support chatbot for your business.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 14, stiffness: 120 }}
      >
        <Link
          href="https://sprw.io/stt-NwNkd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 hidden pointer bg-[#0a0a60] md:flex items-center space-x-4 text-white duration-300 transition-colors px-5 py-2 rounded-lg">
            Try it now !
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Banner;
