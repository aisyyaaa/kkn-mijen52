"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Penyediaan Wadah Terpisah",
    summary: "Sediakan tempat sampah terpisah untuk organik dan anorganik di rumah.",
    detail: (
      <>
        Sediakan dua wadah sampah di dapur atau area pembuangan utama. Anda bisa memberi label besar{" "}
        <strong className="text-emerald-700">&quot;ORGANIK&quot;</strong> (wadah berwarna hijau) dan{" "}
        <strong className="text-sky-700">&quot;ANORGANIK&quot;</strong> (wadah berwarna biru atau abu-abu). Memisahkan sejak awal
        di wadah terpisah adalah kunci sukses pemilahan sampah.
      </>
    ),
  },
  {
    title: "Pilah Langsung dari Sumber",
    summary: "Biasakan memilah langsung saat hendak membuang sampah.",
    detail: (
      <>
        Ketika memasak atau setelah makan, langsung masukkan sisa sayur, kulit buah, atau nasi basi ke tempat sampah
        organik. Sedangkan bungkus plastik kemasan, botol kecap, atau kaleng makanan dibuang ke tempat anorganik.
        Jangan dicampur dalam satu plastik kantong kresek.
      </>
    ),
  },
  {
    title: "Bilas & Keringkan Anorganik",
    summary: "Bilas bekas makanan/minuman pada sampah anorganik.",
    detail: (
      <>
        Botol minum plastik, gelas plastik kemasan, kaleng, atau kotak susu karton sebaiknya{" "}
        <strong className="text-slate-700">dibilas singkat dengan air</strong> agar sisa cairan manis atau minyak hilang.
        Tiriskan sebelum dimasukkan ke wadah anorganik agar tidak berbau dan tetap bernilai saat didaur ulang.
      </>
    ),
  },
  {
    title: "Setor ke Bank Sampah Mijen",
    summary: "Salurkan sampah terpilah ke ekosistem daur ulang RW 5 Mijen.",
    detail: (
      <>
        Sampah organik dapat diolah menjadi kompos tanaman secara mandiri di pekarangan. Sampah anorganik yang bernilai
        jual dapat dikumpulkan rapi dan disetor ke{" "}
        <strong className="text-emerald-700">Bank Sampah RW 5 Kelurahan Mijen</strong>.
      </>
    ),
  },
];

export default function StepTimeline() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="h-full rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
      <div>
        <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-sky-700 ring-1 ring-sky-100">
          Praktik Harian
        </span>
        <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950">Langkah Mudah Memilah Sampah</h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          Klik setiap langkah untuk melihat tips praktis yang bisa diterapkan dari rumah.
        </p>
      </div>

      <div className="relative mt-6 flex flex-col gap-3 before:absolute before:left-[18px] before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-gradient-to-b before:from-emerald-200 before:via-sky-200 before:to-transparent">
        {STEPS.map((step, index) => {
          const isOpen = openStep === index;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setOpenStep(isOpen ? null : index)}
              className="group relative flex w-full gap-4 rounded-3xl p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span
                className={`relative z-10 mt-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-xs font-black shadow-sm ring-4 transition ${isOpen
                    ? "bg-gradient-to-br from-emerald-500 to-sky-500 text-white ring-sky-100"
                    : "bg-white text-slate-400 ring-slate-100 group-hover:text-emerald-600"
                  }`}
              >
                {index + 1}
              </span>

              <span
                className={`block flex-1 rounded-3xl border p-4 transition sm:p-5 ${isOpen
                    ? "border-sky-100 bg-gradient-to-br from-emerald-50 to-sky-50 shadow-[0_16px_45px_rgba(14,165,233,0.10)]"
                    : "border-slate-100 bg-white/70 hover:border-emerald-100 hover:bg-emerald-50/35"
                  }`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span>
                    <span className="block text-sm font-black text-slate-900">{step.title}</span>
                    <span className="mt-1 block text-xs font-semibold leading-6 text-slate-500">{step.summary}</span>
                  </span>
                  <svg
                    className={`mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-sky-600" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {isOpen && (
                  <span className="mt-4 block border-t border-white/80 pt-4 text-xs leading-7 text-slate-600">
                    {step.detail}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}