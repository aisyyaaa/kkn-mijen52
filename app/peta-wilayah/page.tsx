import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peta Wilayah - KKN-T IDBU 52 UNDIP",
  description: "Peta wilayah RW 05 Kelurahan Mijen sebagai bagian dari Program Kampung Iklim (ProKlim).",
};

export default function PetaWilayahPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FAF8] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />

      <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-5 sm:px-6 md:pt-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-emerald-600">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Beranda
          </Link>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 ring-1 ring-emerald-100">
            ProKlim Mijen
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">Profil Wilayah</span>
        </div>

        <h1 className="mt-5 max-w-3xl text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-5xl">
          Peta Wilayah dan mitigasi
          <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
            RW 05 Kelurahan Mijen
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Gambaran wilayah cakupan Program Kampung Iklim (ProKlim) di RW 05 Kelurahan Mijen, Kecamatan Mijen, Kota
          Semarang.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-4">
          <Image
            src="/images/peta-haedar-2.jpeg"
            alt="Peta potensi kebakaran lahan RW 05 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang"
            width={1600}
            height={1130}
            priority
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-6 rounded-3xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Peta Fasilitas Pendukung Program ProKlim RW 05 Kelurahan Mijen</h2>
          <div className="mt-4 flex flex-col gap-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Peta ini menunjukkan sebaran fasilitas yang mendukung pelaksanaan Program Kampung Iklim (ProKlim)
              di RW 05 Kelurahan Mijen. Fasilitas yang ditampilkan meliputi sendang, komposter, bank sampah,
              Taman Kanak-Kanak (TK), dan puskesmas.
            </p>
            <p>
              Dari peta terlihat bahwa sebagian besar fasilitas berada di bagian utara RW 05, sedangkan dua
              sendang berada di sisi timur kawasan. Informasi ini membantu masyarakat mengetahui lokasi
              fasilitas lingkungan yang dapat dimanfaatkan dalam kegiatan konservasi air, pengelolaan sampah,
              serta edukasi lingkungan.
            </p>
            <p>
              Hasil pemetaan menunjukkan bahwa sebagian besar wilayah RW 05 memiliki potensi kerawanan rendah
              hingga sedang, namun terdapat beberapa titik dengan potensi lebih tinggi yang perlu mendapat perhatian,
              terutama saat musim kemarau dan pada area yang masih terdapat kebiasaan membakar sampah.
            </p>
            <p>
              Peta ini juga menjadi dasar dalam penyusunan program kerja KKN, seperti revitalisasi sendang, pembuatan
              komposter, edukasi pengelolaan sampah organik, serta penyusunan rute kegiatan dan penyebaran media edukasi
              agar pelaksanaannya lebih tepat sasaran dan mudah dijangkau oleh masyarakat.
            </p>
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-4">
          <Image
            src="/images/peta-wilayah.jpeg"
            alt="Peta potensi kebakaran lahan RW 05 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang"
            width={1600}
            height={1130}
            priority
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>

        <div className="mt-6 rounded-3xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Tentang Peta</h2>
          <div className="mt-4 flex flex-col gap-4 text-sm leading-7 text-slate-600 sm:text-base">
            <p>
              Peta ini disusun sebagai salah satu upaya mitigasi kebakaran lahan di RW 05 Kelurahan Mijen.
              Pemetaan dilakukan menggunakan citra satelit Sentinel-2A dengan analisis Normalized Burn
              Ratio (NBR) dan Differenced Normalized Burn Ratio (dNBR) untuk mengidentifikasi tingkat potensi
              kerawanan kebakaran berdasarkan kondisi vegetasi dan tutupan lahan.
            </p>
            <p>
              Pada peta, warna biru menunjukkan potensi kerawanan rendah, kuning menunjukkan potensi sedang,
              sedangkan merah menunjukkan potensi tinggi. Selain itu, peta juga menampilkan lokasi fasilitas
              penting seperti sendang, bank sampah, komposter, puskesmas, dan taman kanak-kanak.
            </p>
            <p>
              Hasil pemetaan menunjukkan bahwa sebagian besar wilayah RW 05 memiliki potensi kerawanan rendah
              hingga sedang, namun terdapat beberapa titik dengan potensi lebih tinggi yang perlu mendapat perhatian,
              terutama saat musim kemarau dan pada area yang masih terdapat kebiasaan membakar sampah.
            </p>
            <p>
              Peta ini diharapkan dapat menjadi acuan dalam menentukan lokasi prioritas untuk kegiatan edukasi,
              pemasangan papan imbauan, serta penyusunan langkah-langkah mitigasi kebakaran sehingga masyarakat
              dapat lebih waspada dan berperan aktif dalam mencegah terjadinya kebakaran lahan.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mx-auto mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 sm:w-auto"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
