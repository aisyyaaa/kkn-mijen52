import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Edukasi TEBA - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pengelolaan sampah organik rumah tangga mandiri melalui metode TEBA (Tempat Olah Sampah Organik) di Kelurahan Mijen.",
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
    title: "Tentukan Lokasi",
    desc: "Pilih area halaman/kebun belakang yang aman, mudah dijangkau dari dapur, serta tidak mengganggu saluran air."
  },
  {
    num: "02",
    title: "Gali Tanah",
    desc: "Gali tanah dengan diameter dan kedalaman yang disesuaikan dengan ukuran buis beton yang akan dipasang."
  },
  {
    num: "03",
    title: "Pasang Buis Beton",
    desc: "Pasang buis beton (biasanya memiliki lubang kecil di sisinya untuk aerasi) hingga sebagian tertanam di dalam tanah."
  },
  {
    num: "04",
    title: "Lapisan Dasar",
    desc: "Tambahkan lapisan penyaring/penyerap di bagian dasar berupa ranting kecil, dedaunan kering, atau sedikit tanah gembur."
  },
  {
    num: "05",
    title: "Pasang Penutup",
    desc: "Lengkapi bagian atas dengan penutup (bisa berbahan beton, kayu, atau plastik tebal) untuk menjaga keamanan dan mengurangi bau."
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
    desc: "Selalu tutup kembali penutup TEBA setelah digunakan agar terhindar dari air hujan berlebih dan hewan pengganggu.",
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
  { title: "Mengurangi Volume Sampah", desc: "Mengurangi tumpukan sampah basah dari rumah.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
  { title: "Mencegah Polusi TPA", desc: "Mengurangi beban angkutan sampah dan emisi metana.", color: "text-[#8B5A2B] bg-[#8B5A2B]/5 border-[#8B5A2B]/10" },
  { title: "Pupuk Kompos Alami", desc: "Menghasilkan kompos berkualitas tinggi untuk menyuburkan tanah.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
  { title: "Tanaman Subur", desc: "Memenuhi kebutuhan nutrisi kebun rumah tangga.", color: "text-[#8B5A2B] bg-[#8B5A2B]/5 border-[#8B5A2B]/10" },
  { title: "Bebas Bau Busuk", desc: "Mengeliminasi bau tidak sedap sampah bercampur plastik.", color: "text-[#2C5E43] bg-[#2C5E43]/5 border-[#2C5E43]/10" },
  { title: "Hemat Biaya", desc: "Mengurangi pengeluaran pembelian pupuk eksternal.", color: "text-[#8B5A2B] bg-[#8B5A2B]/5 border-[#8B5A2B]/10" },
];

const tips = [
  "Pisahkan sampah organik dan anorganik dengan disiplin sejak di dapur.",
  "Hindari memasukkan makanan berminyak atau berkuah berlebihan untuk mencegah becek dan bau asam.",
  "Potong sampah menjadi ukuran sekecil mungkin agar mikroorganisme bekerja lebih cepat.",
  "Pastikan penutup TEBA terpasang dengan baik setelah digunakan.",
  "Tambahkan daun kering atau serbuk gergaji jika kondisi di dalam lubang terlalu basah atau berlumpur.",
  "Jangan memasukkan sampah plastik, puntung rokok, atau bahan kimia apa pun."
];

const envImpacts = [
  "Mengurangi pencemaran tanah dan sumber air akibat air lindi (cairan sampah).",
  "Menekan emisi gas rumah kaca dari pembusukan anaerobik di TPA.",
  "Mendukung penerapan konsep zero-waste dan ekonomi sirkular tingkat rumah tangga.",
  "Mendorong partisipasi aktif masyarakat dalam mitigasi perubahan iklim di Kelurahan Mijen.",
  "Mewujudkan lingkungan RW yang lebih bersih, hijau, sejuk, dan berkelanjutan."
];

export default function TebaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF9F5] text-stone-900">
      {/* Background Decor in green/brown earthy colors */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(44,94,67,0.10),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(139,90,43,0.10),transparent_30%),linear-gradient(180deg,#FAF9F5_0%,#F3EFE9_48%,#FAF9F5_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 md:pt-6 lg:px-8">
        
        {/* Breadcrumb Navigation - Styled with Green/Brown theme */}
        <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-stone-200/60 bg-white/70 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.04)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition hover:text-[#2C5E43]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
            ProKlim Mijen
          </span>
        </div>

        {/* Hero Section */}
        <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200/50 bg-white/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.02)] backdrop-blur-md sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2C5E43]/20 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2C5E43] shadow-[0_0_0_5px_rgba(44,94,67,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2C5E43]">Edukasi Warga RW 6</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-6xl">
              TEBA
              <span className="mt-2 block bg-gradient-to-r from-[#2C5E43] via-[#5B8C5A] to-[#8B5A2B] bg-clip-text text-transparent">
                Tempat Olah Sampah
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              <strong>TEBA (Tempat Olah Sampah Organik)</strong> adalah metode sederhana untuk mengolah sampah organik rumah tangga secara alami dengan memanfaatkan lubang atau buis beton yang ditanam di tanah. Sampah organik akan terurai oleh mikroorganisme menjadi kompos yang bermanfaat bagi tanaman.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              TEBA merupakan salah satu solusi pengelolaan sampah yang mudah diterapkan di rumah, ramah lingkungan, dan mendukung pengurangan sampah yang dibuang ke Tempat Pembuangan Akhir (TPA).
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
                  src="/images/teba-hero-v4.png"
                  alt="Instalasi TEBA Buis Beton"
                  width={800}
                  height={800}
                  className="relative z-10 h-auto w-full max-w-[390px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Perlu TEBA? */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Latar Belakang & Urgensi
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Mengapa Kita Perlu TEBA?</h2>
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
              💡 <strong>Solusi:</strong> Dengan TEBA, sampah organik dapat diolah langsung dari sumbernya di pekarangan rumah, sehingga tidak perlu seluruhnya dibuang ke TPS maupun TPA. Ini adalah langkah nyata mengurangi pencemaran lingkungan.
            </p>
          </div>
        </section>

        {/* Section: Cara Pembuatan TEBA */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#8B5A2B]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#8B5A2B] ring-1 ring-[#8B5A2B]/20">
              Langkah Pembuatan
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Cara Pembuatan TEBA</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Secara umum, pembuatan wadah TEBA memanfaatkan struktur silinder beton dengan sistem lubang resapan alami.
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
                    className={`flex gap-6 rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md lg:p-8 ${
                      isEven ? "lg:translate-y-8" : ""
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
                  TEBA dapat dibuat menggunakan <strong>satu atau lebih buis beton</strong> bertingkat sesuai dengan ketersediaan lahan dan rata-rata volume produksi sampah organik harian di rumah tangga Anda.
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
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Cara Menggunakan TEBA</h2>
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
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Tips Agar TEBA Optimal</h2>
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
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Panduan Pilah Sampah TEBA</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pisahkan dengan tepat. Tidak semua bahan organik dan anorganik aman dimasukkan ke dalam lubang beton TEBA.
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

        {/* Section: Manfaat, Hasil, & Dampak */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Manfaat */}
          <div>
            <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
              Dampak Positif
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-900">Manfaat Utama TEBA</h2>
            <p className="mt-3 text-xs leading-6 text-stone-500">
              Keberadaan TEBA memberikan keuntungan berganda baik secara ekologis maupun ekonomis bagi rumah tangga.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-2xl border border-stone-200/50 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
                  <span className={`inline-flex rounded-lg px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${benefit.color}`}>
                    Keunggulan
                  </span>
                  <h4 className="mt-2.5 text-sm font-bold text-stone-900">{benefit.title}</h4>
                  <p className="mt-1 text-xs leading-5 text-stone-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hasil Kompos & Dampak Lingkungan */}
          <div className="flex flex-col gap-6">
            {/* Hasil yang Diperoleh */}
            <div className="rounded-[2rem] border border-stone-200/50 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h3 className="text-lg font-black text-stone-900">Hasil yang Diperoleh</h3>
                  <p className="text-xs text-stone-500">Hasil olah limbah organik berkualitas tinggi.</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-stone-600">
                Dari proses pembusukan alami di dalam wadah silinder TEBA, diperoleh **Kompos Alami** yang kaya akan unsur hara. Kompos ini sangat cocok untuk menyuburkan:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Tanaman Hias", "Kebun Rumah", "Tanaman Buah", "Penghijauan RW"].map((tag) => (
                  <span key={tag} className="rounded-lg bg-[#2C5E43]/10 px-3 py-1.5 text-xs font-bold text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dampak bagi Lingkungan Kelurahan */}
            <div className="rounded-[2rem] border border-[#2C5E43]/20 bg-gradient-to-br from-[#2C5E43] to-[#8B5A2B] p-6 text-white shadow-lg sm:p-8">
              <span className="rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FAF9F5] backdrop-blur-sm">
                Kelurahan Mijen Sehat
              </span>
              <h3 className="mt-4 text-xl font-black tracking-[-0.02em]">Dampak Positif bagi Lingkungan</h3>
              <p className="mt-2 text-xs leading-6 text-stone-100/90">
                Penerapan metode TEBA di tingkat rukun tetangga/warga memberikan kontribusi signifikan terhadap lingkungan global:
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {envImpacts.map((impact, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-xs leading-5 text-stone-100">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
