import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peta Wilayah - KKN-T IDBU 52 UNDIP",
  description: "Peta wilayah RW 05 Kelurahan Mijen sebagai bagian dari Program Kampung Iklim (ProKlim).",
};

export default function PetaWilayahPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-5xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:px-8">
        

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
      </section>
    </main>
  );
}
