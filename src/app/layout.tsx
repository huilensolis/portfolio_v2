import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
        <div className="bg-cm-white dark:bg-cm-black flex flex-col justify-start items-center min-h-[calc(100dvh-100px)] pt-[calc(100px+20px)] w-full sm:px-20 px-3">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
