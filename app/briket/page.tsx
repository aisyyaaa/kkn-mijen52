import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BriketBookViewer from "@/components/BriketBookViewer";

export const metadata: Metadata = {
  title: "Edukasi Briket Daun Kering - KKN-T IDBU 52 UNDIP",
  description:
    "Panduan pemanfaatan daun kering menjadi briket sebagai bahan bakar alternatif ramah lingkungan dan peluang usaha warga RW 07 Kelurahan Mijen.",
};

const reasons = [
  {
    number: "01",
    title: "Mengurangi Limbah Daun",
    desc: "Daun kering yang melimpah dapat dimanfaatkan sehingga tidak hanya menumpuk di lingkungan.",
  },
  {
    number: "02",
    title: "Mengurangi Pembakaran Terbuka",
    desc: "Pengolahan yang terarah membantu mengurangi kebiasaan membakar tumpukan daun tanpa pemanfaatan.",
  },
  {
    number: "03",
    title: "Menjaga Kebersihan",
    desc: "Pekarangan dan ruang bersama menjadi lebih bersih, rapi, serta nyaman bagi warga.",
  },
];

const advantages = [
  "Ramah lingkungan",
  "Panas lebih stabil",
  "Asap lebih sedikit",
  "Mudah disimpan",
  "Berpeluang menjadi usaha",
];

const tools = ["Kaleng", "Ayakan", "Pengaduk", "Cetakan", "Alas jemur", "Panci teflon"];
const materials = ["Daun kering", "Tepung tapioka", "Air"];

const makeSteps = [
  {
    number: "01",
    title: "Kumpulkan Daun Kering",
    desc: "Pilih daun yang benar-benar kering, lalu bersihkan dari plastik, batu, dan bahan anorganik lainnya.",
  },
  {
    number: "02",
    title: "Karbonisasi Daun",
    desc: "Bakar daun secara terkendali di dalam kaleng hingga berubah menjadi arang, bukan dibiarkan menjadi pembakaran terbuka.",
  },
  {
    number: "03",
    title: "Haluskan dan Ayak",
    desc: "Hancurkan hasil karbonisasi, kemudian ayak agar butiran arang menjadi halus dan seragam.",
  },
  {
    number: "04",
    title: "Buat Perekat Alami",
    desc: "Campurkan tepung tapioka dan air, lalu masak sambil diaduk hingga mengental dan menggumpal.",
  },
  {
    number: "05",
    title: "Campurkan Adonan",
    desc: "Tuangkan perekat sedikit demi sedikit ke bubuk arang, kemudian aduk hingga tercampur rata dan mudah dibentuk.",
  },
  {
    number: "06",
    title: "Cetak Briket",
    desc: "Masukkan adonan ke cetakan dan padatkan agar bentuknya kokoh serta tidak mudah hancur.",
  },
  {
    number: "07",
    title: "Jemur Hingga Kering",
    desc: "Jemur briket selama 2-3 hari sampai kering merata. Balik secara berkala bila diperlukan.",
  },
  {
    number: "08",
    title: "Simpan dan Gunakan",
    desc: "Setelah benar-benar kering, briket siap disimpan sebagai bahan bakar alternatif.",
  },
];

const storageTips = [
  "Simpan di tempat yang kering dan sejuk.",
  "Hindari tempat lembap atau terkena hujan.",
  "Jauhkan dari sumber api dan panas.",
  "Gunakan wadah yang tertutup dan bersih.",
  "Terapkan FIFO: briket yang lebih dahulu dibuat digunakan lebih dahulu.",
];

const businessPoints = [
  { title: "Bahan Baku Melimpah", desc: "Daun kering tersedia di pekarangan dan lingkungan RW 07." },
  { title: "Modal Relatif Kecil", desc: "Alat dan bahan pembuatan sederhana serta mudah diperoleh." },
  { title: "Dibutuhkan UMKM", desc: "Berpotensi digunakan oleh usaha kuliner atau kegiatan yang memerlukan bahan bakar padat." },
  { title: "Mudah Dipasarkan", desc: "Briket kering dapat dikemas rapi, diberi label, lalu dipasarkan secara lokal." },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-500">{description}</p>
    </div>
  );
}

