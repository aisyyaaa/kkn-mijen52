"use client";

import { useState } from "react";

const STEPS = [
  {
    title: "Penyediaan Wadah Terpisah",
    summary: "Sediakan tempat sampah terpisah untuk organik dan anorganik di rumah.",
    detail: (
      <>
        Sediakan dua wadah sampah di dapur atau area pembuangan utama. Anda bisa memberi label besar{" "}
        <strong className="text-green-700">&quot;ORGANIK&quot;</strong> (wadah berwarna hijau) dan{" "}
        <strong className="text-blue-700">&quot;ANORGANIK&quot;</strong> (wadah berwarna kuning atau biru). Memisahkan
        sejak awal di wadah terpisah adalah kunci sukses pemilahan sampah.
      </>
    ),
  },
  {
    title: "Pilah Langsung dari Sumber",
    summary: "Biasakan memilah langsung saat hendak membuang sampah.",
    detail: (
      <>
        Ketika memasak atau setelah makan, langsung masukkan sisa sayur, kulit buah, atau nasi basi ke tempat
        sampah organik. Sedangkan bungkus plastik kemasan, botol kecap, atau kaleng makanan dibuang ke tempat
        anorganik. Jangan dicampur dalam satu plastik kantong kresek!
      </>
    ),
  },
  {
    title: "Bilas & Keringkan (Anorganik)",
    summary: "Bilas bekas makanan/minuman pada sampah anorganik.",
    detail: (
      <>
        Botol minum plastik, gelas plastik kemasan, kaleng, atau kotak susu karton sebaiknya{" "}
        <strong className="text-gray-700">dibilas singkat dengan air</strong> agar sisa cairan manis/minyak hilang.
        Tiriskan atau keringkan sebentar sebelum dimasukkan ke tempat sampah anorganik. Langkah ini sangat membantu
        mencegah bau busuk, lalat, dan menjaga kualitas sampah agar bernilai jual tinggi saat didaur ulang.
      </>
    ),
  },
  {
    title: "Setor ke Bank Sampah Mijen",
    summary: "Salurkan sampah terpilah ke ekosistem daur ulang RW 5 Mijen.",
    detail: (
      <>
        Sampah organik dapat diolah menjadi kompos tanaman secara mandiri di pekarangan Anda. Sedangkan untuk
        sampah anorganik (botol plastik, kertas koran, kardus, kaleng) yang bernilai jual, kumpulkan secara rapi
        dan setor ke <strong className="text-green-700">Bank Sampah RW 5 Kelurahan Mijen</strong>. Sampah Anda
        tidak hanya mengurangi beban lingkungan, tapi juga menjadi tabungan rupiah!
      </>
    ),
  },
];

export default function StepTimeline() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-4">
      <div>
        <h2 className="text-base font-extrabold text-gray-900 leading-snug">Langkah Mudah Memilah Sampah</h2>
        <p className="text-xs text-gray-500 mt-1">
          Klik pada setiap langkah di bawah ini untuk melihat tips dan penjelasan praktisnya.
        </p>
      </div>

      <div className="relative pl-6 border-l-2 border-green-100 flex flex-col gap-4 mt-2 ml-3">
        {STEPS.map((step, index) => {
          const isOpen = openStep === index;
          return (
            <div
              key={step.title}
              className="relative group cursor-pointer"
              onClick={() => setOpenStep(isOpen ? null : index)}
            >
              <div
                className={`absolute -left-[35px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ring-4 transition-all duration-200 ${
                  isOpen ? "bg-green-500 text-white ring-green-100" : "bg-gray-200 text-gray-600 ring-gray-100"
                }`}
              >
                {index + 1}
              </div>
              <div
                className={`border rounded-xl p-4 transition-all duration-200 ${
                  isOpen
                    ? "bg-green-50/30 hover:bg-green-50/50 border-green-100/50"
                    : "bg-gray-50/30 hover:bg-gray-50/50 border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-800">{step.title}</h3>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-medium">{step.summary}</p>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-green-100/50 text-[11px] text-gray-500 leading-relaxed transition-all duration-300">
                    {step.detail}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
