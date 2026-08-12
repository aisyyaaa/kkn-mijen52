import type { Metadata } from "next";
import Image from "next/image";
import CoffeeBiopori from "./CoffeeBiopori";
import BioporiBookSection from "./BioporiBookSection";

export const metadata: Metadata = {
  title: "Edukasi Biopori & Perkebunan Kopi - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pembuatan lubang biopori sebagai media pengelolaan sampah organik, penerapan khusus pada pohon kopi, serta konservasi air di Kelurahan Mijen.",
};

/* ── Data ── */

const urgencies = [
  {
    num: "01",
    title: "Atasi Genangan Air",
    desc: "Mempercepat peresapan air hujan langsung ke dalam tanah saat musim hujan sehingga lingkungan permukiman & kebun bebas dari genangan.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M12 7a5 5 0 00-4.9 6H6a4 4 0 004 4h4a4 4 0 004-4h-1.1A5 5 0 0012 7z" />
    ),
  },
  {
    num: "02",
    title: "Isi Cadangan Air Tanah",
    desc: "Menambah cadangan air bawah tanah untuk sumur warga serta menjaga kelembaban vegetasi pekarangan & perkebunan saat kemarau.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    num: "03",
    title: "Olah Sampah Jadi Kompos",
    desc: "Mengubah sampah organik dapur & sisa kulit kopi menjadi pupuk kompos alami kaya hara langsung di lokasi tanpa biaya.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    ),
  },
  {
    num: "04",
    title: "Restorasi Biologi Tanah",
    desc: "Memancing cacing tanah & mikroorganisme pembuat terowongan alami yang menggemburkan tanah dan meningkatkan aerasi perakaran.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const bioporiSteps = [
  {
    num: "01",
    title: "Siapkan Alat & Tentukan Lokasi",
    desc: "Pilih lokasi resapan di pekarangan (minimal 50 cm dari pondasi) atau 50–100 cm dari pohon kopi. Siapkan bor tanah/linggis dan pipa PVC Ø 10 cm berlubang.",
    image: "/images/biopori-tools.png",
  },
  {
    num: "02",
    title: "Buat Lubang Silinder (50–100 cm)",
    desc: "Gali lubang vertikal tegak lurus ke dalam tanah sedalam 50–100 cm. Basahi tanah dengan sedikit air jika tekstur tanah terlalu keras.",
    image: "/images/biopori-digging.png",
  },
  {
    num: "03",
    title: "Pasang Pipa PVC & Penutup",
    desc: "Masukkan pipa PVC agar dinding tanah tidak longsor. Buat mulut pipa menonjol 2-3 cm dari permukaan tanah lalu pasang penutup kawat kasa/PVC berlubang.",
    image: null,
  },
  {
    num: "04",
    title: "Pengisian Sampah Organik",
    desc: "Isi lubang secara bertahap dengan sisa dapur, dedaunan, kulit buah kopi (pulp), atau ampas teh/kopi. Cacah bahan berukuran besar agar cepat terurai.",
    image: null,
  },
  {
    num: "05",
    title: "Perawatan & Panen Kompos",
    desc: "Selalu tutup kembali lubang setelah diisi. Setiap 2–3 bulan, panen kompos yang sudah matang berwarna hitam untuk pupuk tanaman atau pohon kopi.",
    image: "/images/biopori-complete.png",
  },
];

const allowedTrash = [
  "Sisa sayuran mentah & matang",
  "Kulit buah-buahan & kulit kopi (pulp)",
  "Daun kering & pangkasan rumput",
  "Ampas kopi & ampas teh",
  "Cangkang telur (remukkan halus)",
  "Sisa nasi & roti basi",
];

const forbiddenTrash = [
  "Plastik & kantong saset",
  "Kaca, kaleng, & kawat",
  "Daging mentah (mengundang tikus)",
  "Minyak goreng bekas",
  "Bahan kimia (detergen, pestisida)",
  "Sampah medis & obat kedaluwarsa",
];

const keyTips = [
  {
    title: "Seimbangkan Kelembaban",
    desc: "Campurkan sampah dapur basah dengan dedaunan kering atau kulit kopi agar lubang tidak terlalu becek.",
  },
  {
    title: "Cacah Sampah Besar",
    desc: "Potong sisa makanan/kebun yang berukuran besar agar cacing & mikroorganisme lebih cepat bekerja.",
  },
  {
    title: "Pastikan Penutup Rapat",
    desc: "Gunakan penutup berlubang yang kokoh agar aman dilewati dan terhindar dari masuknya genangan berlebih.",
  },
];