export default function BriketPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-stone-900">
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 md:pb-24 md:pt-20 lg:px-8">
        <section className="grid items-center gap-8 rounded-[2rem] border border-stone-200/60 bg-white/65 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.03)] backdrop-blur-md sm:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2C5E43]/20 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2C5E43] shadow-[0_0_0_5px_rgba(44,94,67,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2C5E43]">Edukasi Briket</span>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-[-0.03em] text-stone-900 sm:text-5xl lg:text-6xl">
              Briket Daun Kering
              <span className="mt-2 block bg-gradient-to-r from-[#24552F] via-[#4F7D32] to-[#7A3B22] bg-clip-text text-transparent">
                Energi dari Lingkungan
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
              <strong>Briket</strong> adalah bahan bakar padat dari bahan organik mudah terbakar yang dikarbonisasi, dihaluskan, lalu dipadatkan dengan bantuan perekat alami.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              Pemanfaatan daun kering membantu warga RW 07 mengurangi limbah pekarangan sekaligus menghasilkan energi alternatif yang mudah disimpan dan bernilai guna.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#cara-membuat" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#24552F] to-[#4F7D32] px-5 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                Pelajari Cara Membuat
              </a>
              <a href="/pdf/buku-saku-briket.pdf" download className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-bold text-stone-700 shadow-sm transition hover:bg-stone-50">
                Unduh Buku Saku
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center py-6">
              <div className="animate-float-glow absolute bottom-6 left-1/2 h-20 w-3/4 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,125,50,0.28),rgba(122,59,34,0.12)_58%,transparent_75%)] blur-3xl" />
              <span className="animate-float-sparkle absolute right-[5%] top-[8%] h-2.5 w-2.5 rounded-full bg-lime-500 shadow-[0_0_0_6px_rgba(255,255,255,0.7)]" />
              <span className="animate-float-sparkle absolute left-[4%] top-[28%] h-2 w-2 rounded-full bg-amber-600 shadow-[0_0_0_6px_rgba(255,255,255,0.7)]" style={{ animationDelay: "1.2s" }} />

              <div className="animate-float-card relative w-full">
                <Image
                  src="/images/briket-hero-v2.png"
                  alt="Briket daun kering beserta bahan dan alat pembuatannya"
                  width={1254}
                  height={1254}
                  priority
                  className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_34px_rgba(36,85,47,0.18)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <SectionHeading eyebrow="Latar Belakang & Tujuan" title="Mengapa Daun Kering Perlu Diolah?" description="RW 07 memiliki lahan luas yang menghasilkan daun kering melimpah, terutama saat musim kemarau." />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr_1fr_1.15fr]">
            {reasons.map((reason) => (
              <article key={reason.number} className="group rounded-3xl border border-stone-200 bg-white/65 p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4F7D32]/30 hover:bg-white hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2C5E43]/10 text-sm font-black text-[#2C5E43]">{reason.number}</span>
                <h3 className="mt-5 text-lg font-black text-stone-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">{reason.desc}</p>
              </article>
            ))}
            <article className="rounded-3xl border border-[#2C5E43]/20 bg-gradient-to-br from-[#2C5E43] to-[#4F7D32] p-6 text-white shadow-lg shadow-emerald-950/10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-lime-200">Tujuan Kegiatan</p>
              <p className="mt-4 text-sm leading-7 text-white/90">Memberikan pengetahuan dan keterampilan kepada warga untuk mengolah daun kering menjadi bahan bakar alternatif sekaligus membuka peluang usaha baru.</p>
            </article>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 shadow-sm backdrop-blur sm:p-9">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#7A3B22]">Kenali Produknya</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900">Apa Itu Briket?</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">Briket daun kering dibuat melalui proses pengarangan, penghalusan, pencampuran dengan perekat alami, pencetakan, dan pengeringan. Bentuk padatnya membuat bahan bakar lebih praktis untuk disimpan dan digunakan.</p>
            <div className="mt-6 rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4">
              <p className="text-xs font-black uppercase tracking-wider text-amber-800">Bahan Utama Lokal</p>
              <p className="mt-1 text-sm leading-6 text-amber-950">Daun kering yang melimpah di lingkungan RW 07 menjadi bahan baku utama.</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-stone-900">Keunggulan Briket</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div key={advantage} className={`flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/65 p-4 shadow-sm ${index === advantages.length - 1 ? "sm:col-span-2" : ""}`}>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2C5E43]/10 font-black text-[#2C5E43]">✓</span>
                  <span className="text-sm font-bold text-stone-800">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-stone-200/60 bg-white/65 p-6 shadow-sm backdrop-blur sm:p-10">
          <SectionHeading eyebrow="Persiapan" title="Alat dan Bahan" description="Siapkan seluruh perlengkapan terlebih dahulu agar proses pembuatan berlangsung aman, rapi, dan efisien." />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-[#2C5E43]/15 bg-[#2C5E43]/5 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2C5E43]">Alat</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tools.map((tool, index) => <div key={tool} className="rounded-2xl bg-white p-4 text-center shadow-sm"><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span><p className="mt-3 text-sm font-bold text-stone-800">{tool}</p></div>)}
              </div>
            </div>
            <div className="rounded-3xl border border-[#7A3B22]/15 bg-[#7A3B22]/5 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#7A3B22]">Bahan</p>
              <div className="mt-5 space-y-3">
                {materials.map((material, index) => <div key={material} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7A3B22]/10 text-xs font-black text-[#7A3B22]">{index + 1}</span><span className="text-sm font-bold text-stone-800">{material}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="cara-membuat" className="mt-20 scroll-mt-24">
          <SectionHeading eyebrow="Langkah Pembuatan" title="Cara Membuat Briket Daun Kering" description="Ikuti delapan langkah berikut secara berurutan, mulai dari pemilahan daun hingga briket siap digunakan." />
          <div className="relative mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-[#2C5E43]/25 via-[#7A3B22]/20 to-transparent lg:block" />
            {makeSteps.map((step, index) => (
              <article key={step.number} className={`relative flex gap-5 rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md ${index % 2 === 1 ? "lg:translate-y-8" : ""}`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#24552F] to-[#7A3B22] text-sm font-black text-white shadow-sm">{step.number}</span>
                <div><h3 className="text-lg font-black text-stone-900">{step.title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{step.desc}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-3xl bg-gradient-to-br from-[#7A3B22] to-[#A85B31] p-7 text-white shadow-lg shadow-amber-950/10">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-100">Rasio Perekat</p>
              <div className="mt-5 flex items-end gap-3"><span className="text-5xl font-black">1</span><span className="pb-1 text-sm font-bold text-white/80">sdm tepung tapioka</span></div>
              <div className="my-4 h-px bg-white/25" />
              <div className="flex items-end gap-3"><span className="text-5xl font-black">10</span><span className="pb-1 text-sm font-bold text-white/80">sdm air</span></div>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-rose-50/80 p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-rose-700">Keselamatan Saat Praktik</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-rose-950 sm:grid-cols-2">
                <li className="rounded-2xl bg-white/70 p-4">Lakukan karbonisasi di area terbuka dan jauh dari bahan mudah terbakar.</li>
                <li className="rounded-2xl bg-white/70 p-4">Gunakan sarung tangan, masker, dan pendampingan orang dewasa.</li>
                <li className="rounded-2xl bg-white/70 p-4">Siapkan air atau pasir dan pastikan bara benar-benar padam setelah proses selesai.</li>
                <li className="rounded-2xl bg-white/70 p-4">Gunakan briket pada tungku berventilasi baik, bukan di ruang tertutup.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 shadow-sm sm:p-9">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#2C5E43]">Setelah Produksi</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900">Cara Penyimpanan</h2>
            <div className="mt-6 space-y-3">
              {storageTips.map((tip, index) => <div key={tip} className="flex gap-3 rounded-2xl bg-[#2C5E43]/5 p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2C5E43] text-xs font-black text-white">{index + 1}</span><p className="text-sm leading-6 text-stone-700">{tip}</p></div>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white/70 p-7 shadow-sm sm:p-9">
            <span className="text-xs font-black uppercase tracking-[0.16em] text-[#7A3B22]">Nilai Tambah Warga</span>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-900">Peluang Usaha Briket</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {businessPoints.map((point, index) => <article key={point.title} className="rounded-2xl border border-[#7A3B22]/10 bg-[#7A3B22]/5 p-5"><span className="text-xs font-black text-[#7A3B22]">0{index + 1}</span><h3 className="mt-2 text-base font-black text-stone-900">{point.title}</h3><p className="mt-2 text-xs leading-5 text-stone-600">{point.desc}</p></article>)}
            </div>
          </div>
        </section>

        <BriketBookViewer />

        <section className="mt-16 rounded-[2rem] border border-[#2C5E43]/15 bg-gradient-to-r from-[#2C5E43]/10 to-[#7A3B22]/10 p-7 text-center sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2C5E43]">Lanjutkan Aksi Lingkungan</p>
          <h2 className="mt-3 text-2xl font-black text-stone-900 sm:text-3xl">Mulai dari memilah, lalu olah sesuai jenisnya.</h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/memilah-sampah" className="rounded-xl bg-[#2C5E43] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5">Pelajari Pemilahan Sampah</Link>
            <Link href="/teba" className="rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-bold text-stone-700 shadow-sm transition hover:bg-stone-50">Lihat Edukasi Teba Modern</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
