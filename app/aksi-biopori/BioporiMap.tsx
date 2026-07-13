"use client";

import { useState } from "react";

const BIOPORI_POINTS = [
  {
    id: 1,
    name: "Area Taman RW 7",
    location: "Depan Balai RW 7, Kelurahan Mijen",
    jumlah: 5,
    status: "Aktif",
    keterangan: "Titik biopori utama dekat area taman warga",
  },
  {
    id: 2,
    name: "Jalan Lingkungan RT 01",
    location: "Jalan utama RT 01, RW 7",
    jumlah: 3,
    status: "Aktif",
    keterangan: "Sepanjang jalan lingkungan yang sering tergenang",
  },
  {
    id: 3,
    name: "Pekarangan Warga RT 02",
    location: "Rumah Bapak RT 02, RW 7",
    jumlah: 4,
    status: "Aktif",
    keterangan: "Percontohan biopori di pekarangan warga",
  },
  {
    id: 4,
    name: "Area Masjid",
    location: "Halaman Masjid RW 7, Kelurahan Mijen",
    jumlah: 3,
    status: "Aktif",
    keterangan: "Area resapan air di halaman masjid",
  },
  {
    id: 5,
    name: "Taman Bermain Anak",
    location: "Gang Melati, RT 03 RW 7",
    jumlah: 2,
    status: "Aktif",
    keterangan: "Biopori di sekitar taman bermain warga",
  },
];

export default function BioporiMap() {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  return (
    <section className="rounded-[1.75rem] border border-white/80 bg-white/72 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-teal-700 ring-1 ring-teal-100">
            Lokasi Biopori
          </span>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-slate-950">
            Titik Lubang Biopori RW 7
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            Peta sebaran titik-titik lubang biopori yang telah dibuat di Kelurahan Mijen.
          </p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>

      {/* Map placeholder - user will add their map image here */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-emerald-50 to-sky-50">
        <div className="relative flex min-h-[280px] items-center justify-center p-8 sm:min-h-[360px]">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-teal-100">
              <svg className="h-8 w-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.752a1.125 1.125 0 00-1.006 0L3.622 6.19C3.24 6.38 3 6.77 3 7.197v14.25c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.875 2.437c.317.158.69.158 1.006 0z"
                />
              </svg>
            </div>
            <p className="mt-4 text-sm font-bold text-teal-700">Peta Kelurahan Mijen</p>
            <p className="mt-1 text-xs text-slate-500">
              Peta akan segera ditambahkan dengan titik-titik lokasi biopori
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-center">
          <p className="text-2xl font-black text-emerald-600">
            {BIOPORI_POINTS.reduce((acc, p) => acc + p.jumlah, 0)}
          </p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Total Lubang
          </p>
        </div>
        <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-4 text-center">
          <p className="text-2xl font-black text-teal-600">{BIOPORI_POINTS.length}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Titik Lokasi
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4 text-center">
          <p className="text-2xl font-black text-sky-600">RW 7</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Wilayah
          </p>
        </div>
      </div>

      {/* Biopori points list */}
      <div className="mt-6">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-teal-700">
          Daftar Titik Biopori
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {BIOPORI_POINTS.map((point) => {
            const isSelected = selectedPoint === point.id;
            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setSelectedPoint(isSelected ? null : point.id)}
                className={`group w-full rounded-2xl border p-4 text-left transition ${isSelected
                    ? "border-teal-200 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-[0_12px_35px_rgba(20,184,166,0.12)]"
                    : "border-slate-100 bg-white/70 hover:border-teal-100 hover:bg-teal-50/30"
                  }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition ${isSelected
                          ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm"
                          : "bg-slate-100 text-slate-400 group-hover:bg-teal-100 group-hover:text-teal-600"
                        }`}
                    >
                      {point.id}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{point.name}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{point.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                      {point.jumlah} lubang
                    </span>
                    <svg
                      className={`h-4 w-4 text-slate-400 transition-transform ${isSelected ? "rotate-180 text-teal-600" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-3 border-t border-white/80 pt-3">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-600 ring-1 ring-emerald-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {point.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-slate-600">{point.keterangan}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
