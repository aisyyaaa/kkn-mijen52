import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LegalBasisSection from "@/components/LegalBasisSection";
import BookViewer from "@/components/BookViewer";
import TrashTabs from "./TrashTabs";
import StepTimeline from "./StepTimeline";

export const metadata: Metadata = {
  title: "Memilah Sampah - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi tata cara pemilahan sampah organik, anorganik, dan residu dari sumbernya oleh KKN-T IDBU 52 UNDIP di RW 5 Kelurahan Mijen.",
};

const problems = [
  {
    title: "Volume Sampah Tinggi",
    desc: "Volume sampah rumah tangga harian sangat tinggi dan sebagian besar masih tercampur dari dapur.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    )
  },
  {
    title: "Bau & Gas Metana di TPA",
    desc: "Sampah organik yang membusuk di TPA tanpa oksigen menghasilkan bau tak sedap dan emisi gas metana.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    )
  },
  {
    title: "Beban Kapasitas TPA",
    desc: "Kapasitas TPA Mijen terus menyusut akibat beban sampah yang tidak terkelola langsung dari sumbernya.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 6-3 3 1.5v10.5M9 20l6-3m-6 3V2m6 15V5m0 12l5.447 2.724a1 1 0 001.006 0L21 18.5" />
    )
  },
  {
    title: "Potensi Daur Ulang Terbuang",
    desc: "Banyak sampah bernilai ekonomi seperti daur ulang dan bahan kompos terbuang sia-sia karena tidak dipilah.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    )
  }
];

const methods = [
  "Pengumpulan informasi praktik pemilahan sampah di RW 5 Kelurahan Mijen",
  "Penyusunan materi edukasi mengenai jenis sampah serta tata cara pemilahan organik, anorganik, dan residu",
  "Pengembangan halaman web edukasi interaktif dan penyusunan modul buku saku digital"
];

const targets = ["Masyarakat RW 5", "Pengelola Bank Sampah", "Kelurahan Mijen"];

const allowedOrganic = [
  "Sisa sayuran mentah & matang",
  "Kulit buah-buahan & biji",
  "Daun kering & rumput taman",
  "Ampas kopi & ampas teh",
  "Cangkang telur (dihancurkan)",
  "Sisa nasi, roti, & makanan"
];

const allowedInorganic = [
  "Botol & gelas plastik bersih",
  "Kardus, kertas, & koran",
  "Kaleng minuman & makanan",
  "Botol & wadah beling/kaca",
  "Bungkus kemasan plastik tebal",
  "Peralatan plastik daur ulang"
];

const residueB3 = [
  "Popok bayi & pembalut bekas",
  "Pecahan kaca / beling tajam",
  "Bahan kimia (detergen/pestisida)",
  "Obat kedaluwarsa & masker",
  "Puntung rokok & pemantik",
  "Styrofoam bekas makanan"
];

