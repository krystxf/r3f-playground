import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { UiComponentSlot } from "@/components/UiComponentSlot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}

        <UiComponentSlot
          variant="sm"
          className="absolute bottom-8 right-6 z-50 hover:text-neutral-300 hover:underline"
        >
          <Link href="https://github.com/krystxf/r3f-playground">
            source code
          </Link>
        </UiComponentSlot>
      </body>
    </html>
  );
}