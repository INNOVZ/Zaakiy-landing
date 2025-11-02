"use client";

import React from "react";
import { motion } from "framer-motion";

const RetentionCards = () => {
  return (
    <div className="container mx-auto mt-24 grid grid-cols-1 sm:grid-cols-3 gap-10">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 14, stiffness: 120 }}
      >
        <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
          <div className="text-3xl sm:text-5xl font-bold text-white">+80%</div>
          <p></p>
          <p className="text-base font-medium text-white">Conversion Rate</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 14, stiffness: 120 }}
      >
        <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
          <div className="text-3xl sm:text-5xl font-bold text-white">+90%</div>
          <p></p>
          <p className="text-base font-medium text-white">
            Support Resources Saved
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 14, stiffness: 120 }}
      >
        <div className="bg-[#1a2438] p-5 rounded-2xl flex items-end justify-between gap-3">
          <div className="text-3xl sm:text-5xl font-bold text-white">+90%</div>
          <p></p>
          <p className="text-base font-medium text-white">
            Customer Satisfaction Score
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RetentionCards;
