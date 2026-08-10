import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Proklim Mijen - KKN IDBU 52 UNDIP",
  description:
    "Program kerja nyata tim KKN-IDBU 52 Universitas Diponegoro dalam mendukung adaptasi dan mitigasi perubahan iklim yang berkelanjutan di Kelurahan Mijen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className="bg-[#F5FAF8] text-slate-950 font-sans antialiased min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <PageBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
