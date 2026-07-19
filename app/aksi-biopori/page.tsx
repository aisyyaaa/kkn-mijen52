import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AudienceBenefits from "./AudienceBenefits";


export const metadata: Metadata = {
  title: "Edukasi Biopori - KKN-T IDBU 52 UNDIP",
  description:
    "Edukasi pembuatan lubang biopori sebagai media peningkatan pengetahuan masyarakat RW 7 tentang pengelolaan sampah organik dan konservasi air di Kelurahan Mijen.",
};

/* ── Data ── */

const problems = [
  {
    title: "Genangan Air",
    desc: "Minimnya area resapan menyebabkan air hujan menggenang di lingkungan permukiman warga, terutama saat musim penghujan.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M12 7a5 5 0 00-4.9 6H6a4 4 0 004 4h4a4 4 0 004-4h-1.1A5 5 0 0012 7z" />
    ),
  },
  {
    title: "Krisis Air Tanah",
    desc: "Permukaan tanah yang tertutup beton dan paving mengurangi kemampuan tanah menyerap air hujan ke dalam cadangan air tanah.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    ),
  },
  {
    title: "Sampah Organik Menumpuk",
    desc: "Volume sampah organik rumah tangga yang besar sering kali terbuang begitu saja ke TPA tanpa diolah menjadi kompos.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    ),
  },
  {
    title: "Kerusakan Ekosistem Tanah",
    desc: "Berkurangnya cacing dan mikroorganisme tanah akibat minimnya bahan organik yang dikembalikan ke dalam tanah secara alami.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

const makeSteps = [
  {
    num: "01",
    title: "Siapkan Alat & Tentukan Lokasi",
    desc: "Siapkan bor tanah (auger) atau linggis, pipa PVC diameter 10 cm yang telah dilubangi kecil di sisinya, serta penutup kawat kasa. Pilih lokasi resapan air hujan di pekarangan, minimal 50 cm dari pondasi.",
    image: "/images/biopori-tools.png",
  },
  {
    num: "02",
    title: "Buat Lubang Silinder",
    desc: "Gali lubang vertikal tegak lurus ke dalam tanah sedalam 50–100 cm. Jika tanah keras, basahi dengan air terlebih dahulu agar bor lebih mudah berputar.",
    image: "/images/biopori-digging.png",
  },
  {
    num: "03",
    title: "Pasang Pipa PVC Dinding",
    desc: "Masukkan pipa PVC ke dalam lubang agar dinding tanah tidak mudah longsor. Buat mulut pipa sejajar atau menonjol 2-3 cm dari permukaan tanah dan padatkan bagian pinggiran.",
    image: null,
  },
  {
    num: "04",
    title: "Isi Sampah Organik",
    desc: "Penuhi lubang secara bertahap dengan sampah organik: dedaunan kering, sisa sayur, kulit buah. Sampah ini mengundang cacing tanah membuat liang biopori alami yang mempercepat resapan air.",
    image: null,
  },
  {
    num: "05",
    title: "Tutup & Panen Kompos",
    desc: "Tutup lubang dengan kawat kasa atau penutup PVC berlubang agar aman dilewati. Setiap 2–3 bulan, keluarkan kompos hitam yang sudah matang untuk pupuk tanaman, lalu isi kembali dengan sampah baru.",
    image: "/images/biopori-complete.png",
  },
];

const useSteps = [
  {
    title: "Masukkan Sampah Organik Harian",
    desc: "Masukkan sisa dapur atau kebun yang tergolong organik setiap harinya ke dalam lubang biopori.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V9m0 0a5 5 0 015-5m-5 5a5 5 0 00-5-5m5 5v10m-5 0h10" />
      </svg>
    ),
  },
  {
    title: "Cacah Sampah Berukuran Besar",
    desc: "Potong atau cacah sisa bahan makanan yang berukuran besar agar mempercepat penguraian oleh mikroorganisme.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.12 14.12L21 21M9.88 9.88L3 3m5 5a3.5 3.5 0 10-5 0 3.5 3.5 0 005 0zm11 8a3.5 3.5 0 10-5 0 3.5 3.5 0 005 0z" />
      </svg>
    ),
  },
  {
    title: "Campurkan Sampah Basah & Kering",
    desc: "Campurkan sampah dapur basah dengan dedaunan kering agar kelembaban di dalam lubang seimbang.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3c-4.97 0-9 4.03-9 9a9 9 0 009 9M12 3c4.97 0 9 4.03 9 9a9 9 0 01-9 9" />
      </svg>
    ),
  },
  {
    title: "Hindari Sampah Anorganik",
    desc: "Pastikan tidak ada plastik, logam, kaca, minyak, atau bahan kimia yang masuk ke dalam lubang.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Tutup Rapat Setelah Digunakan",
    desc: "Selalu tutup kembali penutup biopori setelah digunakan agar terhindar dari air hujan berlebih dan hewan pengganggu.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const allowedTrash = [
  "Sisa sayuran mentah/masak",
  "Kulit buah-buahan",
  "Daun kering & ranting kecil",
  "Rumput & tanaman pangkas",
  "Ampas kopi & ampas teh",
  "Cangkang telur (dihancurkan)",
  "Sisa nasi & roti basi",
];

