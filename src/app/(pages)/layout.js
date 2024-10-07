
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Navbar/Header/NavHeader";
import { Palatino_Linotype } from "../font";

const montserrat = Montserrat({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Palatino_Linotype.variable} ${montserrat.className}`}>
      

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
