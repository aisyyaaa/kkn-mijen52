import type { Metadata } from "next";
import Link from "next/link";
import TrashTabs from "./TrashTabs";
import StepTimeline from "./StepTimeline";

export const metadata: Metadata = {
  title: "Memilah Sampah - KKN-T IDBU 52 UNDIP",
  description: "Edukasi pemilahan sampah organik dan anorganik oleh KKN-T IDBU 52 UNDIP di RW 5 Kelurahan Mijen.",
};

export default function MemilahSampahPage() {
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
          <span className="text-xs text-green-600 font-medium">Memilah Sampah</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold text-green-700 tracking-wider">Program Edukasi</span>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 leading-snug mb-3">
          Pemilahan Sampah
          <br />
          <span className="text-green-500">Organik &amp; Anorganik</span>
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Edukasi tata cara pemilahan sampah dari sumbernya sebagai bagian dari Program Kampung Iklim (ProKlim) di
          RW 5 Kelurahan Mijen.
        </p>
      </section>

      <div className="px-5 pt-6 flex flex-col gap-5">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Potensi</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pemilahan sampah dari sumbernya berpotensi mendukung pengelolaan sampah organik dan anorganik secara
            lebih optimal apabila warga memahami cara dan manfaatnya.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Permasalahan</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Praktik pemilahan sampah di RW 5 belum berjalan optimal karena pemahaman warga mengenai pemisahan
            sampah organik dan anorganik masih terbatas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Lokasi</span>
            </div>
            <p className="text-sm font-semibold text-gray-800">RW 5</p>
            <p className="text-xs text-gray-500 mt-0.5">Kelurahan Mijen</p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Narasumber</span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">Ketua RW 5, Pengelola Bank Sampah, Perangkat Kelurahan Mijen</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400 font-medium">Program Kerja</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-green-100 uppercase tracking-widest mb-1.5">Judul Program</p>
              <p className="text-sm font-bold leading-snug">
                Penyusunan Halaman Web Edukasi Pemilahan Sampah Organik dan Anorganik sebagai Media Pendukung
                Pengelolaan Sampah dalam Program Kampung Iklim (ProKlim)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Metode</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">Pengumpulan informasi praktik pemilahan sampah di RW 5</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Penyusunan materi edukasi mengenai jenis sampah serta tata cara pemilahan organik dan anorganik
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">Pengembangan halaman web edukasi</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-sm font-bold text-gray-900 tracking-wide uppercase">Sasaran</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Masyarakat RW 5
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Pengelola Bank Sampah
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Kelurahan Mijen
            </span>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z"
              />
            </svg>
            <h2 className="text-sm font-bold text-green-800 tracking-wide uppercase">Luaran</h2>
          </div>
          <p className="text-sm text-green-700 leading-relaxed">
            Halaman web edukasi mengenai jenis-jenis sampah serta tata cara pemilahan sampah organik dan anorganik.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400 font-medium">Materi Edukasi Interaktif</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <TrashTabs />
        <StepTimeline />

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
