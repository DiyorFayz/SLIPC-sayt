import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "SLIPC Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi",
  description:
    "SLIPC Innovatsion farmatsevtik birikmalar ilmiy laboratoriyasi — Toshkent farmatsevtika instituti. In Vitro, In Vivo, HPLC, Biokimyo va Fitokimyo.",
  keywords: [
    "SLIPC",
    "Toshkent Farmatsevtika Instituti",
    "Innovatsion farmatsevtik birikmalar",
    "Farmatsevtika laboratoriyasi",
    "Eksperimental Farmakologiya",
    "YUSSX",
    "HPLC",
    "Bioanalitika",
    "In Vitro",
    "Hujayra Biologiyasi",
    "In Vivo",
    "Antioksidant",
    "Liofilizatsiya",
  ],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  authors: [{ name: "SLIPC Ilmiy Kengashi (Scientific Board of SLIPC)" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#1B1F2A] antialiased selection:bg-[#24356F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