const benefits = [
  { title: "Lingkungan Rumah Bebas Bau", desc: "Sampah organik yang dipisahkan dan langsung diolah mengeliminasi bau busuk serta mengusir lalat di pekarangan.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
  { title: "Tabungan Ekonomi dari Bank Sampah", desc: "Sampah anorganik seperti botol dan kardus dapat disetorkan ke Bank Sampah RW 5 menjadi nilai rupiah berharga.", color: "text-[#0284C7] bg-[#0284C7]/5 border-[#0284C7]/10" },
  { title: "Bahan Baku Kompos & Eco-Enzyme", desc: "Sisa dapur dan buah menjadi bahan gratis berkualitas tinggi untuk pembuatan pupuk alami dan pembersih hijau.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" }
];

const tips = [
  "Sediakan minimal 3 wadah sampah terpisah di rumah (Organik, Anorganik, Residu).",
  "Bilas wadah plastik atau kaleng hingga bersih dan keringkan sebelum disetorkan ke Bank Sampah.",
  "Cacah sampah organik menjadi ukuran lebih kecil agar mempermudah pengomposan.",
  "Jangan mencampur bahan berbahaya (baterai, obat, cairan kimia) ke dalam tempat sampah umum.",
  "Ajak seluruh anggota keluarga untuk disiplin memilah sampah sejak dari dapur.",
  "Manfaatkan sampah organik untuk Teba Modern, Komposter, atau bahan Eco-Enzyme."
];

const envImpacts = [
  "Mengurangi beban penumpukan sampah di TPA Mijen hingga 60%.",
  "Mencegah pencemaran air tanah dari resapan air lindi sampah busuk.",
  "Menekan emisi gas rumah kaca (metana) yang memicu pemanasan global.",
  "Mendukung terwujudnya RW 5 Kelurahan Mijen yang bersih, asri, dan mandiri ProKlim."
];

export default function MemilahSampahPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-stone-900">
      {/* Earthy Background Decor matching Teba style with Emerald & Sky accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.10),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.10),transparent_30%),linear-gradient(180deg,#FAF9F5_0%,#F3EFE9_48%,#FAF9F5_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:px-8">

        {/* Hero Section */}
        <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200/50 bg-white/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.02)] backdrop-blur-md sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-600 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-800">Program Edukasi Warga RW 5</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-6xl">
              Pemilahan Sampah
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Organik &amp; Anorganik
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              <strong>Pemilahan Sampah</strong> dari sumbernya adalah langkah pertama dan terpenting dalam pengelolaan lingkungan hidup yang mandiri dan berkelanjutan di Kelurahan Mijen.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              Dengan memisahkan sampah organik, anorganik, dan residu sejak di dapur, warga mendukung pengurangan sampah TPA, mengaktifkan Bank Sampah, serta menciptakan lingkungan yang bersih dan sehat.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#materi"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-sky-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(14,165,233,0.26)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Mulai Belajar Pemilahan
              </a>
              <a
                href="#buku-saku"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-sm font-extrabold text-stone-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-stone-50 hover:text-emerald-700"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Buku Saku (PDF)
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative mx-auto flex max-w-[480px] items-center justify-center py-4 w-full">
              {/* soft glow shadow beneath floating photo */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.25),rgba(14,165,233,0.12)_60%,transparent_75%)] blur-2xl" />

              {/* sparkle accents */}
              <span className="animate-float-sparkle absolute right-[4%] top-[4%] h-2.5 w-2.5 rounded-full bg-emerald-600 shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(16,185,129,0.2)]" />
              <span
                className="animate-float-sparkle absolute left-[2%] top-[24%] h-2 w-2 rounded-full bg-sky-600 shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(14,165,233,0.2)]"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="animate-float-sparkle absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-teal-600 shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(20,184,166,0.2)]"
                style={{ animationDelay: "2.1s" }}
              />

              <div className="animate-float-card relative w-full flex justify-center">
                <Image
                  src="/images/waste-sorting-station-transparent.png"
                  alt="Ilustrasi stasiun pemilahan sampah dengan tiga tempat sampah"
                  width={1448}
                  height={987}
                  priority
                  className="relative z-10 h-auto w-full max-w-[420px] object-contain drop-shadow-[0_30px_34px_rgba(15,23,42,0.18)]"
                />

                <div className="absolute -bottom-3 -right-2 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/90 bg-white/90 text-center shadow-[0_20px_54px_rgba(15,23,42,0.16)] backdrop-blur sm:h-32 sm:w-32">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-sm">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </span>
                  <span className="mt-1.5 text-lg font-black leading-tight text-stone-950">3 Wadah</span>
                  <span className="mt-1 px-2 text-[10px] font-bold leading-tight text-stone-500">Organik · Anorganik · Residu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Pemilahan Sampah Penting? */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-700/20">
              Latar Belakang &amp; Urgensi
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Mengapa Pemilahan Sampah Penting?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Praktik pemilahan dari rumah tangga menyelesaikan masalah penumpukan sampah dan membuka peluang daur ulang yang bernilai tinggi.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {problem.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{problem.title}</h3>
                <p className="mt-2 text-xs leading-6 text-stone-500">{problem.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Highlight banner */}
          <div className="mt-8 rounded-[2rem] border border-emerald-600/10 bg-gradient-to-r from-emerald-600/5 to-sky-600/5 p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold leading-relaxed text-emerald-800 sm:text-base">
              💡 <strong>Solusi:</strong> Dengan memisahkan sampah organik, anorganik, dan residu dari dapur, warga RW 5 Kelurahan Mijen dapat langsung mengolah sampah organik menjadi kompos/eco-enzyme dan menyetorkan sampah anorganik ke Bank Sampah.
            </p>
          </div>
        </section>

        {/* Section: Metodologi & Luaran Program */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-sky-600/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700 ring-1 ring-sky-600/20">
              Metode &amp; Pelaksanaan
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Program Kerja Edukasi Pemilahan</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Rangkaian pelaksanaan edukasi yang dirancang oleh KKN-T IDBU 52 UNDIP untuk mendukung pengelolaan sampah di Kelurahan Mijen.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-black uppercase tracking-wider text-stone-900">Tahapan Metode</h3>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {methods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white shadow-sm">
                      {index + 1}
                    </span>
                    <p className="text-xs font-semibold leading-6 text-stone-700">{method}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div>
                <span className="rounded-full bg-teal-600/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-teal-700 ring-1 ring-teal-600/20">
                  Target &amp; Luaran
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900">Media Edukasi Digital &amp; Modul Panduan</h3>
                <p className="mt-3 text-xs leading-6 text-stone-600">
                  Halaman edukasi web interaktif dan buku saku digital yang mudah diakses warga melalui smartphone kapan pun dan di mana pun.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {targets.map((target) => (
                    <span key={target} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
                      🎯 {target}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-200/60 bg-emerald-50/70 p-4">
                <p className="text-xs font-semibold leading-relaxed text-emerald-800">
                  🌱 <strong>Dampak Luaran:</strong> Warga mempraktikkan pemilahan sampah organik &amp; anorganik secara mandiri, menurunkan tumpukan sampah liar dan meningkatkan nilai ekonomi melalui Bank Sampah.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Section: Materi Edukasi Interaktif */}
        <section id="materi" className="mt-16">
          <div className="text-center mb-8">
            <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-700/20">
              Materi Edukasi Interaktif
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Kenali Jenis Sampah &amp; Tata Cara Memilah</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pilih tab di bawah untuk melihat rincian jenis sampah organik, anorganik, dan residu serta langkah praktis pemilahannya.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <TrashTabs />
            <div id="langkah">
              <StepTimeline />
            </div>
          </div>
        </section>

        {/* Section: Panduan Pilah Sampah (Teba Style 3-Column Grid) */}
        <section className="mt-16">
          <div className="text-center">
            <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-700/20">
              Panduan Kategori
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Panduan Pilah 3 Wadah Sampah</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pisahkan dengan tepat sejak di rumah agar sampah organik mudah diolah dan sampah anorganik siap didaur ulang.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Organik */}
            <div className="rounded-[2rem] border border-emerald-600/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 font-bold">
                  🌿
                </span>
                <h3 className="text-lg font-black text-emerald-800">Sampah Organik</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Sisa hayati yang mudah terurai secara alami. Olah menjadi kompos, Teba Modern, atau Eco-Enzyme.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {allowedOrganic.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-emerald-600/10 bg-emerald-50/60 px-3.5 py-2 text-xs text-emerald-800 font-semibold">
                    <span>✅</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Anorganik */}
            <div className="rounded-[2rem] border border-sky-600/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600/10 text-sky-700 font-bold">
                  ♻️
                </span>
                <h3 className="text-lg font-black text-sky-800">Sampah Anorganik</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Material kering daur ulang. Bersihkan dan kumpulkan untuk disetor ke Bank Sampah RW 5.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {allowedInorganic.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-sky-600/10 bg-sky-50/60 px-3.5 py-2 text-xs text-sky-800 font-semibold">
                    <span>📦</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Residu & B3 */}
            <div className="rounded-[2rem] border border-amber-600/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600/10 text-amber-800 font-bold">
                  ⚠️
                </span>
                <h3 className="text-lg font-black text-amber-900">Residu &amp; B3</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Sampah berbahaya atau sulit didaur ulang. Tempatkan dalam wadah tertutup rapat sebelum dibuang.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {residueB3.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-amber-600/10 bg-amber-50/60 px-3.5 py-2 text-xs text-amber-900 font-semibold">
                    <span>❌</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Manfaat & Dampak Lingkungan */}
        <section className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Keuntungan Rumah Tangga */}
          <div className="flex flex-col justify-center">
            <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-700/20 w-fit">
              Keuntungan Rumah Tangga
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-900">Manfaat Memilah Sampah Bagi Keluarga</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Kebiasaan memilah sampah memberikan nilai tambah ekonomis dan kebersihan lingkungan tempat tinggal.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200/50 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <span className={`inline-flex rounded-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${benefit.color}`}>
                    Manfaat
                  </span>
                  <h4 className="mt-2 text-base font-bold text-stone-900">{benefit.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dampak bagi Lingkungan Kelurahan */}
          <div className="flex flex-col justify-center">
            <div className="h-full rounded-[2rem] border border-emerald-600/20 bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 p-6 text-white shadow-lg sm:p-8 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FAF9F5] backdrop-blur-sm">
                  Kelurahan Mijen Sehat
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.02em]">Dampak bagi Lingkungan Kelurahan</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-100/90">
                  Gerakan pemilahan sampah secara konsisten di tingkat warga RW 5 memberikan kontribusi nyata bagi ProKlim Kelurahan Mijen:
                </p>

                <ul className="mt-6 flex flex-col gap-4">
                  {envImpacts.map((impact, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-stone-100">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-white/10 p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-xs leading-relaxed text-stone-100">
                  🌱 <strong>Mari Sukseskan Mijen ProKlim:</strong> Dari langkah sederhana memisahkan tempat sampah di rumah, kita menyelamatkan bumi dan menciptakan lingkungan yang hijau berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Tips Pemilahan Sampah */}
        <section className="mt-12 rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
          <span className="rounded-full bg-emerald-700/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-800 ring-1 ring-emerald-700/20">
            Tips Praktis
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Tips Pemilahan Sampah Efektif di Rumah</h2>
          <p className="mt-2 text-xs leading-6 text-stone-500">
            Terapkan langkah-langkah mudah berikut agar proses memilah sampah di rumah tangga berjalan lancar dan konsisten.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl border border-stone-200/80 bg-white p-4 shadow-sm">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span className="text-xs leading-relaxed text-stone-700">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Callout Link ke Eco-Enzyme */}
        <article className="mt-12 overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-lime-50 p-6 shadow-[0_24px_70px_rgba(146,64,14,0.10)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">
                Langkah Selanjutnya
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-stone-900 sm:text-3xl">
                Sampah sudah dipilah, sekarang olah yang organik!
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
                Pilih sisa buah dan sayuran yang sesuai, lalu pelajari komposisi dan proses fermentasinya menjadi cairan pembersih serbaguna melalui pelatihan Eco-Enzyme.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-stone-500">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Pilah sampah</span>
                <span aria-hidden>→</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Ambil bahan organik</span>
                <span aria-hidden>→</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Buat Eco-Enzyme</span>
              </div>
            </div>
            <Link
              href="/eco-enzim"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-lime-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(217,119,6,0.22)] transition hover:-translate-y-0.5"
            >
              Mulai Pelatihan Eco-Enzyme
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </article>

        {/* Section Buku Saku & PDF Terlampir */}
        <section id="buku-saku" className="mt-20">
          <BookViewer
            title="Buku Saku Pemilahan Sampah &amp; Pedoman Pengadaan"
            description="Baca modul panduan pemilahan sampah organik &amp; anorganik serta pedoman pengadaan material dari KKN-T IDBU 52 Universitas Diponegoro di Kelurahan Mijen."
            category="Media Edukasi &amp; Buku Saku Digital"
            pdfSrc="/pdf/buku-panduan-pengadaan.pdf"
            downloadFileName="Buku_Saku_Pemilahan_Sampah_KKN52.pdf"
            pagePathPrefix="/images/book/page_"
            totalPages={10}
          />
        </section>

        {/* Section: Dasar Hukum */}
        <section className="mt-20">
          <LegalBasisSection
            intro="Memilah sampah bukan sekadar imbauan — kewajiban ini memiliki dasar hukum yang kuat di tingkat undang-undang dan peraturan pemerintah."
            references={[
              {
                ref: "UU No. 18/2008 — Pasal 12 ayat (1)",
                note: "Setiap orang dalam mengelola sampah rumah tangga wajib dilakukan dengan cara yang berwawasan lingkungan — dasar filosofis pemilahan sampah dari sumbernya.",
              },
              {
                ref: "UU No. 32/2009 (PPLH) — Pasal 53 jo. Pasal 54",
                note: "Setiap orang yang melakukan pencemaran dan/atau kerusakan lingkungan wajib melakukan penanggulangan dan memulihkan fungsi lingkungan hidup.",
              },
            ]}
            rights={[
              "Mendapatkan pelayanan dalam pengelolaan sampah secara baik dan berwawasan lingkungan dari Pemerintah Daerah.",
              "Berpartisipasi dalam proses pengambilan keputusan, penyelenggaraan, dan pengawasan di bidang pengelolaan sampah.",
              "Memperoleh informasi yang benar, akurat, dan tepat waktu mengenai penyelenggaraan pengelolaan sampah.",
              "Mendapatkan perlindungan dan kompensasi karena dampak negatif akibat kegiatan tempat pemrosesan akhir sampah.",
              "Mengajukan usul, pertimbangan, dan/atau keberatan terhadap kebijakan pengelolaan sampah yang berdampak pada masyarakat.",
            ]}
            obligations={[
              "Mengelola sampah rumah tangga dengan cara yang berwawasan lingkungan (Pasal 12 ayat (1) UU No. 18 Tahun 2008), antara lain melalui pemilahan sampah organik, anorganik, dan bahan berbahaya.",
              "Berperan aktif dalam kegiatan pengurangan dan penanganan sampah, termasuk melalui bank sampah, komposting, dan daur ulang.",
            ]}
            moreHref="/dasar-hukum"
          />
        </section>

      </div>
    </main>
  );
}