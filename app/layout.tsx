import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import ResponseiveNav from "../components/Home/Navbar/ResponseiveNav"
import Footer from "@/components/Home/Footer/Footer";
const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900',],
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Nft next js shop",
  description: "Nft website template using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponseiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
