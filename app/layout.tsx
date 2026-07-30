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
      <body className="bg-[#F5FAF8] text-slate-950 font-sans antialiased min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
