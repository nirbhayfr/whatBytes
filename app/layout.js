import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const poppins = Poppins({
     subsets: ["latin"],
     display: "swap",
     weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
     title: "WhatBytes",
     description: "A Product selling web app created as an assignment.",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en">
               <body
                    className={`${poppins.className} grid grid-rows-[auto_1fr_auto] min-h-screen`}
               >
                    <Header />
                    {children}
                    <Footer />
               </body>
          </html>
     );
}
