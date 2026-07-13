"use client";

import { useState } from "react";

type WasteCategory = "dapur" | "kebun";

const categories: Record<
  WasteCategory,
  {
    label: string;
    headline: string;
    badge: string;
    description: string;
    items: string[];
    tips: string;
  }
> = {
  dapur: {
    label: "Sampah Dapur",
    headline: "Sisa Makanan & Dapur",
    badge: "Paling Cepat Terurai",
    description: "Sampah organik basah yang berasal dari sisa masakan dapur rumah tangga.",
    items: [
      "Sisa nasi, lauk pauk, dan sayuran",
      "Kulit buah-buahan & sisa kupasan sayur",
      "Ampas teh celup atau bubuk kopi",
      "Cangkang telur (sebaiknya diremuk dahulu)",
      "Roti, mie, atau kue yang sudah basi",
    ],
    tips: "Potong kecil-kecil sampah berukuran besar agar cepat dihancurkan mikroorganisme tanah.",
  },
  kebun: {
    label: "Sampah Kebun",
    headline: "Dedaunan & Serat Halaman",
    badge: "Menjaga Struktur Liang",
    description: "Sampah organik kering dari halaman rumah yang kaya akan kandungan karbon.",
    items: [
      "Daun kering gugur pepohonan",
      "Rumput segar maupun rumput kering",
      "Ranting kecil (potong seukuran jari)",
      "Serabut kelapa atau jerami padi",
      "Bunga layu dari pot tanaman",
    ],
    tips: "Campurkan sampah kebun kering dengan sampah dapur basah agar kelembaban di dalam lubang seimbang.",
  },
};

export default function OrganicWasteTabs() {
  const [activeTab, setActiveTab] = useState<WasteCategory>("dapur");
  const active = categories[activeTab];
  const isDapur = activeTab === "dapur";

  return (
    <section className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-emerald-100/80">
          Kriteria Isian
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
        Sampah Organik yang Diperbolehkan
      </h3>
      <p className="mt-1 text-sm text-slate-500 leading-relaxed">
        Pilah sampah organik ini dari rumah untuk langsung dimasukkan ke dalam lubang biopori.
      </p>

      {/* Tab controls */}
      <div className="mt-6 flex gap-2 border-b border-slate-100 pb-3">
        {(Object.keys(categories) as WasteCategory[]).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                isActive
                  ? isDapur
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {key === "dapur" ? "🥬 " : "🍂 "}
              {categories[key].label}
            </button>
          );
        })}
      </div>

      {/* Panel Info */}
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-bold text-slate-800">{active.headline}</h4>
          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
            isDapur ? "border-emerald-100 bg-emerald-50 text-emerald-700" : "border-teal-100 bg-teal-50 text-teal-700"
          }`}>
            {active.badge}
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500 leading-relaxed">{active.description}</p>

        {/* Item List */}
        <ul className="mt-4 space-y-2">
          {active.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
              <span className={`mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full ${isDapur ? "bg-emerald-500" : "bg-teal-500"}`} />
              {item}
            </li>
          ))}
        </ul>

        {/* Tips & Warnings */}
        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
          <p className="text-xs leading-relaxed text-slate-600">
            <strong className={isDapur ? "text-emerald-700" : "text-teal-700"}>💡 Tips Pengisian:</strong>{" "}
            {active.tips}
          </p>
          <p className="mt-2 border-t border-slate-200/60 pt-2 text-[11px] leading-relaxed text-red-600">
            <strong className="text-red-700">🚫 Dilarang Masuk:</strong> Plastik, kardus tebal bergambar, besi/logam, kaca, sisa daging mentah (mengundang tikus & bau menyengat), minyak, dan tinja hewan peliharaan.
          </p>
        </div>
      </div>
    </section>
  );
}
