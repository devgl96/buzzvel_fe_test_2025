import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const robotoMedium = Roboto({
  weight: "500",
  subsets: ["latin"],
});
const robotoBold = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teach - Buzzvel FE - Test 2025",
  description: "Teach landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${robotoMedium.className} ${robotoBold.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
