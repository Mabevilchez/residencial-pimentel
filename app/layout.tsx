import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Residencial Pimentel – Departamentos frente al mar en Pimentel, Perú",
  description: "Preventa exclusiva de departamentos en primera línea frente al mar en el Malécón de Pimentel. 27 flats y 3 dúplex con vistas al Océano Pacífico.",
  keywords: ["departamentos Pimentel","departamentos frente al mar","inmobiliaria Chiclayo","preventa apartamentos Lambayeque","dúplex playa Pimentel","Residencial Pimentel","Costiera Realty"],
  openGraph: {
    title: "Residencial Pimentel – Where Life Meets the Ocean.",
    description: "Departamentos en primera línea frente al mar en el Malécón de Pimentel. Preventa exclusiva.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
