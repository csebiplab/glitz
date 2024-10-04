
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
// import { Lucida_Grande, Naomi } from "../font";
import { NavHeader } from "@/components/__layouts/Navbar/Header/NavHeader";

const mobotoSlab = Montserrat({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${Lucida_Grande.variable} ${Naomi.variable}`}> */}
      <body className={mobotoSlab.className}>
        <Suspense>
          <RoutingProgressBar />
        </Suspense>
        <>
          <NavHeader/>
        </>
        {children}
        <>
          <Footer />
          <ScrollToTopComponent />
        </>
      </body>
    </html>
  );
}
