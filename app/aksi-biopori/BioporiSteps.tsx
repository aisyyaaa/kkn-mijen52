"use client";

const STEPS = [
  {
    number: "01",
    title: "Tentukan Lokasi & Siapkan Alat",
    summary: "Pilih lokasi resapan air hujan di pekarangan, minimal 50 cm dari pondasi dinding rumah.",
    detail: "Siapkan bor tanah (auger) atau linggis, pipa PVC ukuran diameter 10 cm (3-4 inch) yang telah dilubangi kecil-kecil di bagian sisinya, serta penutup pipa/kawat kasa.",
    color: "emerald",
  },
  {
    number: "02",
    title: "Buat Lubang Silinder",
    summary: "Gali lubang vertikal ke dalam tanah secara tegak lurus sedalam 50 sampai 100 cm.",
    detail: "Jika tanah terasa keras, basahi dengan air terlebih dahulu agar bor lebih mudah berputar. Letakkan tanah hasil galian secara terpisah untuk pupuk pekarangan.",
    color: "sky",
  },
  {
    number: "03",
    title: "Pasang Pipa PVC Dinding",
    summary: "Masukkan pipa PVC ke dalam lubang tanah agar dinding tanah tidak mudah longsor.",
    detail: "Buat mulut pipa PVC sejajar atau sedikit menonjol (2-3 cm) dari permukaan tanah. Padatkan atau semen tipis bagian pinggiran mulut lubang agar pipa terpasang kokoh.",
    color: "teal",
  },
  {
    number: "04",
    title: "Isi Sampah Organik",
    summary: "Penuhi lubang dengan sampah organik dapur dan kebun secara bertahap.",
    detail: "Masukkan dedaunan kering, sisa sayur, atau kulit buah. Sampah ini mengundang cacing tanah membuat liang biopori alami yang mempercepat resapan air ke samping pipa.",
    color: "indigo",
  },
  {
    number: "05",
    title: "Tutup & Panen Kompos",
    summary: "Tutup lubang dengan kawat kasa atau penutup PVC berlubang agar aman dilewati.",
    detail: "Setiap 2-3 bulan sekali, keluarkan sampah organik yang sudah menjadi kompos hitam untuk dijadikan pupuk tanaman, lalu isi kembali lubang dengan sampah baru.",
    color: "emerald",
  },
];

export default function BioporiSteps() {
  return (
    <section className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-emerald-100/80">
          Langkah Pembuatan
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900">
        Cara Membuat Lubang Biopori
      </h3>
      <p className="mt-1 text-sm text-slate-500 leading-relaxed border-b border-slate-100 pb-4">
        Ikuti 5 tahapan praktis pembuatan biopori berikut untuk dipraktikkan langsung di rumah.
      </p>

      {/* Vertical Steps Timeline */}
      <div className="relative mt-6 flex flex-col gap-6 pl-4 before:absolute before:left-8 before:top-2 before:h-[calc(100%-24px)] before:w-0.5 before:bg-slate-100">
        {STEPS.map((step, idx) => (
          <div key={idx} className="relative flex gap-4">
            {/* Step Number Badge */}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-700 shadow-sm">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-slate-50">
              <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
              <p className="mt-1.5 text-xs font-semibold text-slate-800 leading-relaxed">
                {step.summary}
              </p>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-200/50 pt-2 font-normal">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
