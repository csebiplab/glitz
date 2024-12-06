import { Suspense } from "react";
import { Mulish, Roboto_Serif } from "next/font/google";

import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Navbar/Header/NavHeader";
// import { Palatino_Linotype } from "../font";
import { headers } from "next/headers";
import { projectfor } from "@/constants/projectfor";
import AosSetup from "@/config/AosSetup";
import "../globals.css";

export const mulish = Mulish({ subsets: ["latin"], display: "swap" , variable : "--font-mulish"});
export const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotoSerif"
});

export async function generateMetadata() {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const clientUrlWithPath = process.env.NEXT_PUBLIC_CLIENT_URL + pathname;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(
      `${apiUrl}/api/metadata?projectFor=${projectfor}&pageLink=${clientUrlWithPath}`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    const { title, description, keywords } = data?.data[0] ?? {};

    const gglverificationResponse = await fetch(
      `${apiUrl}/api/site-verification?projectFor=${projectfor}`,
      {
        cache: "no-store",
      }
    );

    const gVerificationData = await gglverificationResponse.json();

    const verificationContent = gVerificationData?.data?.[0]?.url;

    return {
      title: title,
      description: description,
      keywords: keywords,
      openGraph: {
        title: title,
        description: description,
      },
      verification: {
        google: verificationContent,
      },
      alternates: {
        canonical: clientUrlWithPath,
      },
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  } catch (error) {
    return {
      title: "Home",
      description: "Home",
      keywords: "Glitz",
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSerif.variable} ${mulish.variable}`}>
        <main className="overflow-hidden">
          <Suspense>
            <RoutingProgressBar />
          </Suspense>
          <AosSetup />
          <>
            <NavHeader />
          </>
          {children}
          <>
            <Footer />
            <ScrollToTopComponent />
          </>
        </main>
      </body>
    </html>
  );
}
