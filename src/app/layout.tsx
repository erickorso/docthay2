import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./ReduxProvider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Erick Vargas — Frontend Lead / Senior Engineer",
  description:
    "Portfolio of Erick Vargas Ramos — Senior Frontend / Lead. React, Next.js, TypeScript. Remote from Madrid, Spain.",
  authors: [{ name: "Erick Vargas Ramos", url: "https://github.com/erickorso" }],
  openGraph: {
    title: "Erick Vargas — Frontend Lead",
    description:
      "Senior Frontend / Lead · React · Next.js · TypeScript · Remote EU",
    url: "https://github.com/erickorso/docthay2",
    siteName: "Erick Vargas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={poppins.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}