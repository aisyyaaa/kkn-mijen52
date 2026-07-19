"use client";

import { useState } from "react";

type Audience = "ibu" | "bapak" | "anak" | "lingkungan";

const audiences: Record<
  Audience,
  {
    label: string;
    emoji: string;
    colorClass: string;
    activeBg: string;
    ringColor: string;
    items: { text: string; highlight?: string }[];
  }
> = {
  ibu: {
    label: "Ibu-ibu",
    emoji: "🌱",
    colorClass: "text-[#0D7C66]",
    activeBg: "bg-[#0D7C66] text-white shadow-md shadow-[#0D7C66]/20",
    ringColor: "ring-[#0D7C66]/20",
    items: [
      {
        text: "Sampah dapur seperti kulit buah, sisa sayur, dan ampas teh tidak perlu lagi dibakar atau dibuang sia-sia.",
      },
      {
        text: "Halaman rumah menjadi lebih bersih dan bebas dari tumpukan sampah organik.",
      },
      {
        text: "Menghasilkan kompos alami yang bisa digunakan untuk menyuburkan tanaman di rumah.",
      },
      {
        text: "Hemat pengeluaran untuk pupuk karena bisa membuat sendiri dari sampah dapur.",
        highlight: "Jadi pupuknya tidak perlu selalu beli.",
      },
    ],
  },
  bapak: {
    label: "Bapak-bapak",
    emoji: "👨",
    colorClass: "text-[#1B6B93]",
    activeBg: "bg-[#1B6B93] text-white shadow-md shadow-[#1B6B93]/20",
    ringColor: "ring-[#1B6B93]/20",
    items: [
      {
        text: "Membantu mengurangi genangan air di sekitar rumah saat musim hujan.",
      },
      {
        text: "Membantu menjaga kondisi tanah agar tetap mampu menyerap air dengan baik.",
      },
      {
        text: "Ikut menjaga lingkungan RT supaya lebih nyaman dan sehat untuk keluarga.",
      },
      {
        text: "Kompos yang dihasilkan bisa dimanfaatkan untuk tanaman atau kebun di rumah.",
      },
    ],
  },
  anak: {
    label: "Anak-anak",
    emoji: "👦",
    colorClass: "text-[#0D7C66]",
    activeBg: "bg-[#0D7C66] text-white shadow-md shadow-[#0D7C66]/20",
    ringColor: "ring-[#0D7C66]/20",
    items: [
      {
        text: "Lingkungan tempat bermain menjadi lebih bersih dan nyaman.",
      },
      {
        text: "Belajar sejak kecil untuk memilah sampah organik dan anorganik.",
      },
      {
        text: "Menjadi contoh bagi teman-teman dalam menjaga kebersihan lingkungan.",
      },
    ],
  },
  lingkungan: {
    label: "Lingkungan RT",
    emoji: "🌏",
    colorClass: "text-[#1B6B93]",
    activeBg: "bg-[#1B6B93] text-white shadow-md shadow-[#1B6B93]/20",
    ringColor: "ring-[#1B6B93]/20",
    items: [
      {
        text: "Mengurangi volume sampah organik yang selama ini dibakar di lingkungan.",
      },
      {
        text: "Membantu mengurangi genangan air saat musim hujan tiba.",
      },
      {
        text: "Menambah daerah resapan air di lingkungan permukiman warga.",
      },
      {
        text: "Lingkungan RT menjadi lebih hijau, bersih, dan sehat untuk semua.",
      },
    ],
  },
};

const audienceKeys: Audience[] = ["ibu", "bapak", "anak", "lingkungan"];

export default function AudienceBenefits() {
  const [active, setActive] = useState<Audience>("ibu");
  const current = audiences[active];

  return (
    <section className="mt-12">
      <div className="text-center">
        <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
          Manfaat untuk Semua
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">
          Manfaat Biopori untuk Setiap Warga
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
          Biopori memberikan manfaat nyata bagi setiap anggota keluarga dan
          lingkungan sekitar.
        </p>
      </div>

      {/* Audience Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {audienceKeys.map((key) => {
          const audience = audiences[key];
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                isActive
                  ? audience.activeBg
                  : "border border-stone-200 bg-white/70 text-stone-600 hover:border-stone-300 hover:bg-white"
              }`}
            >
              <span>{audience.emoji}</span>
              {audience.label}
            </button>
          );
        })}
      </div>

      {/* Benefits Content */}
      <div className="mt-6 rounded-[2rem] border border-stone-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{current.emoji}</span>
          <div>
            <h3 className="text-xl font-black text-stone-900">
              Manfaat untuk {current.label}
            </h3>
            <p className="text-xs text-stone-500">
              Keuntungan yang bisa dirasakan langsung
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-stone-50/50 p-4 transition-colors hover:bg-stone-50"
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-xs font-bold ${current.colorClass}`}
              >
                {idx + 1}
              </span>
              <div>
                <p className="text-sm leading-6 text-stone-700">{item.text}</p>
                {item.highlight && (
                  <p
                    className={`mt-1.5 text-xs font-bold ${current.colorClass}`}
                  >
                    💡 &ldquo;{item.highlight}&rdquo;
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
