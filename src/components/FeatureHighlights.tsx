"use client";

import Image from "next/image";
import { useState } from "react";

import support from "../../public/support_animated.svg";
import automate from "../../public/auto-response-svg.svg";
import orbit from "../../public/animated_orbit.svg";

const featureHighlights = [
  {
    title: "No Endless conversations",
    description:
      "Responds to your customers queries with real information instantly and automatically without the need for manual intervention.",
    illustration: support,
    alt: "Zaakiy AI responding in a chat window",
  },
  {
    title: "Unleashed Experience",
    description:
      "Run your business 24/7 with Zaakiy AI where your customers can get instant answers to their queries. Zaakiy AI optimizes your business opportunities with advanced artificial intelligence, ensuring efficiency and responsiveness in your industry.",
    illustration: automate,
    alt: "Workflow showing AI powered automations",
  },
  {
    title: "Integrate seemlessly",
    description:
      "Add Zaakiy AI chat widget to your website or Web app in minutes. From landing pages to Wordpress, Shopify, native iOS, Android, or React apps, that talk to visitors in real-time, offer support when it counts, and guide users all the way to conversion. Enhanced Omnichannel experience that responds to your customers on your WhatsApp and Social Medias.",
    illustration: orbit,
    alt: "Orbiting integrations around Zaakiy AI",
  },
];

export default function FeatureHighlights() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 rounded-3xl">
      <div className="py-10 flex flex-col justify-center items-center">
        <div className="relative flex w-full max-w-[720px] justify-center">
          <div className="relative h-[460px] w-full sm:h-[400px]">
            <Image
              key={featureHighlights[activeHighlight].title}
              src={featureHighlights[activeHighlight].illustration}
              alt={featureHighlights[activeHighlight].alt}
              fill
              sizes="(min-width: 740px) 520px, 100vw"
              className="object-contain transition-opacity duration-500 ease-out"
            />
          </div>
        </div>
        <p className="text-base text-center font-medium text-gray-600">
          Connect with the tools your business already loves.
        </p>
      </div>
      <div className="sm:pr-20 flex flex-col justify-center">
        {featureHighlights.map((feature, index) => {
          const isActive = activeHighlight === index;

          return (
            <div
              key={feature.title}
              className={`mt-3 rounded-2xl transition-all duration-300 ease-out ${
                isActive
                  ? "bg-indigo-100/60 shadow-sm shadow-indigo-200/40"
                  : "bg-transparent hover:bg-indigo-100/40"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveHighlight(index)}
                className={`pointer flex w-full items-center gap-2 px-6 py-4 text-left text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#0a0a60]"
                    : "text-[#0a0a60] hover:text-[#0a0a60]"
                }`}
                aria-pressed={isActive}
                aria-expanded={isActive}
              >
                {feature.title}
              </button>
              <div
                className={`overflow-hidden px-6 transition-all duration-300 ease-out ${
                  isActive
                    ? "max-h-40 opacity-100 pb-6"
                    : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <p className="text-base font-normal text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
