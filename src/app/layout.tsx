import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./ReduxProvider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Portafolio de [Tu Nombre]",
  description: "Portafolio personal de un desarrollador apasionado",
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