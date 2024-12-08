import { Suspense } from "react";
import { Mulish, Roboto_Serif } from "next/font/google";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Navbar/Header/NavHeader";
import { headers } from "next/headers";
import { projectfor } from "@/constants/projectfor";
import AosSetup from "@/config/AosSetup";
import { GoogleTagManager } from '@next/third-parties/google'
import JsonLd from "@/components/__SEORelated/JsonLd";

import "../globals.css";

export const mulish = Mulish({ subsets: ["latin"], display: "swap", variable: "--font-mulish" });
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

// changes for merge

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <GoogleTagManager gtmId="GTM-WSKJ7H8P" />



      <body className={`${robotoSerif.variable} ${mulish.variable}`}>

        <JsonLd />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSKJ7H8P"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}


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
