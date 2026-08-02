"use client";

import { useState } from "react";

const coffeeBenefits = [
  {
    icon: (
      <svg className="h-6 w-6 text-[#0D7C66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v19m0-19l-4 4m4-4l4 4M5 10l7-7 7 7" />
      </svg>
    ),
    title: "Nutrisi Langsung ke Akar Serabut",
    desc: "Akar penyerap hara pohon kopi berada pada kedalaman 0–60 cm. Biopori menyalurkan hara hasil penguraian langsung ke zona perakaran aktif.",
    tag: "Efisiensi Pupuk",
    color: "bg-[#0D7C66]/10 text-[#0D7C66] border-[#0D7C66]/20",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#1B6B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Menjaga Kelembaban Zona Akar",
    desc: "Air hujan terperangkap di lubang biopori dan meresap perlahan, menjaga kelembaban tanah saat musim kemarau agar bunga dan ceri kopi tidak rontok.",
    tag: "Cadangan Air",
    color: "bg-[#1B6B93]/10 text-[#1B6B93] border-[#1B6B93]/20",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#0D7C66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Daur Ulang Kulit & Serasah Kopi",
    desc: "Kulit buah kopi (pulp), dedaunan kopi kering, dan ampas kopi terbuang bisa langsung diisikan ke biopori untuk diolah menjadi kompos kaya Kalium & Nitrogen.",
    tag: "Zero Waste Kebun",
    color: "bg-[#0D7C66]/10 text-[#0D7C66] border-[#0D7C66]/20",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-[#1B6B93]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Cegah Erosi & Aerasi Tanah",
    desc: "Menahan limpasan air hujan agar topsoil subur tidak tergerus, sekaligus memancing cacing tanah membuat liang udara (aerasi) yang menyegarkan akar.",
    tag: "Konservasi Tanah",
    color: "bg-[#1B6B93]/10 text-[#1B6B93] border-[#1B6B93]/20",
  },
];

const formulaItems = [
  {
    label: "Kulit Buah Kopi (Pulp)",
    percent: "50%",
    width: "w-1/2",
    color: "bg-emerald-400",
    desc: "Tinggi Kalium (K) & Nitrogen (N) untuk pertumbuhan ceri kopi",
  },
  {
    label: "Daun Kopi & Serasah Kebun",
    percent: "30%",
    width: "w-3/12",
    color: "bg-amber-400",
    desc: "Menjaga aerasi & tingkat keasaman (pH) tanah kebun",
  },
  {
    label: "Sampah Dapur & Ampas Kopi",
    percent: "20%",
    width: "w-2/12",
    color: "bg-sky-400",
    desc: "Suplai hara mikro harian & kelembaban mikroba",
  },
];

const comparisonData = [
  {
    aspect: "Kelembaban Musim Kemarau",
    without: "Tanah cepat kering & pecah, bunga/buah kopi rentan rontok",
    withBiopori: "Tanah tetap lembab berkat air hujan yang tersimpan di subsoil",
  },
  {
    aspect: "Pemberian Pupuk Organik",
    without: "Pupuk tabur di permukaan sering hanyut terbawa air hujan",
    withBiopori: "Nutrisi terurai di dalam tanah & langsung diserap akar serabut",
  },
  {
    aspect: "Pengolahan Limbah Kulit Kopi",
    without: "Menumpuk di sudut kebun, menimbulkan bau & tempat hama",
    withBiopori: "Terdaur ulang menjadi pupuk alami kaya hara tanpa bau",
  },
  {
    aspect: "Kepadatan & Aerasi Tanah",
    without: "Tanah padat & keras, akar susah berkembang",
    withBiopori: "Gembur berkat terowongan alami cacing tanah",
  },
];

export default function CoffeeBiopori() {
  const [activeTab, setActiveTab] = useState<"manfaat" | "formula" | "komparasi">("manfaat");

  return (
    <section className="mt-12 overflow-hidden rounded-[2.5rem] border border-[#0D7C66]/20 bg-white/80 p-6 shadow-sm backdrop-blur-md sm:p-10 lg:p-12">
      {/* Section Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0D7C66]/25 bg-emerald-50 px-4 py-1.5 shadow-sm">
          <span className="text-base">☕</span>
          <span className="text-xs font-black uppercase tracking-wider text-[#0D7C66]">
            Aplikasi Khusus Perkebunan Kopi
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
          Pemanfaatan Biopori untuk Pohon Kopi
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Lubang biopori (*rorak biopori*) di sekeliling pohon kopi berfungsi sebagai reservoir air perakaran, pengolah limbah kulit kopi (*pulp*), dan penyedia pupuk organik tanpa biaya tambahan.
        </p>
      </div>

      {/* Tab Navigation buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          onClick={() => setActiveTab("manfaat")}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 sm:text-sm ${
            activeTab === "manfaat"
              ? "bg-[#0D7C66] text-white shadow-lg shadow-[#0D7C66]/30 scale-105"
              : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100"
          }`}
        >
          <span>🌿</span> Manfaat Utama Kopi
        </button>
        <button
          onClick={() => setActiveTab("formula")}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 sm:text-sm ${
            activeTab === "formula"
              ? "bg-[#0D7C66] text-white shadow-lg shadow-[#0D7C66]/30 scale-105"
              : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100"
          }`}
        >
          <span>🧪</span> Posisi &amp; Formula Kompos
        </button>
        <button
          onClick={() => setActiveTab("komparasi")}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 sm:text-sm ${
            activeTab === "komparasi"
              ? "bg-[#0D7C66] text-white shadow-lg shadow-[#0D7C66]/30 scale-105"
              : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100"
          }`}
        >
          <span>⚖️</span> Dengan vs Tanpa Biopori
        </button>
      </div>

      {/* TAB CONTENT 1: MANFAAT UTAMA KOPI */}
      {activeTab === "manfaat" && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeBenefits.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#0D7C66]/40 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-[#0D7C66] group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600">{item.desc}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#0D7C66]">
                <span>✓ Rekomendasi Tanaman Kopi</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 2: POSISI & FORMULA KOMPOS KOPI */}
      {activeTab === "formula" && (
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Left Column: Aturan Penempatan di Perkebunan Kopi */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0D7C66]">
                <span>📍</span> Aturan Penempatan Kebun
              </div>
              <h3 className="mt-3 text-xl font-black text-slate-900 sm:text-2xl">
                Lokasi Galian Biopori Kopi
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-sm">
                Pemasangan biopori pada pohon kopi dibuat tepat pada lingkaran perakaran aktif (*canopy dripline*):
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60 transition hover:bg-emerald-50/40">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0D7C66] text-xs font-bold text-white">1</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Jarak Pemasangan (50–100 cm)</h4>
                    <p className="mt-0.5 text-[11px] leading-5 text-slate-600">Gali tepat di bawah lingkaran tajuk daun luar tempat akar serabut penyerap hara berkumpul.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60 transition hover:bg-emerald-50/40">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0D7C66] text-xs font-bold text-white">2</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Jumlah Lubang (2–4 Lubang)</h4>
                    <p className="mt-0.5 text-[11px] leading-5 text-slate-600">Buat 2 sampai 4 lubang mengelilingi pohon secara simetris untuk distribusi pasokan hara merata.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200/60 transition hover:bg-emerald-50/40">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0D7C66] text-xs font-bold text-white">3</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">Dimensi Lubang (Kedalaman 50–80 cm)</h4>
                    <p className="mt-0.5 text-[11px] leading-5 text-slate-600">Diameter 10–12 cm. Dipasang pipa PVC berlubang atau biarkan dinding tanah alami solid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formula pengisian dengan Visual Progress Bar */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-[#0D7C66]/20 bg-gradient-to-br from-[#0D7C66] via-[#1B9C85] to-[#1B6B93] p-6 text-white shadow-xl sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-100 backdrop-blur-sm">
                <span>🧪</span> Resep Kompos Kebun Kopi
              </div>
              <h4 className="mt-3 text-xl font-extrabold">Formula Ideal Pengisian Biopori</h4>
              <p className="mt-2 text-xs leading-6 text-emerald-50 sm:text-sm">
                Komposisi bahan organik pilihan di bawah pohon kopi untuk hasil kompos bernutrisi tinggi:
              </p>

              {/* Multi-segment Progress bar visual */}
              <div className="mt-6 overflow-hidden rounded-full bg-black/20 p-1 flex gap-1 backdrop-blur-sm">
                <div className="h-3 rounded-full bg-emerald-300 w-[50%]" title="50% Kulit Kopi" />
                <div className="h-3 rounded-full bg-amber-300 w-[30%]" title="30% Daun & Serasah" />
                <div className="h-3 rounded-full bg-sky-300 w-[20%]" title="20% Sampah Dapur" />
              </div>

              <div className="mt-6 space-y-3.5">
                {formulaItems.map((f, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 p-3.5 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>{f.label}</span>
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] text-white">{f.percent}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/80 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white/15 p-4 backdrop-blur-md text-[11px] leading-relaxed text-emerald-50 border border-white/20">
              💡 <strong>Petunjuk:</strong> Kompos matang tidak wajib dikeruk. Kompos dapat dibiarkan terurai langsung ke akar pohon kopi sebagai pupuk organik pelepasan lambat (*slow release*).
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: KOMPARASI */}
      {activeTab === "komparasi" && (
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-200 bg-slate-100/80 text-slate-900 font-extrabold">
                <tr>
                  <th className="p-4 sm:p-5 w-1/4">Aspek Perkebunan</th>
                  <th className="p-4 sm:p-5 w-3/8 text-rose-700 bg-rose-50/70">Tanpa Biopori</th>
                  <th className="p-4 sm:p-5 w-3/8 text-[#0D7C66] bg-emerald-50/70">Dengan Biopori (Rorak Biopori)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">{row.aspect}</td>
                    <td className="p-4 sm:p-5 text-slate-600 bg-rose-50/30">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-rose-100 text-rose-700 font-extrabold text-xs mr-2">✕</span>
                      {row.without}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-800 font-semibold bg-emerald-50/30">
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 text-[#0D7C66] font-extrabold text-xs mr-2">✓</span>
                      {row.withBiopori}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
