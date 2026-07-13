import type { Metadata } from "next";
import Link from "next/link";
import BioporiSteps from "./BioporiSteps";
import OrganicWasteTabs from "./OrganicWasteTabs";
import BioporiMap from "./BioporiMap";

export const metadata: Metadata = {
  title: "Aksi Biopori - Edukasi Lubang Biopori | KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pembuatan lubang biopori sebagai media peningkatan pengetahuan masyarakat RW 7 tentang pengelolaan sampah organik dan konservasi air di Kelurahan Mijen.",
};

const BioporeCrossSection = () => {
  return (
    <div className="relative w-full max-w-[480px] h-[360px] bg-slate-900 rounded-[2rem] border border-slate-800 p-6 flex flex-col justify-end overflow-hidden shadow-2xl">
      {/* Sky & Air Top Line */}
      <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-b from-sky-950 to-slate-900/30" />
      
      {/* Ground Grass Level */}
      <div className="absolute top-16 inset-x-0 h-4 bg-emerald-600 rounded-t-sm z-10 flex items-center justify-between px-6 border-b border-emerald-700/30">
        <span className="text-[9px] text-emerald-100 font-bold uppercase tracking-wider opacity-90">Permukaan Tanah</span>
      </div>

      {/* Earth / Soil layers */}
      <div className="absolute top-20 inset-x-0 bottom-0 bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 z-0">
        {/* Earthworms indicator */}
        <span className="absolute left-6 top-10 text-base opacity-40 animate-pulse">🪱</span>
        <span className="absolute right-10 top-24 text-base opacity-30">🪱</span>
        
        {/* Soil Roots lines */}
        <div className="absolute left-3 top-2 w-10 h-12 border-l border-b border-amber-800/40 rounded-bl-xl" />
        <div className="absolute right-3 top-1 w-12 h-16 border-r border-b border-amber-800/40 rounded-br-xl" />
      </div>

      {/* PVC Biopore Pipe Model */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 bottom-0 bg-slate-800 border-x-4 border-slate-600 z-20 flex flex-col justify-between p-2 shadow-inner">
        {/* Pipe Cap (Ground level top) */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-[116%] h-3.5 bg-slate-600 border border-slate-700 rounded-full z-30 flex items-center justify-center shadow-md">
          <span className="text-[7px] text-slate-300 font-bold uppercase tracking-widest">Tutup Kasa</span>
        </div>

        {/* Small holes in PVC pipe for water infiltration */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-12 mt-6 opacity-40">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-black" />
          ))}
        </div>

        {/* Organic Waste Layers inside pipe */}
        <div className="mt-auto w-full h-[65%] bg-amber-900/60 rounded-t-md border-t-2 border-emerald-700 p-1 flex flex-col justify-end text-center z-10">
          <span className="text-[8px] text-emerald-200 font-black uppercase tracking-wider leading-none">Sampah</span>
          <span className="text-[7px] text-emerald-300/80 font-bold uppercase tracking-wider leading-none mt-1">Organik</span>
          
          {/* Microorganisms / compost elements */}
          <div className="flex justify-center gap-1 mt-1.5 mb-0.5">
            <span className="w-1 h-1 rounded-full bg-emerald-500/80 animate-ping" />
            <span className="w-0.5 h-0.5 rounded-full bg-yellow-500/80" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/80" />
          </div>
        </div>
      </div>

      {/* Infiltration flow animation */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {/* Droplets entering top */}
        <span className="absolute left-[48%] top-3 text-[10px] animate-bounce text-blue-400">💧</span>
        <span className="absolute left-[52%] top-6 text-xs animate-bounce text-blue-400" style={{ animationDelay: "0.25s" }}>💧</span>

        {/* Infiltration lines */}
        <div className="absolute left-[18%] top-28 flex items-center gap-1">
          <span className="text-xs animate-pulse text-blue-400">💧</span>
          <span className="text-[8px] text-slate-400">Pori Tanah</span>
        </div>
        <div className="absolute right-[14%] top-[55%] flex items-center gap-1 flex-row-reverse">
          <span className="text-xs animate-pulse text-blue-400" style={{ animationDelay: "0.5s" }}>💧</span>
          <span className="text-[8px] text-slate-400">Resapan Air</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-40 bg-slate-900/90 rounded-xl border border-slate-800 p-2 shadow-sm backdrop-blur-sm">
        <p className="text-[9px] font-black text-slate-200 leading-none">Skema Biopori</p>
        <p className="text-[8px] text-slate-400 mt-1">Visualisasi Penyerapan Air</p>
      </div>
    </div>
  );
};

export default function AksiBioporiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FAF8] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-5 sm:px-6 md:pt-8 lg:px-8 lg:pb-16">
        
        {/* ─── HERO ─── */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">
                Edukasi Warga RW 7
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-[2.55rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Lubang Biopori
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Resapkan Air, Olah Sampah
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Yuk kenali lubang biopori — solusi sederhana untuk mengurangi sampah organik dan
              mencegah genangan air di lingkungan kita!
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#tutorial"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(14,165,233,0.26)]"
              >
                🔧 Cara Membuat
              </a>
              <a
                href="#sampah"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-6 py-3 text-sm font-extrabold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
              >
                🥬 Sampah yang Cocok
              </a>
            </div>
          </div>

          {/* Clean Cross-Section Diagram Widget instead of AI Cartoon */}
          <div className="flex items-center justify-center">
            <BioporeCrossSection />
          </div>
        </div>

        {/* ─── APA ITU BIOPORI? ─── */}
        <div className="mt-14 flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-sky-200" />
          <span className="rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Fungsi Utama
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-200 to-emerald-200" />
        </div>

        <div className="mt-4">
          <article className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950">
              Lubang kecil, manfaat besar! 🌱
            </h2>
            <p className="mt-3 text-sm leading-8 text-slate-600">
              Lubang biopori adalah lubang silindris berdiameter <strong className="text-emerald-700">10–30 cm</strong> dan
              kedalaman <strong className="text-emerald-700">50–100 cm</strong> yang diisi sampah organik. Lubang ini
              membantu air hujan meresap ke dalam tanah sekaligus mengubah sampah organik menjadi kompos alami.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-center">
                <p className="text-2xl">💧</p>
                <p className="mt-1 text-xs font-bold text-slate-700">Serap Air Hujan</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4 text-center">
                <p className="text-2xl">🌱</p>
                <p className="mt-1 text-xs font-bold text-slate-700">Hasilkan Kompos</p>
              </div>
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-center">
                <p className="text-2xl">🪱</p>
                <p className="mt-1 text-xs font-bold text-slate-700">Suburkan Tanah</p>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4 text-center">
                <p className="text-2xl">♻️</p>
                <p className="mt-1 text-xs font-bold text-slate-700">Kurangi Sampah</p>
              </div>
            </div>
          </article>
        </div>

        {/* ─── TUTORIAL & SAMPAH ─── */}
        <div className="mt-6 flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-sky-200" />
          <span className="rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Panduan Praktis
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-200 to-emerald-200" />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div id="tutorial" className="scroll-mt-24">
            <BioporiSteps />
          </div>
          <div id="sampah" className="scroll-mt-24">
            <OrganicWasteTabs />
          </div>
        </div>

        {/* ─── PETA TITIK BIOPORI ─── */}
        <div className="mt-6 flex items-center gap-3 py-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-sky-200" />
          <span className="rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Lokasi Biopori
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-200 to-emerald-200" />
        </div>

        <div className="mt-4">
          <BioporiMap />
        </div>

        {/* ─── BACK ─── */}
        <Link
          href="/"
          className="mx-auto mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700 sm:w-auto"
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