const forbiddenTrash = [
  "Plastik & kantong saset",
  "Kaca & botol beling",
  "Logam, kaleng, & kawat",
  "Daging mentah (mengundang tikus)",
  "Minyak goreng bekas",
  "Bahan kimia (detergen, pestisida)",
  "Sampah medis & obat kedaluwarsa",
];

const benefits = [
  { title: "Mencegah Genangan", desc: "Mempercepat resapan air hujan ke dalam tanah secara alami.", color: "text-[#0D7C66] bg-[#0D7C66]/5 border-[#0D7C66]/10" },
  { title: "Mengisi Cadangan Air Tanah", desc: "Meningkatkan volume air yang tersimpan di bawah permukaan.", color: "text-[#1B6B93] bg-[#1B6B93]/5 border-[#1B6B93]/10" },
  { title: "Menghasilkan Kompos Alami", desc: "Sampah organik terurai menjadi pupuk berkualitas tinggi.", color: "text-[#0D7C66] bg-[#0D7C66]/5 border-[#0D7C66]/10" },
  { title: "Menyuburkan Tanah", desc: "Mengundang cacing tanah yang membuat pori-pori alami.", color: "text-[#1B6B93] bg-[#1B6B93]/5 border-[#1B6B93]/10" },
  { title: "Mengurangi Sampah TPA", desc: "Sampah organik diolah di sumbernya tanpa perlu diangkut.", color: "text-[#0D7C66] bg-[#0D7C66]/5 border-[#0D7C66]/10" },
  { title: "Hemat Biaya Pupuk", desc: "Mengurangi pengeluaran untuk pembelian pupuk eksternal.", color: "text-[#1B6B93] bg-[#1B6B93]/5 border-[#1B6B93]/10" },
];

const tips = [
  "Pisahkan sampah organik dan anorganik dengan disiplin sejak di dapur.",
  "Potong sampah menjadi ukuran sekecil mungkin agar mikroorganisme bekerja lebih cepat.",
  "Hindari memasukkan makanan berminyak atau berkuah berlebihan.",
  "Pastikan penutup biopori terpasang dengan baik setelah digunakan.",
  "Tambahkan daun kering jika kondisi di dalam lubang terlalu basah.",
  "Jangan memasukkan sampah plastik, puntung rokok, atau bahan kimia.",
];

const envImpacts = [
  "Mengurangi genangan dan risiko banjir lokal di lingkungan RW 7 Kelurahan Mijen.",
  "Meningkatkan cadangan air tanah untuk kebutuhan sumur dan vegetasi sekitar.",
  "Membantu menekan volume sampah organik yang dibuang ke TPA dari sumbernya.",
  "Mendukung penerapan konsep zero-waste dan ekonomi sirkular tingkat rumah tangga.",
  "Mewujudkan lingkungan RW yang lebih bersih, hijau, dan berkelanjutan.",
];

/* ── Component ── */

