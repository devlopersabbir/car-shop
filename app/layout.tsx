import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cars Hub - Project",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, et.",
  authors: [
    {
      name: "Sabbir Hossain Shuvo",
      url: "https://github.com/devlopersabbir",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
