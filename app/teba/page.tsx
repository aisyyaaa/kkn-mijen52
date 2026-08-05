import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookViewer from "@/components/BookViewer";

export const metadata: Metadata = {
  title: "Edukasi Teba Modern - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pengelolaan sampah organik rumah tangga mandiri melalui metode Teba Modern di Kelurahan Mijen.",
};

const problems = [
  {
    title: "Volume Sampah Tinggi",
    desc: "Volume sampah organik rumah tangga sangat tinggi dan mendominasi persentase total sampah harian.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    )
  },
  {
    title: "Bau & Gas Metana",
    desc: "Sampah organik yang tercampur di TPA membusuk tanpa oksigen, menghasilkan gas rumah kaca metana dan bau menyengat.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    )
  },
  {
    title: "Keterbatasan Lahan TPA",
    desc: "Kapasitas TPA terus menyusut akibat beban sampah harian yang tidak terkelola langsung dari sumbernya.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 6-3 3 1.5v10.5M9 20l6-3m-6 3V2m6 15V5m0 12l5.447 2.724a1 1 0 001.006 0L21 18.5" />
    )
  },
  {
    title: "Kehilangan Potensi Kompos",
    desc: "Banyak sampah organik bergizi tinggi untuk tanah terbuang sia-sia tanpa sempat dikembalikan manfaatnya ke bumi.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    )
  }
];

const makeSteps = [
  {
    num: "01",
    title: "Tentukan Lokasi Lahan",
    desc: "Tentukan titik lahan pembuatan Teba. Lahan yang digunakan adalah lahan yang datar, memiliki struktur tanah yang kuat, dan mudah diakses oleh warga."
  },
  {
    num: "02",
    title: "Gali Lubang Utama",
    desc: "Buat lubang sedalam 2 meter dengan diameter 70 cm."
  },
  {
    num: "03",
    title: "Perluas Lubang Tengah",
    desc: "Pada kedalaman 1 meter dari permukaan tanah, perluas diameter lubang menjadi sekitar 80 cm."
  },
  {
    num: "04",
    title: "Pasang Buis Beton Pertama",
    desc: "Letakkan buis beton dengan diameter dalam 70 cm dan tinggi 1 meter pada lubang."
  },
  {
    num: "05",
    title: "Pasang Buis Beton Kedua",
    desc: "Letakkan buis beton kedua sehingga teba memiliki tinggi 1 meter di atas permukaan tanah."
  },
  {
    num: "06",
    title: "Buat Lubang Sampah",
    desc: "Lubangi bagian bawah teba pada permukaan tanah sebagai tempat memasukkan sampah organik."
  },
  {
    num: "07",
    title: "Pasang Penutup Beton",
    desc: "Tutup teba menggunakan penutup berbahan beton."
  },
  {
    num: "08",
    title: "Pemanfaatan Area Meja",
    desc: "Teba dapat dimanfaatkan lebih lanjut menjadi meja untuk taman pada lahan."
  }
];

