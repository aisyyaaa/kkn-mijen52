import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="bg-[#f4f7f9] font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
