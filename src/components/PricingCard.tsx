"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function PricingCard() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      name: "Essential",
      description: "Essential features for individuals and small teams",
      price: {
        monthly: "$40.00",
        yearly: "$408.00",
      },
      features: [
        { name: "2000 Messages", included: true },
        { name: "Basic cutomization", included: true },
        { name: "1GB Training Data", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Custom domains", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Perfect for growing teams and businesses",
      price: {
        monthly: "$100.00",
        yearly: "$1062.00",
      },
      features: [
        { name: "5000 Messages", included: true },
        { name: "Advanced customization", included: true },
        { name: "3GB Training Data", included: true },
        { name: "1 Zaakiy assistant", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Email support", included: true },
        { name: "Custom domains", included: true },
      ],
      cta: "Book a Demo",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "Advanced features for large organizations",
      price: {
        monthly: "$250.00",
        yearly: "$2550.00",
      },
      features: [
        { name: "10000 Messages", included: true },
        { name: "Advanced cutomization", included: true },
        { name: "unlimited Training Data", included: true },
        { name: "3 Zaakiy assistant", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Email support", included: true },
        { name: "Fully Managed", included: true },
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2  bg-gradient-to-r from-[#0a0a60] to-[#5D7DDE] text-transparent bg-clip-text">
          Simple, transparent pricing
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Choose the the plan right for you
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center p-1 bg-[#5d7dde] dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`ponter px-4 py-2 text-sm rounded-md transition-colors ${
              billingCycle === "monthly"
                ? "pointer bg-white shadow-sm text-[#0a0a60]"
                : "text-white"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBillingCycle("yearly")}
            className={`pointer px-4 py-2 text-sm rounded-md transition-colors ${
              billingCycle === "yearly"
                ? "bg-white shadow-sm text-[#0a0a60]"
                : "text-white"
            }`}
          >
            Yearly
            <span className="text-xs font-semibold text-[#3fe4aa] ml-1">
              {" "}
              Save 15%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col p-6 sm:p-12 rounded-lg border ${
              plan.highlighted
                ? "border-[#0a0a60] shadow-lg relative overflow-hidden"
                : "border-gray-200 shadow-lg"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-[#0a0a60]">
                <div className="dark:bg-white text-white dark:text-black text-xs font-medium px-3 py-1 rounded-bl-lg ">
                  Popular
                </div>
              </div>
            )}

            <div className="mb-5">
              <h3
                className={`text-xl font-bold ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#0a0a60] via-blue-400 to-blue-400 text-transparent bg-clip-text"
                    : "text-gray-900 dark:text-white"
                }`}
              >
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {plan.description}
              </p>
            </div>

            <div className="mb-5">
              <span className="text-3xl font-bold ">
                {plan.price[billingCycle]}
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">
                {billingCycle === "monthly" ? "/month" : "/year"}
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300 dark:text-gray-600 mr-2 flex-shrink-0" />
                  )}
                  <span
                    className={
                      feature.included ? "" : "text-gray-500 dark:text-gray-400"
                    }
                  >
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`py-3 px-4 rounded-md font-medium ${
                plan.highlighted
                  ? "pointer bg-[#0a0a60] text-white"
                  : "pointer border-2 border-[#0a0a60] text-[#0a0a60]"
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
