import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Html } from "next/document";
import { Inter, Goldman } from "next/font/google";

const inter = Goldman(
  { weight: "400", subsets: ["latin"] }
  // subsets: ["latin"],
  // variable: "",
);

export const metadata: Metadata = {
  title: "Swinburne Finance Club",
  description: "Created by ♥ in Melbourne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter} font-sans`}>
        <Provider defaultTheme="light">{children}</Provider>
      </body>
    </html>
  );
}
