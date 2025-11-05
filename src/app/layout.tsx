import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Nav from "@/components/NavBar";
import Script from "next/script";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Zaakiy AI | Upgrade to AI workforce",
  description:
    "Zaakiy AI Agent that responds to your customers queries with real information instantly and automatically 24/7.Transforming businesses with cutting-edge AI solutions. From chatbots to workflow automation, we empower your workforce.",
  keywords: [
    "AI chatbot",
    "AI Agent for Your Business",
    "AI chatbot Agent for 24/7 Customer Support",
    "AI chatbot Agent for 24/7 Customer Support",
    "AI solutions in Dubai",
    "AI chatbot solutions in Dubai",
    "AI customer support chatbot solutions in Dubai",
    "AI marketing solutions",
    "AI enabled services",
  ].join(", "),
  authors: [{ name: "Zaakiy AI" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Zaakiy AI | Leading AI Solutions for Business Growth",
    description:
      "Transforming businesses with cutting-edge AI solutions. From chatbots to workflow automation, we empower your workforce.",
    type: "website",
    locale: "en_IN",
    url: "https://zaakiy.io",
    siteName: "Zaakiy AI",
    images: [
      {
        url: "/logobl.png",
        width: 1200,
        height: 630,
        alt: "Zaakiy AI | Upgrade to AI workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaakiy AI | Upgrade to AI workforce",
    description:
      "AI Agent that responds to your customers queries with real information instantly and automatically 24/7.",
    images: ["/logobl.png"],
  },
  alternates: {
    canonical: "https://zaakiy.io",
  },
  other: {
    "geo.region": "DU-AE",
    "geo.placename": "Dubai, UAE",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#faa633",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>
        <Nav />
        {children}
        <Script
          id="zaakiy-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
    var script = document.createElement('script');
    script.src = 'https://zaakiy.vercel.app/chat-widget.js';
    script.setAttribute('data-chatbot-id', '057aa048-f77d-44ec-aba2-a8e0d2abd11f');
    script.setAttribute('data-api-url', 'https://zaakiy-production.up.railway.app');
    document.head.appendChild(script);
  })();
            `,
          }}
        />
      </body>
    </html>
  );
}
