import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solana Marketplace",
  description: "Solana Marketplace Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ overflow: 'auto', height: '100%' }}>
        {children}
      </body>
    </html>
  );
}
