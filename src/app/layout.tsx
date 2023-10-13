import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/* 정적인 방법
export const metadata: Metadata = {
  title: "날씨 앱 - next 13 version",
  description: "next 13을 공부하며 만들어본 날씨 앱",
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
