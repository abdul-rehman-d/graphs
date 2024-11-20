import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Topbar } from "@/components/common/topbar";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cali Graphs",
  description: "Generate beautiful graphs for Excalidraw",
  openGraph: {
    type: "website",
    title: "Cali Graphs",
    description: "Generate beautiful graphs for Excalidraw",
    url: "https://cali-graphs.vercel.app/",
    siteName: "Cali Graphs",
  },
  twitter: {
    title: "Cali Graphs",
    description: "Generate beautiful graphs for Excalidraw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-10 to-white">
            <Topbar />
            {children}
          </div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