const envImpacts = [
  "Mengurangi genangan air hujan di sekitar pemukiman dan lahan perkebunan warga Kelurahan Mijen.",
  "Menjaga kelembaban subsoil dan meningkatkan cadangan air tanah saat musim kemarau.",
  "Mendorong daur ulang limbah organik (sampah dapur & kulit kopi) secara efisien di tempat.",
  "Mewujudkan lingkungan Kelurahan Mijen yang lebih bersih, hijau, dan subur.",
];

/* ── Component ── */

export default function AksiBioporiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:px-8">

        {/* ─── 1. HERO SECTION ─── */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.06)] backdrop-blur-md sm:p-8 md:p-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D7C66]/20 bg-[#0D7C66]/5 px-3.5 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0D7C66] shadow-[0_0_0_5px_rgba(13,124,102,0.15)]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0D7C66] sm:text-[11px]">
                Edukasi Biopori &amp; Perkebunan
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-[-0.03em] text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
              Genangan Air &amp; Sampah Organik?
              <span className="mt-2 block bg-gradient-to-r from-[#0D7C66] via-[#1B9C85] to-[#1B6B93] bg-clip-text text-transparent">
                Biopori Solusinya
              </span>
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
              Saat musim hujan, air sering kali menggenang karena kurangnya resapan. Di sisi lain, sampah dapur dan sisa kulit kopi terbuang begitu saja tanpa dimanfaatkan.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 md:text-lg">
              <strong>Lubang Biopori</strong> hadir sebagai solusi sederhana yang mempercepat air hujan meresap ke dalam tanah sekaligus mengolah sampah organik menjadi pupuk kompos alami bagi pekarangan dan <strong>pohon kopi</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-[#0D7C66]/20 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-bold text-[#0D7C66]">
                💧 Resapan Air Cepat
              </span>
              <span className="rounded-full border border-[#1B6B93]/20 bg-sky-50/80 px-3.5 py-1.5 text-xs font-bold text-[#1B6B93]">
                🌱 Kompos Alami Gratis
              </span>
              <span className="rounded-full border border-[#0D7C66]/20 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-bold text-[#0D7C66]">
                ☕ Cocok Pohon Kopi
              </span>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#buku-saku"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0D7C66] to-[#1B9C85] px-6 py-3.5 text-xs font-extrabold text-white shadow-[0_14px_32px_rgba(13,124,102,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(13,124,102,0.32)] sm:text-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Baca Buku Saku Digital
              </a>
              <a
                href="/pdf/buku-panduan-biopori.pdf"
                download="Buku_Panduan_Biopori_KKN_IDBU_52.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 backdrop-blur px-5 py-3.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:text-[#0D7C66] sm:text-sm"
              >
                <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Unduh PDF
              </a>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 flex justify-center">
            <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center py-2 sm:py-4">
              {/* soft glow shadow */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-20 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,124,102,0.25),rgba(27,107,147,0.15)_60%,transparent_75%)] blur-2xl" />

              {/* Sparkle Floating Badges */}
              <div className="absolute -top-2 -left-2 z-20 hidden sm:flex items-center gap-1.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md">
                <span className="text-base">🌱</span>
                <span className="text-xs font-extrabold text-slate-800">100% Organik</span>
              </div>

              <div className="absolute -bottom-2 -right-2 z-20 hidden sm:flex items-center gap-1.5 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md">
                <span className="text-base">💧</span>
                <span className="text-xs font-extrabold text-[#0D7C66]">Resapan Subsoil</span>
              </div>

              <div className="animate-float-card relative flex w-full justify-center rounded-3xl bg-white p-3 shadow-md border border-slate-100">
                <Image
                  src="/images/biopori-hero.png"
                  alt="Lubang Biopori"
                  width={800}
                  height={800}
                  className="relative z-10 h-auto w-full max-w-[360px] object-cover sm:max-w-[390px] rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. URGENSI & MANFAAT UTAMA ─── */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center">
            <span className="rounded-full bg-[#0D7C66]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20 sm:text-[11px]">
              Tujuan &amp; Urgensi
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-4xl">
              Mengapa Kita Perlu Biopori?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Satu langkah sederhana dengan empat dampak positif utama bagi lingkungan, tanah, dan kebun.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {urgencies.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0D7C66]/40 hover:shadow-xl"
              >
                {/* Top colored accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0D7C66] to-[#1B6B93]" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#0D7C66] transition-colors group-hover:bg-[#0D7C66] group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-black text-slate-300 group-hover:text-[#0D7C66]/40 transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 3. PENGGUNAAN BAGI POHON KOPI ─── */}
        <CoffeeBiopori />

        {/* ─── 4. ALUR PEMBUATAN & OPERASIONAL ─── */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center">
            <span className="rounded-full bg-[#1B6B93]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#1B6B93] ring-1 ring-[#1B6B93]/20 sm:text-[11px]">
              Panduan Praktis
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-4xl">
              Alur Pembuatan &amp; Penggunaan Biopori
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              5 tahapan lengkap mulai dari pembuatan lubang hingga pemanenan kompos secara berkelanjutan.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {bioporiSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:shadow-md lg:p-8"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D7C66] to-[#1B6B93] text-base font-extrabold text-white shadow-md sm:h-12 sm:w-12 sm:text-lg">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900 sm:text-lg">{step.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">{step.desc}</p>
                    </div>
                  </div>
                  {step.image && (
                    <div className="overflow-hidden rounded-2xl border border-slate-100 mt-2">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col justify-center rounded-3xl border border-[#0D7C66]/20 bg-gradient-to-br from-[#0D7C66]/10 to-[#1B6B93]/10 p-6 text-slate-900 lg:p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold text-[#0D7C66] w-fit shadow-sm">
                  <span>📌</span> Rekomendasi Jumlah Lubang
                </div>
                <p className="mt-4 text-xs leading-6 text-slate-700 sm:text-sm">
                  • <strong>Pekarangan Rumah:</strong> 1 lubang biopori per 50 m² area kedap air.<br />
                  • <strong>Pohon Kopi:</strong> 2–4 lubang biopori melingkar di bawah tajuk luar daun (50–100 cm dari batang).
                </p>
              </div>
            </div>
          </div>

          {/* ─── 4B. RUTINITAS PENGISIAN, PANEN & PENGGUNAAN KOMPOS ─── */}
          <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-[#0D7C66]/20 bg-gradient-to-br from-emerald-50/60 via-white to-sky-50/60 p-6 shadow-md backdrop-blur-md sm:p-8 md:p-10">
            <div className="flex flex-col border-b border-slate-200/70 pb-6">
              <span className="rounded-full bg-[#0D7C66]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20 w-fit">
                Panduan Operasional Rutin
              </span>
              <h3 className="mt-3 text-xl font-black text-slate-900 sm:text-2xl md:text-3xl">
                Pengisian, Panen &amp; Penggunaan Kompos
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
                Tata cara pengisian berkala, waktu pengerukan kompos, dan cara pengaplikasian pupuk bagi tanaman &amp; pohon kopi.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* Card 1: Diisi Setiap Kapan? */}
              <div className="flex flex-col justify-between rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-xl">📅</span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">Diisi Setiap Kapan?</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D7C66]">Frekuensi Pengisian</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-xs leading-6 text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0D7C66] font-bold text-sm">•</span>
                      <span><strong>Rutin Harian:</strong> Isikan sampah dapur/kulit kopi <strong>setiap hari atau 2-3 hari sekali</strong> saat ada sampah baru.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0D7C66] font-bold text-sm">•</span>
                      <span><strong>Saat Penuh:</strong> Jika lubang penuh sampai mendekati mulut pipa, biarkan terurai (2-3 bulan) dan gunakan lubang biopori cadangan.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 rounded-2xl bg-emerald-50/80 p-3 text-[11px] font-semibold text-[#0D7C66] border border-emerald-100">
                  💡 Sampah akan menyusut secara alami saat terurai mikroorganisme.
                </div>
              </div>

              {/* Card 2: Cara Mengambil Pupuk */}
              <div className="flex flex-col justify-between rounded-3xl border border-amber-200/80 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-xl">🌾</span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">Cara Mengambil Pupuk</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Panen Kompos Matang</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-xs leading-6 text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-800 font-bold text-sm">•</span>
                      <span><strong>Waktu Panen:</strong> Setelah <strong>2–3 bulan</strong>, sampah bagian bawah berubah menjadi kompos hitam remah.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-800 font-bold text-sm">•</span>
                      <span><strong>Teknik Pengerukan:</strong> Gunakan kawat pengait, bor tanah, atau centong semen untuk mengeruk kompos dasar lubang.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-amber-800 font-bold text-sm">•</span>
                      <span><strong>Sampah Baru:</strong> Sisihkan sementara sampah bagian atas yang baru dimasukkan, lalu masukkan kembali.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 rounded-2xl bg-amber-50/80 p-3 text-[11px] font-semibold text-amber-800 border border-amber-100">
                  ✨ Ciri kompos matang: Hitam gembur dan berbau segar tanah humus.
                </div>
              </div>

              {/* Card 3: Cara Menggunakannya */}
              <div className="flex flex-col justify-between rounded-3xl border border-sky-200/80 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-xl">🪴</span>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900">Cara Menggunakannya</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B6B93]">Aplikasi Pada Tanaman</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 text-xs leading-6 text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#1B6B93] font-bold text-sm">•</span>
                      <span><strong>Pohon Kopi:</strong> Taburkan 1–2 kg kompos matang mengelilingi tajuk luar pohon kopi atau biarkan terurai alami di lubang.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#1B6B93] font-bold text-sm">•</span>
                      <span><strong>Pot &amp; Pekarangan:</strong> Campurkan kompos dengan tanah pekarangan rasio <strong>1 : 2</strong> sebagai media tanam subur.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 rounded-2xl bg-sky-50/80 p-3 text-[11px] font-semibold text-[#1B6B93] border border-sky-100">
                  🌱 Bebas bahan kimia, menyuburkan akar tanaman secara alami.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. PILAH SAMPAH & TIPS OPERASIONAL ─── */}
        <section className="mt-12 sm:mt-16">
          <div className="text-center">
            <span className="rounded-full bg-[#0D7C66]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20 sm:text-[11px]">
              Kriteria &amp; Tips
            </span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-4xl">
              Panduan Pilah Sampah Biopori
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Pastikan hanya memasukkan sampah organik yang aman agar proses penguraian lancar dan bebas bau.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Allowed */}
            <div className="rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-b from-emerald-50/30 via-white to-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0D7C66] text-white font-bold text-base shadow-sm">
                  ✓
                </span>
                <div>
                  <h3 className="text-base font-black text-[#0D7C66] sm:text-lg">Bahan yang Boleh Masuk</h3>
                  <p className="text-[11px] text-slate-500">Mudah terurai secara alami oleh mikroorganisme</p>
                </div>
              </div>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {allowedTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-[#0D7C66]/15 bg-[#0D7C66]/5 px-3.5 py-2.5 text-xs text-[#0D7C66] font-semibold">
                    <span>✅</span>
                    <span>{trash}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forbidden */}
            <div className="rounded-[2.5rem] border border-rose-200/70 bg-gradient-to-b from-rose-50/30 via-white to-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-rose-600 text-white font-bold text-base shadow-sm">
                  ✕
                </span>
                <div>
                  <h3 className="text-base font-black text-rose-700 sm:text-lg">Bahan Dilarang Masuk</h3>
                  <p className="text-[11px] text-slate-500">Menyumbat lubang &amp; beracun bagi cacing tanah</p>
                </div>
              </div>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {forbiddenTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-rose-200 bg-rose-50/60 px-3.5 py-2.5 text-xs text-rose-700 font-semibold">
                    <span>❌</span>
                    <span>{trash}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Tips Grid */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {keyTips.map((tip, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm">
                <span className="text-xs font-bold text-[#0D7C66]">💡 Tips Kunci {idx + 1}</span>
                <h4 className="mt-1.5 text-xs font-bold text-slate-900 sm:text-sm">{tip.title}</h4>
                <p className="mt-1 text-[11px] leading-5 text-slate-600 sm:text-xs">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 6. BUKU SAKU BIOPORI ─── */}
        <BioporiBookSection />

        {/* ─── 7. DAMPAK LINGKUNGAN & HARAPAN PENUTUP ─── */}
        <section className="mt-12 sm:mt-16 mb-4 overflow-hidden rounded-[2.5rem] border border-[#0D7C66]/20 bg-gradient-to-br from-[#0D7C66] via-[#1B9C85] to-[#1B6B93] p-6 text-center text-white shadow-2xl sm:p-10 lg:p-12">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-sm sm:text-[11px]">
            Dampak &amp; Harapan
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            Langkah Kecil, Manfaat Besar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-emerald-50 sm:text-base sm:leading-8">
            Penerapan biopori di pemukiman dan lahan perkebunan warga Kelurahan Mijen memberikan dampak nyata bagi kelestarian lingkungan.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {envImpacts.map((impact, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 backdrop-blur-md border border-white/15">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                  ✓
                </span>
                <span className="text-xs leading-5 text-white/95">{impact}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur-md sm:p-6 text-center">
            <p className="text-xs leading-6 text-white/95 italic sm:text-base sm:leading-8">
              &ldquo;Melalui pembuatan lubang biopori, sampah dapur &amp; sisa kulit kopi dapat terolah secara alami, tanah perkebunan menjadi lebih subur, dan air hujan teresap sempurna. Semoga ini menjadi kebiasaan berkelanjutan yang membawa manfaat besar bagi warga Mijen.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
