"use client";

import { useState } from "react";
import Image from "next/image";

interface Member {
  name: string;
  isKetua?: boolean;
}

interface Group {
  id: string;
  name: string;
  rw: string;
  rwLocation: string;
  imageSrc: string;
  description: string;
  members: Member[];
}

const mainThemes = [
  {
    title: "Revitalisasi Sendang",
    desc: "Restorasi dan pemeliharaan sendang alami sebagai sumber daya air bersih bagi warga.",
  },
  {
    title: "Mitigasi Bencana",
    desc: "Pemetaan kawasan rawan, edukasi kebencanaan, dan pencegahan risiko kebakaran.",
  },
  {
    title: "Pengolahan Sampah Organik",
    desc: "Pemanfaatan sampah organik menjadi biopori, briket, eco-enzyme, dan kompos.",
  },
];

const groups: Group[] = [
  {
    id: "kelompok-1",
    name: "Kelompok 1",
    rw: "RW 06",
    rwLocation: "RW 06 Kelurahan Mijen",
    imageSrc: "/images/kelompok 1.jpg",
    description:
      "Kelompok 1 bertugas di wilayah RW 06 Kelurahan Mijen, berfokus pada pendampingan masyarakat dalam mitigasi bencana, edukasi bahaya kebakaran sampah, dan pembuatan Teba Modern.",
    members: [
      { name: "Dio Septa Sanjaya", isKetua: true },
      { name: "Muhammad Ali Husain" },
      { name: "Dafa Zaldi Hamdaka" },
      { name: "Anisa Rafa Puspita" },
      { name: "Salmaa Hanifah Rahmadia" },
      { name: "Husnul Aqib Kusuma" },
      { name: "Erinna Rifda Nabila Triyana" },
      { name: "Falihah Hanuun Humairo" },
      { name: "Amelia Diah Febriyana" },
      { name: "Nazwa Huwaida Savira" },
    ],
  },
  {
    id: "kelompok-2",
    name: "Kelompok 2",
    rw: "RW 07",
    rwLocation: "RW 07 Kelurahan Mijen",
    imageSrc: "/images/kelompok 2.jpg",
    description:
      "Kelompok 2 bertugas di wilayah RW 07 Kelurahan Mijen, berfokus pada pengolahan sampah organik rumah tangga dan perkebunan kopi, pembuatan briket daun kering, biopori, serta eco-enzyme.",
    members: [
      { name: "Indra Purwanto", isKetua: true },
      { name: "Ariaji Faizal Nugraha" },
      { name: "Aulia Rifdah Muna Nida’" },
      { name: "Baihaqi Ramadhani Anantito" },
      { name: "Ghina Putri Nur Fadhila" },
      { name: "Jagad Pangestu" },
      { name: "Kaila Talitha Putri" },
      { name: "Kamalia Rahila Hardi Lubis" },
      { name: "Marisa Jala Kusumawati" },
      { name: "Salima Galih Raihana" },
      { name: "Siti Azizah Indah Mulyani" },
    ],
  },
  {
    id: "kelompok-3",
    name: "Kelompok 3",
    rw: "RW 05",
    rwLocation: "RW 05 Kelurahan Mijen",
    imageSrc: "/images/kelompok 3.jpg",
    description:
      "Kelompok 3 bertugas di wilayah RW 05 Kelurahan Mijen, berfokus pada penataan kawasan sendang air warga, edukasi pemilahan sampah dari rumah, dan sosialisasi kebersihan lingkungan.",
    members: [
      { name: "Muhamad Haedar Fahmi", isKetua: true },
      { name: "Dinar Sekar Arum" },
      { name: "Dian Oktaria R.K.N" },
      { name: "Mutiara Aisyah S." },
      { name: "Rafif Naufal Aryasatya" },
      { name: "Novia Putri Y." },
      { name: "Rijal Hibrizy N.I" },
      { name: "Shofi Mahmudah" },
      { name: "Leilacandra Oktaviawan" },
      { name: "Firman Dwi K." },
    ],
  },
];

export default function ProfilKknClient() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (groupId: string) => {
    setImgErrors((prev) => ({ ...prev, [groupId]: true }));
  };

  return (
    <main className="min-h-screen text-slate-800 pb-20">
      <div className="mx-auto w-full max-w-5xl px-4 pt-6 sm:px-6 sm:pt-8 md:pt-10">

        {/* Header Utama */}
        <header className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/60 mb-3">
            KKN-T IDBU 52 Universitas Diponegoro
          </div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl tracking-tight">
            Tim KKN Kelurahan Mijen
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Tim KKN Tematik IDBU 52 Universitas Diponegoro melaksanakan pengabdian masyarakat di Kelurahan Mijen, Kecamatan Mijen, Kota Semarang. Mahasiswa terbagi dalam 3 kelompok lokasi (RW 5, RW 6, dan RW 7) dengan tiga tema utama kegiatan.
          </p>

          {/* 3 Tema Utama */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3 pt-6 border-t border-slate-100">
            {mainThemes.map((theme, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200/60 p-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {theme.title}
                </h2>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* Daftar Kelompok */}
        <div className="mt-10 space-y-8">
          {groups.map((group) => {
            const isImgError = imgErrors[group.id];

            return (
              <section
                key={group.id}
                id={group.id}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm"
              >
                {/* Header Kelompok */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                      {group.rwLocation}
                    </span>
                    <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
                      {group.name} — {group.rw}
                    </h2>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-12 md:items-start">
                  
                  {/* Foto Kelompok */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      {!isImgError ? (
                        <Image
                          src={group.imageSrc}
                          alt={`Foto ${group.name}`}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(group.id)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50 text-slate-400">
                          <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-xs font-semibold text-slate-600">Foto {group.name} ({group.rw})</p>
                          <p className="text-[11px] text-slate-400 mt-1">Upload file foto di <code className="text-slate-600">public{group.imageSrc}</code></p>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Anggota Kelompok */}
                  <div className="md:col-span-5 rounded-2xl border border-slate-200/60 bg-slate-50/60 p-5">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                      Anggota {group.name}
                    </h3>
                    <ol className="space-y-2 text-xs">
                      {group.members.map((m, idx) => (
                        <li key={idx} className="flex items-center justify-between py-1 border-b border-slate-200/40 last:border-0">
                          <span className="text-slate-700">
                            <span className="text-slate-400 font-medium mr-2">{idx + 1}.</span>
                            <span className={m.isKetua ? "font-semibold text-slate-900" : ""}>
                              {m.name}
                            </span>
                          </span>
                          {m.isKetua && (
                            <span className="text-[10px] font-medium text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                              Ketua Kelompok
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* Footer Sederhana */}
        <div className="mt-12 text-center text-xs text-slate-500 pt-6 border-t border-slate-200">
          <p>KKN Tematik IDBU 52 Universitas Diponegoro · Kelurahan Mijen, Semarang</p>
        </div>

      </div>
    </main>
  );
}
