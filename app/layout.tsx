"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Roboto } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { usePathname, useRouter } from "next/navigation";
import maintenanceMode from "../config/maintenance";

// Font configuration
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

// Import the Providers
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();


   // Exclude layout during maintenance mode
   if (maintenanceMode.enabled && pathname === "/maintenance") {
    return (
      <html lang="en">
        <body className="flex items-center justify-center h-screen">
          {children}
        </body>
      </html>
    );
  }

  // Normal layout when maintenance mode is off
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${roboto.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
