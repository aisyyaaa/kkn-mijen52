import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import LegalBasisSection from "@/components/LegalBasisSection";
import TrashTabs from "./TrashTabs";
import StepTimeline from "./StepTimeline";

export const metadata: Metadata = {
  title: "Memilah Sampah - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pemilahan sampah organik dan anorganik oleh KKN-T IDBU 52 UNDIP di RW 5 Kelurahan Mijen.",
};

const infoCards = [
  {
    title: "Potensi",
    body: "Pemilahan sampah dari sumbernya berpotensi mendukung pengelolaan sampah organik dan anorganik secara lebih optimal apabila warga memahami cara dan manfaatnya.",
    tone: "emerald",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Permasalahan",
    body: "Praktik pemilahan sampah di RW 5 belum berjalan optimal karena pemahaman warga mengenai pemisahan sampah organik dan anorganik masih terbatas.",
    tone: "sky",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
      />
    ),
  },
];

const methods = [
  "Pengumpulan informasi praktik pemilahan sampah di RW 5",
  "Penyusunan materi edukasi mengenai jenis sampah serta tata cara pemilahan organik dan anorganik",
  "Pengembangan halaman web edukasi",
];

const targets = ["Masyarakat RW 5", "Pengelola Bank Sampah", "Kelurahan Mijen"];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-sky-200" />
      <span className="rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-200 to-emerald-200" />
    </div>
  );
}

export default function MemilahSampahPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FAF8] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-5 sm:px-6 md:pt-8 lg:px-8 lg:pb-16">
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

        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">Program Edukasi</span>
            </div>

            <h1 className="mt-5 max-w-3xl text-[2.55rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Pemilahan Sampah
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Organik &amp; Anorganik
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Edukasi tata cara pemilahan sampah dari sumbernya sebagai bagian dari Program Kampung Iklim
              (ProKlim) di RW 5 Kelurahan Mijen.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#materi"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(14,165,233,0.26)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                Mulai Belajar
              </a>
              <a
                href="#langkah"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-6 py-3 text-sm font-extrabold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
              >
                Lihat Langkah
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-3">
              <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-emerald-600">3</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Jenis Wadah</p>
              </div>
              <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-black text-sky-600">RW 5</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Lokasi</p>
              </div>
              <div className="col-span-2 rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur sm:col-span-1">
                <p className="text-2xl font-black text-teal-600">ProKlim</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Gerakan</p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-1">
            <div className="relative mx-auto flex max-w-[640px] items-center justify-center py-6">
              {/* soft glow shadow beneath the floating illustration */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.30),rgba(14,165,233,0.16)_60%,transparent_75%)] blur-2xl" />

              {/* sparkle accents */}
              <span className="animate-float-sparkle absolute right-[6%] top-[4%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(16,185,129,0.18)]" />
              <span
                className="animate-float-sparkle absolute left-[4%] top-[22%] h-2 w-2 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(14,165,233,0.18)]"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="animate-float-sparkle absolute bottom-[22%] right-[10%] h-2 w-2 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(16,185,129,0.18)]"
                style={{ animationDelay: "2.1s" }}
              />

              <div className="animate-float-card relative w-full">
                <Image
                  src="/images/waste-sorting-station-transparent.png"
                  alt="Ilustrasi stasiun pemilahan sampah dengan tiga tempat sampah, kompos, dan tanaman"
                  width={1448}
                  height={987}
                  priority
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_34px_rgba(15,23,42,0.20)]"
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
                  <span className="mt-1.5 text-xl font-black leading-none text-slate-950">3 Wadah</span>
                  <span className="mt-1 px-2 text-[10px] font-bold leading-tight text-slate-500">Organik · Anorganik · Residu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {infoCards.map((card) => {
            const isEmerald = card.tone === "emerald";
            return (
              <article
                key={card.title}
                className="group rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.10)] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ring-1 ${isEmerald
                      ? "bg-emerald-50 text-emerald-600 ring-emerald-100"
                      : "bg-sky-50 text-sky-600 ring-sky-100"
                      }`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.14em] text-slate-900">{card.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{card.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-sky-600">Lokasi</p>
              <p className="mt-3 text-xl font-black text-slate-950">RW 5</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">Kelurahan Mijen</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-600">Sasaran</p>
              <p className="mt-3 text-sm font-bold leading-6 text-slate-700">Warga, bank sampah, dan perangkat kelurahan</p>
            </div>
          </div>

          <article className="rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-emerald-600 to-sky-600 p-5 text-white shadow-[0_24px_70px_rgba(14,165,233,0.20)] sm:p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-emerald-100">Judul Program</p>
            <h2 className="mt-3 text-lg font-black leading-snug sm:text-xl">
              Penyusunan Halaman Web Edukasi Pemilahan Sampah Organik dan Anorganik sebagai Media Pendukung
              Pengelolaan Sampah dalam Program Kampung Iklim (ProKlim)
            </h2>
          </article>
        </div>

        <SectionLabel>Program Kerja</SectionLabel>

        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Metode</h2>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {methods.map((method, index) => (
                <div key={method} className="rounded-2xl border border-emerald-100 bg-emerald-50/55 p-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{method}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-emerald-600">Luaran</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950">Media edukasi yang mudah dibuka warga</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Halaman web edukasi mengenai jenis-jenis sampah serta tata cara pemilahan sampah organik dan anorganik.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {targets.map((target) => (
                <span key={target} className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
                  {target}
                </span>
              ))}
            </div>
          </article>
        </div>

        <SectionLabel>Materi Edukasi Interaktif</SectionLabel>

        <div id="materi" className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <TrashTabs />
          <div id="langkah">
            <StepTimeline />
          </div>
        </div>

        <article className="mt-8 overflow-hidden rounded-[2rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-lime-50 p-6 shadow-[0_24px_70px_rgba(146,64,14,0.10)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">
                Langkah Selanjutnya
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Sampah sudah dipilah, sekarang olah yang organik
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                Pilih sisa buah dan sayuran yang sesuai, lalu pelajari komposisi dan proses fermentasinya melalui pelatihan eco-enzyme.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-slate-500">
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Pilah sampah</span>
                <span aria-hidden>→</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Ambil bahan organik</span>
                <span aria-hidden>→</span>
                <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Buat eco-enzyme</span>
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

        <SectionLabel>Dasar Hukum</SectionLabel>

        <LegalBasisSection
          intro="Memilah sampah bukan sekadar imbauan — kewajiban ini punya dasar hukum yang jelas di tingkat undang-undang."
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

        <Link
          href="/"
          className="mx-auto mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 sm:w-auto"
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
