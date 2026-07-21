"use client";

import { useMemo, useState } from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 2,
});

export default function RatioCalculator() {
  const [water, setWater] = useState(10);

  const amounts = useMemo(
    () => ({
      sugar: water / 10,
      organic: (water * 3) / 10,
    }),
    [water],
  );

  function updateWater(value: number) {
    if (!Number.isFinite(value)) return;
    setWater(Math.min(100, Math.max(0.5, value)));
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-amber-200/70 bg-white/85 shadow-[0_24px_80px_rgba(146,64,14,0.10)] backdrop-blur">
      <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 to-lime-50 p-6 sm:p-8">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">
          Kalkulator Komposisi
        </span>
        <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-stone-900 sm:text-3xl">
          Berapa bahan yang perlu disiapkan?
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
          Masukkan jumlah air yang akan digunakan. Kalkulator akan menyesuaikan gula dan bahan organik berdasarkan rasio 1 : 3 : 10.
        </p>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-3xl border border-stone-200 bg-stone-50/70 p-5">
          <label htmlFor="water-volume" className="text-xs font-black uppercase tracking-[0.14em] text-stone-600">
            Jumlah air
          </label>
          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              aria-label="Kurangi jumlah air"
              onClick={() => updateWater(water - 0.5)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white text-xl font-bold text-stone-600 transition hover:border-amber-300 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              −
            </button>
            <div className="relative flex-1">
              <input
                id="water-volume"
                type="number"
                min="0.5"
                max="100"
                step="0.5"
                value={water}
                onChange={(event) => updateWater(Number(event.target.value))}
                className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 pr-14 text-center text-lg font-black text-stone-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">liter</span>
            </div>
            <button
              type="button"
              aria-label="Tambah jumlah air"
              onClick={() => updateWater(water + 0.5)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-white text-xl font-bold text-stone-600 transition hover:border-lime-400 hover:text-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-400"
            >
              +
            </button>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-stone-500">Batas perhitungan 0,5–100 liter air.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <ResultCard label="Gula merah / molase" value={`${formatter.format(amounts.sugar)} kg`} ratio="1 bagian" tone="amber" />
          <ResultCard label="Sisa buah & sayur" value={`${formatter.format(amounts.organic)} kg`} ratio="3 bagian" tone="lime" />
          <ResultCard label="Air bersih" value={`${formatter.format(water)} liter`} ratio="10 bagian" tone="teal" />
        </div>
      </div>

      <div className="mx-6 mb-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 sm:mx-8 sm:mb-8">
        <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>
          Gunakan wadah plastik bermulut lebar yang dapat ditutup, lalu sisakan ruang kosong sekitar 20% untuk menampung gas fermentasi.
        </p>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  ratio,
  tone,
}: {
  label: string;
  value: string;
  ratio: string;
  tone: "amber" | "lime" | "teal";
}) {
  const styles = {
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    lime: "border-lime-200 bg-lime-50 text-lime-800",
    teal: "border-teal-200 bg-teal-50 text-teal-800",
  };

  return (
    <div className={`rounded-3xl border p-4 ${styles[tone]}`}>
      <span className="text-[10px] font-black uppercase tracking-[0.14em] opacity-70">{ratio}</span>
      <p className="mt-4 text-2xl font-black tracking-[-0.04em]">{value}</p>
      <p className="mt-1 text-xs font-bold leading-5">{label}</p>
    </div>
  );
}
