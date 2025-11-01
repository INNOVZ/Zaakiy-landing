"use client";
import { useState, useEffect } from "react";

interface SubMenuItem {
  title: string;
  description: string;
  icon?: string;
}

interface MenuCategory {
  title: string;
  items: SubMenuItem[];
}

const integrationCategories: MenuCategory[] = [
  {
    title: "Omnichannel",
    items: [
      {
        title: "WhatsApp",
        description: "Connect with customers via WhatsApp Business API",
      },
      {
        title: "Facebook Messenger",
        description: "Integrate with Facebook Messenger for customer support",
      },
      {
        title: "Instagram",
        description: "Handle customer queries through Instagram DMs",
      },
    ],
  },
  {
    title: "Web",
    items: [
      {
        title: "AI Customer Support",
        description: "Connect with website chat widgets for instant support",
      },
      {
        title: "E-commerce",
        description: "Integrate with Shopify stores for automated support",
      },
      {
        title: "Booking Platforms",
        description:
          "Connect with Booking platform, calendars and scheduling tools",
      },
      {
        title: "Real Estate",
        description: "Connect with real estate platforms",
      },
    ],
  },
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle click outside to close menu
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".mega-menu-container")) {
      setIsOpen(false);
    }
  };

  // Add/remove event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent scroll from closing menu
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="pointer relative group mega-menu-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#0a0a60] mb-1 font-medium hover:text-[#0a0a60] transition-colors duration-300"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Integrations
      </button>

      {isOpen && (
        <div className="fixed left-1/2 transform -translate-x-1/2 w-screen bg-gray-50 shadow-lg mt-8 py-6 px-8 grid grid-cols-2 gap-8 z-50 max-w-4xl">
          {integrationCategories.map((category, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="group/item">
                    <a
                      href="#"
                      className="block p-2 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                    >
                      <div className="text-sm font-medium text-gray-900 group-hover/item:text-[#0a0a60]">
                        {item.title}
                      </div>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
