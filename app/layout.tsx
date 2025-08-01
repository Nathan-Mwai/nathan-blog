import type { Metadata } from "next";
import { Geist, Playwrite_US_Trad, Raleway } from "next/font/google";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playwriteMono = Playwrite_US_Trad({
  variable: "--font-playwrite-us-trad-mono",
  // subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codebase Journal | Blog",
  description: "Codebase Journal Ideas and upcoming projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${playwriteMono.variable}
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
