import "./globals.css";

export const metadata = {
  title: "PrimeSpace Crash",
  description: "Cosmic Space Crash Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
