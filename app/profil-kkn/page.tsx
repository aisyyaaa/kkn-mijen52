import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profil KKN Kami - KKN-T IDBU 52 UNDIP",
  description: "Profil Tim KKN-T IDBU 52 UNDIP di Kelurahan Mijen.",
};

export default function ProfilKknPage() {
  return (
    <main className="w-full min-h-screen pb-12 overflow-x-hidden">
      <section className="px-5 pt-6 pb-8 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2 mb-5">
          <Link href="/" className="text-xs text-gray-400 hover:text-green-500 transition-colors">
            Beranda
          </Link>
          <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-xs text-green-600 font-medium">Profil KKN Kami</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold text-green-700 tracking-wider">Tim KKN</span>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 leading-snug mb-3">
          Profil KKN-T <span className="text-green-500">IDBU 52 UNDIP</span>
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Halaman ini masih dalam penyusunan. Konten profil tim akan segera dilengkapi.
        </p>
      </section>

      <div className="px-5 pt-6 flex flex-col gap-5">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed">
            Tim KKN-T IDBU 52 Universitas Diponegoro menjalankan program pengabdian masyarakat di Kelurahan Mijen,
            mendukung Program Kampung Iklim (ProKlim) melalui edukasi lingkungan dan pengelolaan sampah bersama
            warga.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-gray-600 hover:text-green-600 hover:border-green-300 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
