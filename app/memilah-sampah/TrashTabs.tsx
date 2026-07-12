"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

type TrashType = "organik" | "anorganik";

const tabs: Record<TrashType, {
  label: string;
  headline: string;
  badge: string;
  description: string;
  examples: string[];
  suggestionTitle: string;
  suggestion: ReactNode;
  tone: "emerald" | "sky";
  image: string;
}> = {
  organik: {
    label: "Organik",
    headline: "Sampah Organik",
    badge: "Dapat membusuk & terurai",
    description:
      "Sampah yang berasal dari sisa makhluk hidup, seperti hewan dan tumbuhan. Sampah ini mudah membusuk dan dapat diurai secara alami oleh mikroorganisme tanah.",
    examples: ["Sisa makanan", "Daun & ranting", "Kulit buah", "Cangkang telur"],
    suggestionTitle: "Saran Pengolahan",
    suggestion: "Olah menjadi pupuk kompos di pekarangan rumah atau salurkan ke lubang biopori untuk konservasi air tanah.",
    tone: "emerald",
    image: "/images/icon-organik.png",
  },
  anorganik: {
    label: "Anorganik",
    headline: "Sampah Anorganik",
    badge: "Sulit terurai alami",
    description:
      "Sampah dari bahan non-hayati atau buatan manusia. Sampah ini sulit hancur secara alami, tetapi sebagian masih dapat digunakan ulang atau didaur ulang.",
    examples: ["Botol plastik", "Kantong & saset", "Kaleng/logam", "Kaca"],
    suggestionTitle: "Saran Pengolahan",
    suggestion: (
      <>
        Bersihkan, keringkan, lalu kumpulkan untuk disetorkan ke <strong>Bank Sampah Mijen</strong> agar dapat didaur ulang
        secara ekonomis.
      </>
    ),
    tone: "sky",
    image: "/images/icon-anorganik.png",
  },
};

export default function TrashTabs() {
  const [activeTab, setActiveTab] = useState<TrashType>("organik");
  const active = tabs[activeTab];
  const isOrganik = active.tone === "emerald";

  return (
    <section className="h-full rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
      <div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-emerald-700 ring-1 ring-emerald-100">
          Materi Edukasi
        </span>
        <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950">Mari Mengenal Jenis Sampah</h2>
        <p className="mt-2 text-sm leading-7 text-slate-500">Pilih jenis sampah untuk melihat contoh dan cara pengolahannya.</p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 rounded-full border border-slate-100 bg-slate-50 p-1">
        {(Object.keys(tabs) as TrashType[]).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`rounded-full px-4 py-2.5 text-xs font-black transition ${isActive
                  ? key === "organik"
                    ? "bg-white text-emerald-700 shadow-sm ring-1 ring-emerald-100"
                    : "bg-white text-sky-700 shadow-sm ring-1 ring-sky-100"
                  : "text-slate-500 hover:text-slate-800"
                }`}
            >
              {tabs[key].label}
            </button>
          );
        })}
      </div>

      <div
        className={`mt-5 rounded-[1.5rem] border p-4 sm:p-5 ${isOrganik ? "border-emerald-100 bg-emerald-50/60" : "border-sky-100 bg-sky-50/65"
          }`}
      >
        <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="flex justify-center">
            <Image
              src={active.image}
              alt={active.headline}
              width={280}
              height={280}
              className="h-28 w-28 object-contain drop-shadow-lg"
            />
          </div>

          <div>
            <span
              className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${isOrganik ? "bg-white text-emerald-700 ring-1 ring-emerald-100" : "bg-white text-sky-700 ring-1 ring-sky-100"
                }`}
            >
              {active.badge}
            </span>
            <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-slate-950">{active.headline}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{active.description}</p>
          </div>
        </div>

        <div className="mt-5 border-t border-white/80 pt-5">
          <p className={`text-xs font-black uppercase tracking-[0.14em] ${isOrganik ? "text-emerald-700" : "text-sky-700"}`}>
            Contoh Sampah
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {active.examples.map((example) => (
              <span
                key={example}
                className={`rounded-full border bg-white px-3 py-1.5 text-xs font-bold ${isOrganik ? "border-emerald-100 text-emerald-700" : "border-sky-100 text-sky-700"
                  }`}
              >
                {example}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/80 bg-white/78 p-4 shadow-sm">
          <p className={`text-xs font-black ${isOrganik ? "text-emerald-700" : "text-sky-700"}`}>{active.suggestionTitle}</p>
          <p className="mt-1 text-xs leading-6 text-slate-600">{active.suggestion}</p>
        </div>
      </div>
    </section>
  );
}