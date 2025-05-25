import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SearchProvider } from "@/components/Search"
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
  title: "Metaldryll - Catálogo de Productos",
  description: "El catálogo de Metaldryll está diseñado para arquitectos, contratistas y técnicos de obra que requieren materiales certificados y confiables. Ofrecemos una selección completa en Drywall, cielo raso, cobertura, herramientas, seguridad e iluminación, segmentados por subcategorías para una búsqueda eficiente. Todos nuestros productos cumplen con estándares de calidad del sector construcción, ideales para proyectos exigentes.",
  icons: {
    icon: "/logoicono.ico", // o favicon.svg, favicon.png, etc.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
