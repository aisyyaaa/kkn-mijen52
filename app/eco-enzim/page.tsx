import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RatioCalculator from "./RatioCalculator";

export const metadata: Metadata = {
  title: "Pelatihan Eco-Enzyme – KKN-T IDBU 52 UNDIP",
  description:
    "Panduan pelatihan pembuatan eco-enzyme dari sisa buah dan sayuran rumah tangga untuk mendukung pengelolaan sampah organik di Kelurahan Mijen.",
};

const learningGoals = [
  {
    title: "Memilih bahan",
    desc: "Membedakan bahan organik yang sesuai dan yang perlu dihindari selama fermentasi.",
    icon: "🥬",
  },
  {
    title: "Menghitung komposisi",
    desc: "Menerapkan rasio gula, bahan organik, dan air secara tepat dengan panduan interaktif.",
    icon: "⚖️",
  },
  {
    title: "Memantau fermentasi",
    desc: "Mengenali perubahan normal serta mengambil tindakan ketika proses membutuhkan perhatian.",
    icon: "🫙",
  },
];

const allowedMaterials = [
  "Kulit jeruk, nanas, apel, atau pepaya",
  "Sisa dan potongan sayuran mentah",
  "Gula merah, gula aren, atau molase",
  "Air bersih yang tidak tercampur sabun",
];

const avoidedMaterials = [
  "Daging, ikan, tulang, dan produk hewani",
  "Makanan matang yang berminyak atau bersantan",
  "Sisa makanan yang sangat asin",
  "Plastik, logam, kaca, sabun, dan bahan kimia",
];

const makingSteps = [
  {
    num: "01",
    title: "Siapkan wadah",
    desc: "Gunakan wadah plastik bermulut lebar yang bersih, kering, dan memiliki tutup. Hindari wadah kaca karena tekanan gas dapat meningkat.",
  },
  {
    num: "02",
    title: "Larutkan gula",
    desc: "Campurkan gula merah, gula aren, atau molase dengan air sesuai hasil kalkulator sampai cukup larut.",
  },
  {
    num: "03",
    title: "Potong bahan organik",
    desc: "Cacah kulit buah dan sisa sayuran agar ukurannya lebih kecil sehingga permukaannya lebih mudah terfermentasi.",
  },
  {
    num: "04",
    title: "Campurkan bahan",
    desc: "Masukkan bahan organik ke dalam larutan gula. Pastikan seluruh bahan basah dan sisakan ruang kosong sekitar 20% pada wadah.",
  },
  {
    num: "05",
    title: "Tutup dan beri label",
    desc: "Tutup wadah, lalu tuliskan tanggal pembuatan dan perkiraan waktu panen agar proses mudah dipantau.",
  },
  {
    num: "06",
    title: "Fermentasikan",
    desc: "Simpan di tempat teduh dengan sirkulasi udara baik. Pantau tekanan wadah dan kondisi campuran secara berkala.",
  },
];

const fermentationTimeline = [
  { time: "Hari 1", title: "Mulai fermentasi", desc: "Periksa kembali rasio, tutup, ruang kosong, dan label tanggal." },
  { time: "Minggu awal", title: "Gas mulai terbentuk", desc: "Buka tutup sebentar secara hati-hati bila wadah mengembang, lalu tutup kembali." },
  { time: "Bulan 1–2", title: "Pantau perubahan", desc: "Amati warna, aroma asam-manis, serta pastikan bahan tetap berada dalam cairan." },
  { time: "Sekitar bulan ke-3", title: "Saring dan simpan", desc: "Pisahkan cairan dari residu, beri label, lalu simpan dalam wadah tertutup." },
];

const fermentationChecks = [
  { state: "Normal", title: "Aroma asam-manis", desc: "Aroma fermentasi dan warna cairan yang makin cokelat umumnya merupakan perubahan yang diharapkan.", tone: "lime" },
  { state: "Pantau", title: "Lapisan putih tipis", desc: "Dapat muncul pada permukaan. Pastikan bahan tetap terendam dan amati perubahan berikutnya.", tone: "amber" },
  { state: "Perlu perhatian", title: "Jamur gelap atau bau busuk", desc: "Hentikan penggunaan hasil, pisahkan dari area pengolahan makanan, dan evaluasi kebersihan serta komposisi bahan.", tone: "red" },
];

