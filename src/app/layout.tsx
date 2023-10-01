import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huilen solis portfolio",
  description: `Explore Huilen's blog, projects and get in touch!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="bg-cm-white dark:bg-cm-black flex flex-col justify-center items-start h-[100dvh] w-full sm:px-20 px-3">
          {children}
        </div>
      </body>
    </html>
  );
}
