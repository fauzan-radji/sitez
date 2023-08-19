import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitez",
  description: "A website to gather useful resources from the internet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container mx-auto bg-slate-50 text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
