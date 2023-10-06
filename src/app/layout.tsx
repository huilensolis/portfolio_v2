import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huilen solis portfolio",
  description: `Explore Huilen's blog, projects and get in touch!`,
};

const clasDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/clash-display/Fonts/WEB/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clasDisplay.className}>
        <Header />
        <div className="prose-p:text-3xl prose-p:tracking-wide prose-headings:tracking-wide prose-strong:tracking-wide prose-li:text-xl prose-li:tracking-wide bg-cm-white dark:bg-cm-black flex flex-col justify-start items-center min-h-[calc(100dvh-100px)] py-32 w-full sm:px-20 px-5">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
