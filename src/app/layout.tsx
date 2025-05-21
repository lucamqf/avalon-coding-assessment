import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teste Prático Frontend",
  description: "Teste Prático Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased bg-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
