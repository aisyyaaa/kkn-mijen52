"use client";

import { useState } from "react";

export default function TrashTabs() {
  const [activeTab, setActiveTab] = useState<"organik" | "anorganik">("organik");

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col gap-4">
      <div>
        <h2 className="text-base font-extrabold text-gray-900 leading-snug">Mari Mengenal Jenis Sampah</h2>
        <p className="text-xs text-gray-500 mt-1">Pilih tab di bawah untuk melihat perbedaan jenis sampah dan ilustrasinya.</p>
      </div>

      <div className="flex p-1 bg-gray-100 rounded-xl">
        <button
          type="button"
          onClick={() => setActiveTab("organik")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg text-center transition-all duration-200 cursor-pointer ${
            activeTab === "organik" ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          🟢 Sampah Organik
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("anorganik")}
          className={`flex-1 py-2.5 text-xs font-bold rounded-lg text-center transition-all duration-200 cursor-pointer ${
            activeTab === "anorganik" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          🔵 Sampah Anorganik
        </button>
      </div>

      {activeTab === "organik" ? (
        <div className="transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-green-50/50 p-4 rounded-xl border border-green-100">
            <div className="flex-shrink-0 flex items-center justify-center">
              <svg className="w-24 h-24 drop-shadow-md animate-bounce-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#f0fdf4" />
                <circle cx="50" cy="50" r="38" fill="#dcfce7" />
                <defs>
                  <linearGradient id="leafGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
                <path d="M30 70 C 35 65, 45 55, 55 45" stroke="#166534" strokeWidth="4" strokeLinecap="round" />
                <path d="M15 85 C 20 80, 25 75, 30 70" stroke="#15803d" strokeWidth="5" strokeLinecap="round" />
                <path
                  d="M30 70 C 20 50, 25 25, 55 15 C 65 10, 85 15, 85 15 C 85 15, 90 35, 85 45 C 75 75, 50 80, 30 70 Z"
                  fill="url(#leafGrad)"
                />
                <path d="M30 70 C 45 60, 65 40, 85 15" stroke="#bbf7d0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.9" />
                <path d="M48 55 C 40 45, 38 42, 38 42" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M58 45 C 50 35, 48 32, 48 32" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M52 51 C 62 48, 68 48, 68 48" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M62 41 C 72 38, 78 38, 78 38" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded mb-1">
                Dapat Membusuk &amp; Terurai
              </span>
              <h3 className="text-sm font-bold text-gray-900">Sampah Organik</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Sampah yang berasal dari sisa makhluk hidup (hewan dan tumbuhan). Sampah ini mudah membusuk dan
                terurai secara alami oleh mikroorganisme tanah.
              </p>

              <div className="mt-3 flex flex-col gap-1.5 border-t border-green-200/50 pt-2.5">
                <p className="text-[11px] font-bold text-green-800">Contoh Sampah Organik:</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-green-200 text-green-700 rounded-md font-semibold">
                    Sisa makanan/lauk pauk
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-green-200 text-green-700 rounded-md font-semibold">
                    Daun &amp; ranting kering
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-green-200 text-green-700 rounded-md font-semibold">
                    Kulit buah &amp; sayur sisa
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-green-200 text-green-700 rounded-md font-semibold">
                    Cangkang telur
                  </span>
                </div>
              </div>

              <div className="mt-3 p-2.5 bg-white rounded-lg border border-green-200/50 flex items-start gap-2">
                <span className="text-xs">💡</span>
                <div>
                  <p className="text-[10px] font-bold text-green-800">Saran Pengolahan:</p>
                  <p className="text-[10px] text-gray-500 leading-normal">
                    Olah menjadi pupuk kompos di pekarangan rumah atau salurkan ke lubang biopori untuk konservasi
                    air tanah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <div className="flex-shrink-0 flex items-center justify-center">
              <svg className="w-24 h-24 drop-shadow-md animate-bounce-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#eff6ff" />
                <circle cx="50" cy="50" r="38" fill="#dbeafe" />
                <defs>
                  <linearGradient id="bottleGrad" x1="38" y1="20" x2="62" y2="85" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="40%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="capGrad" x1="42" y1="12" x2="58" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                <rect x="44" y="12" width="12" height="7" rx="1.5" fill="url(#capGrad)" />
                <path d="M45 19 H55 V25 H45 Z" fill="#60a5fa" opacity="0.9" />
                <path d="M43 25 H57 L58 30 H42 Z" fill="#93c5fd" />
                <path
                  d="M42 30 C 42 30, 40 40, 40 45 C 40 48, 43 49, 43 51 C 43 53, 40 54, 40 57 C 40 60, 43 61, 43 63 C 43 65, 40 66, 40 75 C 40 82, 45 84, 50 84 C 55 84, 60 82, 60 75 C 60 66, 57 65, 57 63 C 57 61, 60 60, 60 57 C 60 54, 57 53, 57 51 C 57 48, 60 47, 60 45 C 60 40, 58 30, 58 30 Z"
                  fill="url(#bottleGrad)"
                />
                <path d="M41 42 C 45 44, 55 40, 59 42" stroke="#dbeafe" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M41 54 C 45 56, 55 52, 59 54" stroke="#dbeafe" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M41 66 C 45 68, 55 64, 59 66" stroke="#dbeafe" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M45 32 V 78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
                <rect x="42.5" y="47" width="15" height="11" fill="#ffffff" opacity="0.85" rx="1" />
                <path d="M48 51.5 L 50 49 L 52 51.5 Z" fill="#22c55e" />
                <circle cx="50" cy="54" r="1" fill="#22c55e" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded mb-1">
                Sulit Terurai Alami
              </span>
              <h3 className="text-sm font-bold text-gray-900">Sampah Anorganik</h3>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                Sampah yang dihasilkan dari bahan-bahan non-hayati (buatan manusia/sintetis). Sampah ini sangat
                sulit atau bahkan tidak bisa hancur secara alami oleh mikroorganisme tanah.
              </p>

              <div className="mt-3 flex flex-col gap-1.5 border-t border-blue-200/50 pt-2.5">
                <p className="text-[11px] font-bold text-blue-800">Contoh Sampah Anorganik:</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-blue-200 text-blue-700 rounded-md font-semibold">
                    Botol &amp; gelas plastik
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-blue-200 text-blue-700 rounded-md font-semibold">
                    Kantong plastik &amp; saset
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-blue-200 text-blue-700 rounded-md font-semibold">
                    Kaleng soda &amp; logam
                  </span>
                  <span className="text-[10px] px-2 py-0.5 bg-white border border-blue-200 text-blue-700 rounded-md font-semibold">
                    Kaca &amp; gelas beling
                  </span>
                </div>
              </div>

              <div className="mt-3 p-2.5 bg-white rounded-lg border border-blue-200/50 flex items-start gap-2">
                <span className="text-xs">💡</span>
                <div>
                  <p className="text-[10px] font-bold text-blue-800">Saran Pengolahan:</p>
                  <p className="text-[10px] text-gray-500 leading-normal">
                    Bersihkan, keringkan, lalu kumpulkan untuk disetorkan ke <strong>Bank Sampah Mijen</strong> untuk
                    didaur ulang secara ekonomis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
