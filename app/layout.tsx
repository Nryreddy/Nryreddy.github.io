import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
  title: "Nithesh Portfolio",
  description: "AI & Data Engineer | Nithesh Reddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
