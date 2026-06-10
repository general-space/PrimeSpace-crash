import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimeSpace Crash",
  description: "Cosmic Space Crash Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