const useSteps = [
  {
    title: "Masukkan Sampah Organik",
    desc: "Masukkan sisa dapur atau kebun yang tergolong organik setiap harinya.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9m0 0a5 5 0 0 1 5-5m-5 5a5 5 0 0 0-5-5m5 5v10m-5 0h10" />
      </svg>
    )
  },
  {
    title: "Cacah Sampah Besar",
    desc: "Potong atau cacah sisa bahan makanan yang berukuran besar agar mempercepat pembusukan.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.12 14.12L21 21M9.88 9.88L3 3m5 5a3.5 3.5 0 10-5 0 3.5 3.5 0 005 0zm11 8a3.5 3.5 0 10-5 0 3.5 3.5 0 005 0z" />
      </svg>
    )
  },
  {
    title: "Lapisi Daun Kering",
    desc: "Taburkan daun kering atau sedikit tanah secara berkala untuk menjaga kelembapan ideal.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3c-4.97 0-9 4.03-9 9a9 9 0 009 9M12 3c4.97 0 9 4.03 9 9a9 9 0 01-9 9" />
      </svg>
    )
  },
  {
    title: "Hindari Sampah Kimia/Anorganik",
    desc: "Pastikan tidak ada bahan berbahaya, plastik, sabun, atau minyak yang masuk ke lubang.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  },
  {
    title: "Tutup Rapat Kembali",
    desc: "Selalu tutup kembali penutup Teba Modern setelah digunakan agar terhindar dari air hujan berlebih dan hewan pengganggu.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

const allowedTrash = [
  "Sisa sayuran mentah/masak",
  "Kulit buah-buahan",
  "Daun kering & ranting kecil",
  "Rumput & tanaman pangkas",
  "Ampas kopi & ampas teh",
  "Cangkang telur (dihancurkan)",
  "Sisa nasi & roti"
];

const forbiddenTrash = [
  "Plastik & kantong saset",
  "Kaca & botol beling",
  "Logam, kaleng, & kawat",
  "Popok bayi & pembalut",
  "Minyak goreng bekas",
  "Bahan kimia (detergen, pestisida)",
  "Sampah medis & obat kedaluwarsa"
];

const benefits = [
  { title: "Kompos Alami & Tanaman Subur", desc: "Menghasilkan pupuk organik berkualitas tinggi secara gratis untuk menyuburkan tanaman hias dan kebun pekarangan rumah.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
  { title: "Lingkungan Rumah Bebas Bau", desc: "Mengeliminasi bau tidak sedap dan lalat di sekitar rumah karena sampah organik dikelola secara bersih dan tertutup.", color: "text-[#8B5A2B] bg-[#8B5A2B]/5 border-[#8B5A2B]/10" },
  { title: "Hemat Pengeluaran", desc: "Mengurangi biaya pembelian pupuk kimia komersial dan iuran pembuangan sampah rutin.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
];

const tips = [
  "Pisahkan sampah organik dan anorganik dengan disiplin sejak di dapur.",
  "Hindari memasukkan makanan berminyak atau berkuah berlebihan untuk mencegah becek dan bau asam.",
  "Potong sampah menjadi ukuran sekecil mungkin agar mikroorganisme bekerja lebih cepat.",
  "Pastikan penutup Teba Modern terpasang dengan baik setelah digunakan.",
  "Tambahkan daun kering atau serbuk gergaji jika kondisi di dalam lubang terlalu basah atau berlumpur.",
  "Jangan memasukkan sampah plastik, puntung rokok, atau bahan kimia apa pun."
];

const envImpacts = [
  "Mengurangi penumpukan sampah basah di TPA Mijen secara signifikan.",
  "Mencegah pencemaran tanah and air tanah dari rembesan air lindi.",
  "Menekan emisi gas rumah kaca (metana) dari tumpukan sampah terbuka.",
  "Mendukung program Kelurahan Mijen yang bersih, hijau, dan mandiri sampah."
];

const budgetItems = [
  {
    no: 1,
    category: "Struktur Teba Modern",
    name: "Buis Beton D70/50",
    desc: "Disusun 3 tingkat — 1 buis ditanam sebagai fondasi di dalam tanah, 2 buis lainnya ditumpuk persis di atasnya",
    qty: 3,
    unit: "buah",
    price: "Rp135.000",
    total: "Rp405.000"
  },
  {
    no: 2,
    category: "Struktur Teba Modern",
    name: "Tutup Beton D80",
    desc: "Penutup bagian atas Teba agar terhindar air hujan dan hewan pengganggu",
    qty: 1,
    unit: "buah",
    price: "Rp140.000",
    total: "Rp140.000"
  },
  {
    no: 3,
    category: "Finishing/Identitas",
    name: "Cat Hitam",
    desc: "Digunakan untuk menuliskan label \"KKNT IDBU 52\" pada permukaan Teba sebagai penanda identitas program",
    qty: 1,
    unit: "kg",
    price: "Rp13.000",
    total: "Rp13.000"
  },
  {
    no: 4,
    category: "Finishing/Identitas",
    name: "Kuas",
    desc: "Alat untuk menuliskan label cat pada permukaan Teba",
    qty: 1,
    unit: "buah",
    price: "Rp5.000",
    total: "Rp5.000"
  },
  {
    no: 5,
    category: "Tenaga",
    name: "Bapak Tukang",
    desc: "Meminta tolong jasa bapak tukang dalam pelaksanaan Teba",
    qty: 1,
    unit: "orang",
    price: "Rp130.000",
    total: "Rp130.000"
  },
  {
    no: 6,
    category: "Pengiriman",
    name: "Ongkos Kirim",
    desc: "Pengiriman buis dan tutup beton ke lokasi Teba",
    qty: 1,
    unit: "kali",
    price: "Rp30.000",
    total: "Rp30.000"
  }
];

export default function TebaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-stone-900">
      {/* Background Decor in green/brown earthy colors */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(44,94,67,0.10),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(139,90,43,0.10),transparent_30%),linear-gradient(180deg,#FAF9F5_0%,#F3EFE9_48%,#FAF9F5_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:px-8">

        {/* Hero Section */}
        <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200/50 bg-white/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.02)] backdrop-blur-md sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2C5E43]/20 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2C5E43] shadow-[0_0_0_5px_rgba(44,94,67,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2C5E43]">Edukasi Warga RW 6</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-6xl">
              Teba Modern
              <span className="mt-2 block bg-gradient-to-r from-[#2C5E43] via-[#5B8C5A] to-[#8B5A2B] bg-clip-text text-transparent">
                Olah Sampah Organik
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              <strong>Teba Modern</strong> adalah metode sederhana untuk mengolah sampah organik rumah tangga secara alami dengan memanfaatkan lubang atau buis beton yang ditanam di tanah. Sampah organik akan terurai oleh mikroorganisme menjadi kompos yang bermanfaat bagi tanaman.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              Teba Modern merupakan salah satu solusi pengelolaan sampah yang mudah diterapkan di rumah, ramah lingkungan, dan mendukung pengurangan sampah yang dibuang ke Tempat Pembuangan Akhir (TPA).
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative mx-auto flex max-w-[440px] items-center justify-center py-4 w-full">
              {/* soft glow shadow beneath the floating photo */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(44,94,67,0.20),rgba(139,90,43,0.10)_60%,transparent_75%)] blur-2xl" />

              {/* sparkle accents in green/brown */}
              <span className="animate-float-sparkle absolute right-[4%] top-[4%] h-2.5 w-2.5 rounded-full bg-[#2C5E43] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(44,94,67,0.2)]" />
              <span
                className="animate-float-sparkle absolute left-[2%] top-[24%] h-2 w-2 rounded-full bg-[#8B5A2B] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(139,90,43,0.2)]"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="animate-float-sparkle absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-[#2C5E43] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(44,94,67,0.2)]"
                style={{ animationDelay: "2.1s" }}
              />

              {/* No white frame/border container. mix-blend-multiply combines image white background directly with page bg */}
              <div className="animate-float-card relative w-full flex justify-center">
                <Image
                  src="/images/teba-hero-v5.png"
                  alt="Instalasi Teba Modern Buis Beton"
                  width={800}
                  height={800}
                  className="relative z-10 h-auto w-full max-w-[390px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Perlu Teba Modern? */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Latar Belakang & Urgensi
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Mengapa Kita Perlu Teba Modern?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pengelolaan sampah secara mandiri dari sumbernya membantu menyelesaikan masalah penumpukan sampah perkotaan yang semakin kritis.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2C5E43]/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C5E43]/10 text-[#2C5E43] transition-colors group-hover:bg-[#2C5E43] group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {problem.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{problem.title}</h3>
                <p className="mt-2 text-xs leading-6 text-stone-500">{problem.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Highlight banner */}
          <div className="mt-8 rounded-[2rem] border border-[#2C5E43]/10 bg-gradient-to-r from-[#2C5E43]/5 to-[#8B5A2B]/5 p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold leading-relaxed text-[#2C5E43] sm:text-base">
              💡 <strong>Solusi:</strong> Dengan Teba Modern, sampah organik dapat diolah langsung dari sumbernya di pekarangan rumah, sehingga tidak perlu seluruhnya dibuang ke TPS maupun TPA. Ini adalah langkah nyata mengurangi pencemaran lingkungan.
            </p>
          </div>
        </section>

        {/* Section: Cara Pembuatan Teba Modern */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#8B5A2B]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#8B5A2B] ring-1 ring-[#8B5A2B]/20">
              Langkah Pembuatan
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Cara Pembuatan Teba Modern</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Secara umum, pembuatan wadah Teba Modern memanfaatkan struktur silinder beton dengan sistem lubang resapan alami.
            </p>
          </div>

          <div className="mt-8 relative">
            {/* Line connecting steps for desktop */}
            <div className="absolute left-[50%] top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#2C5E43]/20 via-[#8B5A2B]/15 to-transparent lg:block" />

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {makeSteps.map((step, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className={`flex gap-6 rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md lg:p-8 ${isEven ? "lg:translate-y-8" : ""
                      }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2C5E43] to-[#8B5A2B] text-lg font-extrabold text-white shadow-sm">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-stone-900">{step.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-stone-600">{step.desc}</p>
                    </div>
                  </div>
                );
              })}

              <div className="flex flex-col justify-center rounded-3xl border border-[#2C5E43]/10 bg-[#2C5E43]/5 p-6 text-stone-900 lg:p-8 lg:translate-y-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2C5E43]">Catatan Poin Penting</p>
                <p className="mt-3 text-xs leading-6 text-stone-700">
                  Teba Modern dapat dibuat menggunakan <strong>satu atau lebih buis beton</strong> bertingkat sesuai dengan ketersediaan lahan dan rata-rata volume produksi sampah organik harian di rumah tangga Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Cara Menggunakan & Tips */}
        <section className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Cara Menggunakan */}
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Panduan Harian
            </span>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Cara Menggunakan Teba Modern</h2>
            <p className="mt-2 text-xs leading-6 text-stone-500">
              Ikuti tata cara operasional berikut agar sisa organik terfermentasi dan terurai dengan sempurna secara berkala.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {useSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Consistent SVG Icon containers */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C5E43]/10 text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-stone-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Agar Optimal */}
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#8B5A2B]/20 bg-[#8B5A2B]/5 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <div>
              <span className="rounded-full bg-[#8B5A2B]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#8B5A2B] ring-1 ring-[#8B5A2B]/20">
                Penting
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Tips Agar Teba Modern Optimal</h2>
              <p className="mt-2 text-xs leading-6 text-[#8B5A2B]/80">
                Hindari kegagalan proses pembusukan seperti timbulnya belatung berlebih, bau menyengat, atau genangan air berlendir.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5A2B]" />
                    <span className="text-xs leading-5 text-stone-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-[#8B5A2B]/20 bg-white/70 p-4">
              <p className="text-[11px] font-bold leading-relaxed text-[#8B5A2B]">
                *Proses penguraian memakan waktu beberapa minggu hingga bulan untuk berubah menjadi kompos alami berharga tinggi.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Pilah Sampah (Boleh vs Tidak Boleh) */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Panduan Pilah
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Panduan Pilah Sampah Teba Modern</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pisahkan dengan tepat. Tidak semua bahan organik dan anorganik aman dimasukkan ke dalam lubang beton Teba Modern.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Allowed */}
            <div className="rounded-[2rem] border border-[#2C5E43]/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C5E43]/10 text-[#2C5E43] font-bold">
                  ✓
                </span>
                <h3 className="text-lg font-black text-[#2C5E43]">Sampah yang Boleh Masuk</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Bahan-bahan ini cepat terurai secara alami dan memberikan tambahan hara tinggi bagi kualitas kompos.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {allowedTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-[#2C5E43]/10 bg-[#2C5E43]/5 px-3.5 py-2.5 text-xs text-[#2C5E43]">
                    <span className="text-[#2C5E43]">✅</span>
                    <span className="font-semibold">{trash}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forbidden */}
            <div className="rounded-[2rem] border border-[#8B5A2B]/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] font-bold">
                  ✕
                </span>
                <h3 className="text-lg font-black text-[#8B5A2B]">Sampah yang Tidak Boleh Masuk</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Material di bawah ini menghambat mikroorganisme, beracun bagi cacing tanah, atau tidak bisa terurai sama sekali.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {forbiddenTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-[#8B5A2B]/10 bg-[#8B5A2B]/5 px-3.5 py-2.5 text-xs text-[#8B5A2B]">
                    <span className="text-[#8B5A2B]">❌</span>
                    <span className="font-semibold">{trash}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Manfaat & Dampak Lingkungan */}
        <section className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Manfaat */}
          <div className="flex flex-col justify-center">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20 w-fit">
              Keuntungan Rumah Tangga
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-900">Manfaat bagi Rumah Tangga</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Penerapan Teba Modern memberikan keuntungan praktis harian secara mandiri bagi keluarga Anda.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200/50 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                  <span className={`inline-flex rounded-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${benefit.color}`}>
                    Keunggulan
                  </span>
                  <h4 className="mt-2 text-base font-bold text-stone-900">{benefit.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dampak bagi Lingkungan Kelurahan */}
          <div className="flex flex-col justify-center">
            <div className="h-full rounded-[2rem] border border-[#2C5E43]/20 bg-gradient-to-br from-[#2C5E43] to-[#8B5A2B] p-6 text-white shadow-lg sm:p-8 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FAF9F5] backdrop-blur-sm">
                  Kelurahan Mijen Sehat
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.02em]">Dampak bagi Lingkungan</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-100/90">
                  Penerapan metode Teba Modern di tingkat rukun tetangga/warga memberikan kontribusi signifikan terhadap kelestarian lingkungan sekitar Kelurahan Mijen:
                </p>

                <ul className="mt-6 flex flex-col gap-4">
                  {envImpacts.map((impact, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-stone-100">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-white/10 p-4 border border-white/10 backdrop-blur-sm">
                <p className="text-xs leading-relaxed text-stone-100">
                  🌱 <strong>Mari Sukseskan Mijen Proklim:</strong> Dengan mengolah sampah dapur kita sendiri, kita telah berkontribusi langsung pada mitigasi iklim global dari Kelurahan Mijen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Rancangan Anggaran Biaya Teba Modern */}
        <section className="mt-24 rounded-[2rem] border border-stone-200/60 bg-white/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.02)] backdrop-blur-md sm:p-10">
          <div className="text-center">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Rencana Anggaran
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">
              Rancangan Anggaran Biaya Teba Modern
            </h2>
          </div>

          <div className="mt-8 text-sm leading-relaxed text-stone-700 text-justify">
            <p>
              Setelah mengenal manfaat dan tahapan pembuatan Teba Modern, hal berikutnya yang perlu diketahui adalah gambaran biaya di balik terwujudnya fasilitas ini. Teba Modern yang dibangun melalui program KKN-T IDBU 52 UNDIP nantinya akan diserahkan kepada Kelurahan Mijen untuk dimanfaatkan bersama oleh seluruh warga kelurahan, bukan hanya satu RW, sehingga pengelolaan sampah organik menjadi fasilitas komunal yang dirawat bersama.
            </p>
          </div>

          {/* Table Container */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm text-stone-600">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50 font-bold text-stone-900 text-xs uppercase tracking-wider">
                  <th className="px-4 py-3.5 w-12 text-center">No</th>
                  <th className="px-4 py-3.5">Kategori</th>
                  <th className="px-4 py-3.5">Nama Barang</th>
                  <th className="px-6 py-3.5 max-w-xs">Fungsi/Keterangan</th>
                  <th className="px-4 py-3.5 text-center">Kuantitas</th>
                  <th className="px-4 py-3.5">Satuan</th>
                  <th className="px-4 py-3.5 text-right">Harga Satuan</th>
                  <th className="px-4 py-3.5 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {budgetItems.map((item, index) => (
                  <tr key={index} className="hover:bg-stone-50/55 transition-colors">
                    <td className="px-4 py-3 text-center font-semibold text-stone-500">{item.no}</td>
                    <td className="px-4 py-3 font-semibold text-[#2C5E43] whitespace-nowrap">{item.category}</td>
                    <td className="px-4 py-3 font-bold text-stone-900 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-3 text-xs leading-relaxed text-stone-600 min-w-[200px]">{item.desc}</td>
                    <td className="px-4 py-3 text-center font-bold text-stone-900">{item.qty}</td>
                    <td className="px-4 py-3 text-stone-500">{item.unit}</td>
                    <td className="px-4 py-3 text-right font-semibold text-stone-700 whitespace-nowrap">{item.price}</td>
                    <td className="px-4 py-3 text-right font-black text-[#2C5E43] whitespace-nowrap">{item.total}</td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr className="bg-stone-50/80 font-bold text-stone-950 border-t-2 border-stone-200">
                  <td colSpan={7} className="px-4 py-4 text-right text-xs uppercase tracking-widest font-black text-stone-500">
                    Total Keseluruhan
                  </td>
                  <td className="px-4 py-4 text-right text-base font-black text-[#2C5E43] bg-[#2C5E43]/5">
                    Rp723.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-sm leading-relaxed text-stone-700 space-y-4 text-justify">
            <p>
              Rincian anggaran ini disusun sebagai bentuk transparansi penggunaan dana sekaligus acuan bagi warga yang ingin mereplikasi Teba secara mandiri. Struktur utamanya terdiri dari tiga buis beton bertingkat — satu ditanam sebagai fondasi, dua lainnya ditumpuk di atasnya — lalu ditutup penutup beton agar terlindung dari air hujan dan hewan pengganggu. Selain itu, anggaran juga mencakup cat hitam dan kuas untuk menuliskan label "KKNT IDBU 52" sebagai penanda identitas program.
            </p>
            <p>
              Dengan total estimasi biaya Rp723.000, anggaran ini tergolong terjangkau namun tetap mempertimbangkan kebutuhan jangka panjang — membuktikan bahwa pengelolaan sampah organik mandiri dan komunal bukan hanya solusi ramah lingkungan, tapi juga cara hemat pengeluaran dibanding iuran pembuangan sampah rutin, sejalan dengan visi Kelurahan Mijen yang bersih, hijau, dan mandiri sampah.
            </p>
          </div>
        </section>

        <BookViewer />

      </div>
    </main>
  );
}