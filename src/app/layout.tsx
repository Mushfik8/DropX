import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DropX — Earn Rewards in Web3",
  description: "DropX is a Web3 reward platform where users complete tasks and earn crypto rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && !window.matchMedia) {
                window.matchMedia = function() {
                  return {
                    matches: false,
                    addListener: function() {},
                    removeListener: function() {}
                  };
                };
              }
              // Fix for older browsers/libraries that expect addListener on matchMedia result
              if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('all').addListener) {
                const oldMatchMedia = window.matchMedia;
                window.matchMedia = function(query) {
                  const mql = oldMatchMedia(query);
                  if (!mql.addListener) mql.addListener = function() {};
                  if (!mql.removeListener) mql.removeListener = function() {};
                  return mql;
                };
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <AppProvider>
          <Navbar />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