const safetyNotes = [
  "Eco-enzyme bukan untuk diminum dan bukan produk medis.",
  "Jangan mencampurkannya dengan pemutih, detergen, atau bahan kimia lain.",
  "Gunakan hanya untuk pemanfaatan nonpangan sesuai panduan pengenceran pelatihan.",
  "Beri label yang jelas dan simpan jauh dari jangkauan anak-anak.",
];

export default function EcoEnzimPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFFCF4] text-stone-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(217,119,6,0.10),transparent_32%),radial-gradient(circle_at_90%_12%,rgba(77,124,15,0.12),transparent_30%),linear-gradient(180deg,#FFFCF4_0%,#F7F7E9_48%,#FFFDF7_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-4 sm:px-6 md:pt-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-amber-100 bg-white/75 px-4 py-3 shadow-[0_18px_55px_rgba(120,53,15,0.06)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition hover:text-amber-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          <span className="rounded-full bg-lime-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-lime-800 ring-1 ring-lime-200">
            ProKlim Mijen
          </span>
        </div>

        <section className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-amber-100 bg-white/72 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.06)] backdrop-blur sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_0_5px_rgba(217,119,6,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-800">Pelatihan Warga RW 7 Kelurahan Mijen</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-stone-950 sm:text-5xl lg:text-6xl">
              Sisa Dapur Bukan Sekadar Sampah
              <span className="mt-2 block bg-gradient-to-r from-amber-600 via-lime-600 to-teal-700 bg-clip-text text-transparent">
                Olah Menjadi Eco-Enzyme
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              Pelajari cara memilih bahan, menghitung komposisi, melakukan fermentasi, dan memantau hasilnya melalui panduan praktis yang dapat diterapkan dari rumah.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#komposisi" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-lime-600 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(217,119,6,0.22)] transition hover:-translate-y-0.5">
                Hitung Komposisi
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#langkah" className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-extrabold text-stone-700 transition hover:-translate-y-0.5 hover:border-lime-300 hover:text-lime-800">
                Lihat Tahapan
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-x-8 bottom-2 h-20 rounded-full bg-amber-300/20 blur-3xl" />
            <Image
              src="/images/eco-enzyme-hero.png"
              alt="Bahan pelatihan eco-enzyme berupa wadah fermentasi, sisa buah, gula merah, dan air"
              width={1254}
              height={1254}
              priority
              className="relative z-10 h-auto w-full max-w-[470px] rounded-[2rem] object-cover mix-blend-multiply"
            />
          </div>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-lime-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-lime-800 ring-1 ring-lime-200">Tujuan Pelatihan</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">Setelah belajar, warga dapat mempraktikkannya</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-500">Eco-enzyme adalah cairan hasil fermentasi gula, air, serta sisa buah dan sayuran. Keberhasilan proses dimulai dari bahan dan komposisi yang tepat.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {learningGoals.map((goal) => (
              <article key={goal.title} className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-md">
                <span className="text-3xl" aria-hidden>{goal.icon}</span>
                <h3 className="mt-4 text-lg font-black text-stone-900">{goal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">{goal.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="komposisi" className="mt-12 scroll-mt-24">
          <div className="mb-7 text-center">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">Rasio 1 : 3 : 10</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">Komposisi yang mudah diingat</h2>
          </div>
          <RatioCalculator />
        </section>

        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-teal-800 ring-1 ring-teal-200">Pilih Bahan</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">Boleh masuk atau perlu dihindari?</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <MaterialCard title="Bahan yang dapat digunakan" items={allowedMaterials} tone="allowed" />
            <MaterialCard title="Bahan yang perlu dihindari" items={avoidedMaterials} tone="avoided" />
          </div>
        </section>

        <section id="langkah" className="mt-12 scroll-mt-24">
          <div className="text-center">
            <span className="rounded-full bg-lime-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-lime-800 ring-1 ring-lime-200">Praktik Bertahap</span>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-950 sm:text-4xl">Enam langkah pembuatan</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-500">Siapkan seluruh bahan sebelum memulai agar komposisi dan kebersihan tetap terjaga.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {makingSteps.map((step) => (
              <article key={step.num} className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-sm">
                <span className="absolute -right-2 -top-5 text-7xl font-black text-amber-100">{step.num}</span>
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-lime-600 text-xs font-black text-white">{step.num}</span>
                <h3 className="relative mt-5 text-lg font-black text-stone-900">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-stone-500">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-lime-200 bg-white/80 p-6 shadow-sm sm:p-8">
            <span className="rounded-full bg-lime-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-lime-800">Timeline Fermentasi</span>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-950 sm:text-3xl">Pantau hingga sekitar tiga bulan</h2>
            <div className="mt-7 space-y-5">
              {fermentationTimeline.map((item, index) => (
                <div key={item.time} className="relative flex gap-4">
                  {index < fermentationTimeline.length - 1 && <span className="absolute left-5 top-10 h-[calc(100%+0.25rem)] w-px bg-lime-200" />}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-700 text-xs font-black text-white">{index + 1}</span>
                  <div className="pb-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-lime-700">{item.time}</p>
                    <h3 className="mt-1 text-sm font-black text-stone-900">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-200 bg-amber-50/70 p-6 shadow-sm sm:p-8">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800">Cek Kondisi</span>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-stone-950 sm:text-3xl">Apakah fermentasinya berjalan baik?</h2>
            <div className="mt-6 space-y-3">
              {fermentationChecks.map((check) => (
                <CheckCard key={check.title} {...check} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 overflow-hidden rounded-[2rem] border border-teal-800/10 bg-gradient-to-br from-teal-800 via-teal-800 to-lime-800 p-7 text-white shadow-[0_24px_70px_rgba(15,118,110,0.20)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-lime-100">Panen dengan Aman</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Saring, beri label, lalu simpan</h2>
              <p className="mt-4 text-sm leading-7 text-teal-50/85">Pisahkan cairan dari residu menggunakan saringan bersih. Simpan keduanya dalam wadah berlabel agar tidak tertukar dengan bahan pangan.</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-lime-100">Catatan keselamatan</p>
              <ul className="mt-4 space-y-3">
                {safetyNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3 text-xs leading-5 text-white/85">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime-300 text-[10px] font-black text-teal-950">✓</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-amber-200 bg-white/80 p-7 text-center shadow-sm sm:p-10">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-amber-800">Alur Pengelolaan Sampah</span>
          <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-stone-950 sm:text-3xl">Mulai dari memilah sampah di rumah</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-500">Pisahkan sampah organik terlebih dahulu, ambil sisa buah dan sayuran yang sesuai, lalu olah melalui fermentasi eco-enzyme.</p>
          <Link href="/memilah-sampah" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-lime-300 bg-lime-50 px-6 py-3 text-sm font-extrabold text-lime-800 transition hover:-translate-y-0.5 hover:bg-lime-100">
            Pelajari Cara Memilah Sampah
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </main>
  );
}

function MaterialCard({ title, items, tone }: { title: string; items: string[]; tone: "allowed" | "avoided" }) {
  const allowed = tone === "allowed";
  return (
    <article className={`rounded-[2rem] border bg-white/80 p-6 shadow-sm sm:p-8 ${allowed ? "border-lime-200" : "border-amber-200"}`}>
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-black ${allowed ? "bg-lime-100 text-lime-800" : "bg-amber-100 text-amber-800"}`}>{allowed ? "✓" : "×"}</span>
        <h3 className={`text-lg font-black ${allowed ? "text-lime-800" : "text-amber-800"}`}>{title}</h3>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`rounded-2xl border px-4 py-3 text-xs font-semibold leading-5 ${allowed ? "border-lime-100 bg-lime-50/70 text-lime-900" : "border-amber-100 bg-amber-50/70 text-amber-950"}`}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CheckCard({ state, title, desc, tone }: { state: string; title: string; desc: string; tone: string }) {
  const styles = {
    lime: "border-lime-200 bg-lime-50 text-lime-800",
    amber: "border-amber-200 bg-white text-amber-800",
    red: "border-red-200 bg-red-50 text-red-800",
  }[tone] ?? "border-stone-200 bg-white text-stone-800";

  return (
    <article className={`rounded-2xl border p-4 ${styles}`}>
      <span className="text-[9px] font-black uppercase tracking-[0.16em] opacity-75">{state}</span>
      <h3 className="mt-1 text-sm font-black">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-stone-600">{desc}</p>
    </article>
  );
}
