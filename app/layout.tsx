import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Poiret_One } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins'
});
const poiretOne = Poiret_One({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: '--font-poiret-one'
});

export const metadata: Metadata = {
  title: "Linh's Cozy Corner",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poiretOne.variable}`}>
        {children}
      </body>
      
    </html>
  );
}
