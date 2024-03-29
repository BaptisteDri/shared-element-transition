"use client";

import { Suspense } from "react";
import { LayoutGroup } from "framer-motion";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <LayoutGroup>{children}</LayoutGroup>
        </Suspense>
      </body>
    </html>
  );
}