export default function AksiBioporiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-stone-900">
      {/* Background Decor */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(13,124,102,0.06),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(27,107,147,0.06),transparent_30%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-4 sm:px-6 md:pt-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-stone-200/60 bg-white/70 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.04)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition hover:text-[#0D7C66]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
            ProKlim Mijen
          </span>
        </div>

        {/* ─── HERO SECTION ─── */}
        <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200/50 bg-white/60 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.02)] backdrop-blur-md sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0D7C66]/20 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#0D7C66] shadow-[0_0_0_5px_rgba(13,124,102,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0D7C66]">Edukasi Warga RW 7</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-6xl">
              Genangan Air? Sampah Menumpuk?
              <span className="mt-2 block bg-gradient-to-r from-[#0D7C66] via-[#1B9C85] to-[#1B6B93] bg-clip-text text-transparent">
                Biopori Solusinya
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              Apakah saat musim hujan di sekitar rumah sering ada genangan air? Atau sampah dapur seperti kulit buah dan sisa sayur biasanya langsung dibuang begitu saja? Padahal, air hujan sayang kalau langsung mengalir ke selokan dan sampah organik masih bisa dimanfaatkan.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              <strong>Lubang Biopori</strong> adalah solusinya &mdash; lubang sederhana yang membantu air hujan meresap ke tanah sekaligus mengubah sampah organik menjadi kompos alami. Tidak butuh listrik, tidak pakai mesin, cukup manfaatkan sampah organik yang setiap hari pasti ada di rumah.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="relative mx-auto flex max-w-[440px] items-center justify-center py-4 w-full">
              {/* soft glow shadow */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,124,102,0.20),rgba(27,107,147,0.10)_60%,transparent_75%)] blur-2xl" />

              {/* sparkle accents */}
              <span className="animate-float-sparkle absolute right-[4%] top-[4%] h-2.5 w-2.5 rounded-full bg-[#0D7C66] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(13,124,102,0.2)]" />
              <span
                className="animate-float-sparkle absolute left-[2%] top-[24%] h-2 w-2 rounded-full bg-[#1B6B93] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(27,107,147,0.2)]"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="animate-float-sparkle absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-[#0D7C66] shadow-[0_0_0_6px_rgba(255,255,255,0.7),0_8px_22px_rgba(13,124,102,0.2)]"
                style={{ animationDelay: "2.1s" }}
              />

              <div className="animate-float-card relative w-full flex justify-center bg-white rounded-2xl">
                <Image
                  src="/images/biopori-hero.png"
                  alt="Lubang Biopori"
                  width={800}
                  height={800}
                  className="relative z-10 h-auto w-full max-w-[390px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── MENGAPA PERLU BIOPORI? ─── */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
              Latar Belakang &amp; Urgensi
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Mengapa Kita Perlu Biopori?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Lingkungan permukiman yang minim area resapan membutuhkan solusi konservasi air dan pengelolaan sampah dari sumbernya.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0D7C66]/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D7C66]/10 text-[#0D7C66] transition-colors group-hover:bg-[#0D7C66] group-hover:text-white">
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
          <div className="mt-8 rounded-[2rem] border border-[#0D7C66]/10 bg-gradient-to-r from-[#0D7C66]/5 to-[#1B6B93]/5 p-6 text-center backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold leading-relaxed text-[#0D7C66] sm:text-base">
              💡 <strong>Solusi:</strong> Dengan membuat lubang biopori, air hujan dapat langsung meresap ke dalam tanah, sementara sampah organik terurai menjadi kompos alami. Satu lubang biopori kecil, dampak besar untuk lingkungan!
            </p>
          </div>
        </section>

        {/* ─── KENAPA MENARIK ─── */}
        <section className="mt-12">
          <div className="rounded-[2rem] border border-[#0D7C66]/15 bg-gradient-to-r from-[#0D7C66]/5 via-white to-[#1B6B93]/5 p-8 text-center shadow-sm backdrop-blur-sm sm:p-10">
            <span className="text-4xl">✨</span>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Kenapa Program Ini Menarik?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              &ldquo;Biopori ini sebenarnya <strong>sederhana</strong>. Tidak membutuhkan listrik, tidak memakai mesin, dan cukup memanfaatkan <strong>sampah organik</strong> yang setiap hari pasti ada di rumah.&rdquo;
            </p>
            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
              {["Tanpa Listrik", "Tanpa Mesin", "Sampah Jadi Kompos", "Mudah Diterapkan"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#0D7C66]/20 bg-white/80 px-4 py-2 text-xs font-bold text-[#0D7C66] shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MANFAAT PER KELOMPOK WARGA ─── */}
        <AudienceBenefits />

        {/* ─── CARA PEMBUATAN BIOPORI ─── */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#1B6B93]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#1B6B93] ring-1 ring-[#1B6B93]/20">
              Langkah Pembuatan
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Cara Membuat Lubang Biopori</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Ikuti 5 tahapan praktis pembuatan biopori berikut untuk dipraktikkan langsung di rumah.
            </p>
          </div>

          <div className="mt-8 relative">
            {/* Connecting line for desktop */}
            <div className="absolute left-[50%] top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#0D7C66]/20 via-[#1B6B93]/15 to-transparent lg:block" />

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              {makeSteps.map((step, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md lg:p-8 ${isEven ? "lg:translate-y-8" : ""
                      }`}
                  >
                    <div className="flex gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D7C66] to-[#1B6B93] text-lg font-extrabold text-white shadow-sm">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-stone-900">{step.title}</h3>
                        <p className="mt-2 text-xs leading-6 text-stone-600">{step.desc}</p>
                      </div>
                    </div>
                    {step.image && (
                      <div className="overflow-hidden rounded-2xl border border-stone-100">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex flex-col justify-center rounded-3xl border border-[#0D7C66]/10 bg-[#0D7C66]/5 p-6 text-stone-900 lg:p-8 lg:translate-y-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0D7C66]">Catatan Poin Penting</p>
                <p className="mt-3 text-xs leading-6 text-stone-700">
                  Satu rumah dapat memiliki <strong>beberapa lubang biopori</strong> tergantung luas pekarangan. Idealnya, 1 lubang biopori untuk setiap 50 m² area kedap air. Jarak antar lubang minimal 50–100 cm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CARA MENGGUNAKAN & TIPS ─── */}
        <section className="mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Cara Menggunakan */}
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
              Panduan Harian
            </span>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Cara Menggunakan Biopori</h2>
            <p className="mt-2 text-xs leading-6 text-stone-500">
              Ikuti tata cara operasional berikut agar sampah organik terurai sempurna dan resapan air optimal.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {useSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D7C66]/10 text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
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
          <div className="flex flex-col justify-between rounded-[2rem] border border-[#1B6B93]/20 bg-[#1B6B93]/5 p-6 shadow-sm backdrop-blur-md sm:p-8">
            <div>
              <span className="rounded-full bg-[#1B6B93]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#1B6B93] ring-1 ring-[#1B6B93]/20">
                Penting
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-900 sm:text-3xl">Tips Agar Biopori Optimal</h2>
              <p className="mt-2 text-xs leading-6 text-[#1B6B93]/80">
                Hindari kegagalan penguraian seperti timbulnya bau menyengat, genangan air, atau lubang yang tersumbat.
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1B6B93]" />
                    <span className="text-xs leading-5 text-stone-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-[#1B6B93]/20 bg-white/70 p-4">
              <p className="text-[11px] font-bold leading-relaxed text-[#1B6B93]">
                *Proses penguraian memakan waktu 2–3 bulan untuk berubah menjadi kompos alami yang siap dipanen.
              </p>
            </div>
          </div>
        </section>

        {/* ─── PILAH SAMPAH ─── */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
              Panduan Pilah
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">Panduan Pilah Sampah Biopori</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">
              Pisahkan dengan tepat. Tidak semua bahan aman dimasukkan ke dalam lubang biopori.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Allowed */}
            <div className="rounded-[2rem] border border-[#0D7C66]/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0D7C66]/10 text-[#0D7C66] font-bold">
                  ✓
                </span>
                <h3 className="text-lg font-black text-[#0D7C66]">Sampah yang Boleh Masuk</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Bahan-bahan ini cepat terurai secara alami dan membantu membentuk pori-pori tanah.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {allowedTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-[#0D7C66]/10 bg-[#0D7C66]/5 px-3.5 py-2.5 text-xs text-[#0D7C66]">
                    <span className="text-[#0D7C66]">✅</span>
                    <span className="font-semibold">{trash}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forbidden */}
            <div className="rounded-[2rem] border border-[#1B6B93]/15 bg-white/80 p-6 shadow-sm transition-all hover:shadow-md md:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B6B93]/10 text-[#1B6B93] font-bold">
                  ✕
                </span>
                <h3 className="text-lg font-black text-[#1B6B93]">Sampah yang Tidak Boleh Masuk</h3>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Material di bawah ini menghambat proses penguraian, beracun bagi cacing tanah, atau menyumbat lubang.
              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {forbiddenTrash.map((trash, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-[#1B6B93]/10 bg-[#1B6B93]/5 px-3.5 py-2.5 text-xs text-[#1B6B93]">
                    <span className="text-[#1B6B93]">❌</span>
                    <span className="font-semibold">{trash}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MANFAAT, HASIL, & DAMPAK ─── */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Manfaat */}
          <div>
            <span className="rounded-full bg-[#0D7C66]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
              Dampak Positif
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-stone-900">Manfaat Utama Biopori</h2>
            <p className="mt-3 text-xs leading-6 text-stone-500">
              Lubang biopori memberikan keuntungan berganda secara ekologis, ekonomis, maupun sosial bagi warga.
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

          {/* Hasil & Dampak Lingkungan */}
          <div className="flex flex-col gap-6">
            {/* Hasil yang Diperoleh + Gambar */}
            <div className="rounded-[2rem] border border-stone-200/50 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <h3 className="text-lg font-black text-stone-900">Hasil yang Diperoleh</h3>
                  <p className="text-xs text-stone-500">Kompos alami dan resapan air yang optimal.</p>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-stone-100">
                <Image
                  src="/images/biopori-benefits.png"
                  alt="Manfaat Biopori"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Kompos Alami", "Resapan Air", "Tanah Subur", "Cegah Banjir"].map((tag) => (
                  <span key={tag} className="rounded-lg bg-[#0D7C66]/10 px-3 py-1.5 text-xs font-bold text-[#0D7C66] ring-1 ring-[#0D7C66]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dampak bagi Lingkungan */}
            <div className="rounded-[2rem] border border-[#0D7C66]/20 bg-gradient-to-br from-[#0D7C66] to-[#1B6B93] p-6 text-white shadow-lg sm:p-8">
              <span className="rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#F4FAF7] backdrop-blur-sm">
                Kelurahan Mijen Sehat
              </span>
              <h3 className="mt-4 text-xl font-black tracking-[-0.02em]">Dampak Positif bagi Lingkungan</h3>
              <p className="mt-2 text-xs leading-6 text-stone-100/90">
                Penerapan biopori di tingkat rukun warga memberikan kontribusi signifikan terhadap konservasi lingkungan:
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

        {/* ─── HARAPAN & PENUTUP ─── */}
        <section className="mt-12 mb-4 overflow-hidden rounded-[2rem] border border-[#0D7C66]/20 bg-gradient-to-br from-[#0D7C66] to-[#1B6B93] p-8 text-center text-white shadow-xl sm:p-12">
          <span className="rounded-full bg-white/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-sm">
            Harapan Kami
          </span>
          <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            Langkah Kecil, Manfaat Besar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            Harapan kami, setelah melihat contoh ini, Bapak/Ibu bisa mengetahui bahwa biopori ternyata mudah diterapkan dan manfaatnya bisa dirasakan langsung di rumah masing-masing.
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm leading-7 text-white/95 italic sm:text-base sm:leading-8">
              &ldquo;Program ini bukan sekadar membuat lubang di tanah. Yang ingin kami bangun adalah <strong>kebiasaan sederhana</strong> yang manfaatnya bisa dirasakan setiap hari. Sampah dapur tidak terbuang sia-sia, tanaman mendapat pupuk alami, air hujan lebih banyak meresap ke tanah, dan lingkungan RT menjadi lebih nyaman. Semoga nanti biopori ini bisa menjadi <strong>langkah kecil yang memberi manfaat besar</strong> bagi kita semua.&rdquo;
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
