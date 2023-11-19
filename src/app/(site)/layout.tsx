import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Huilen solis",
    template: "%s | Huilen solis",
  },
  description: `Explore Huilen's blog, projects and get in touch!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="google" content="notranslate" key="notranslate" />
        <meta name="robots" content="all" />
      </Head>
      <body className={GeistSans.className}>
        <Header />
        <div className="bg-cm-black flex flex-col justify-start items-center min-h-[calc(100dvh-80px)] pt-24 w-full sm:px-20 px-5 cm-1xl:px-2 overflow-x-clip">
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
