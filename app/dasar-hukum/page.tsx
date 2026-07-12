import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dasar Hukum - KKN-T IDBU 52 UNDIP",
  description:
    "Dasar hukum dan regulasi terkait larangan pembakaran sampah, mulai dari UU Pengelolaan Sampah, UU PPLH, hingga peraturan daerah Kota Semarang.",
};

const regulations = [
  {
    title: "UU No. 18 Tahun 2008",
    subtitle: "Tentang Pengelolaan Sampah",
    defaultOpen: true,
    points: [
      {
        ref: "Pasal 12 ayat (1)",
        text: "Setiap orang dalam mengelola sampah rumah tangga wajib dilakukan dengan cara yang berwawasan lingkungan.",
      },
      {
        ref: "Pasal 29 ayat (1) huruf g",
        text: "Setiap orang dilarang membakar sampah yang tidak sesuai dengan persyaratan teknis pengelolaan sampah.",
      },
      {
        ref: "Pasal 29 ayat (3) dan (4)",
        text: "Ketentuan lebih lanjut mengenai larangan tersebut diatur dalam peraturan daerah kabupaten/kota, yang juga berwenang menetapkan sanksi pidana kurungan atau denda.",
      },
      {
        ref: "Pasal 40 dan Pasal 41",
        text: "Memuat ancaman pidana bagi pengelolaan sampah yang melanggar hukum dan menimbulkan gangguan kesehatan, keamanan, pencemaran, atau kerusakan lingkungan.",
      },
    ],
  },
  {
    title: "UU No. 32 Tahun 2009 (UU PPLH)",
    subtitle: "Perlindungan dan Pengelolaan Lingkungan Hidup, sebagaimana diubah dengan UU No. 6 Tahun 2023",
    defaultOpen: false,
    points: [
      {
        ref: "Pasal 69 ayat (1)",
        text: "Memuat larangan bagi setiap orang untuk melakukan perbuatan yang mengakibatkan pencemaran dan/atau perusakan lingkungan hidup, termasuk pembukaan lahan dengan cara membakar (huruf h), kecuali bagi masyarakat hukum adat yang menerapkan kearifan lokal dengan syarat tertentu.",
      },
      {
        ref: "Pasal 98 dan Pasal 99",
        text: "Mengatur ancaman pidana bagi setiap orang yang perbuatannya mengakibatkan dilampauinya baku mutu udara, air, atau tanah, baik dilakukan dengan sengaja maupun karena kelalaian.",
      },
      {
        ref: "Pasal 53 jo. Pasal 54",
        text: "Setiap orang yang melakukan pencemaran dan/atau kerusakan lingkungan wajib melakukan penanggulangan dan memulihkan fungsi lingkungan hidup.",
      },
    ],
  },
  {
    title: "Peraturan Daerah Kota Semarang",
    subtitle: "Pelaksanaan kewenangan dari UU No. 18 Tahun 2008 di tingkat daerah",
    defaultOpen: false,
    points: [
      {
        ref: "Perda Kota Semarang No. 6 Tahun 2012",
        text: "Tentang Pengelolaan Sampah — Pasal 52 secara tegas menyatakan setiap orang dilarang membakar sampah yang tidak sesuai dengan persyaratan teknis pengelolaan sampah, dengan ancaman sanksi pidana kurungan hingga 3 (tiga) bulan atau denda hingga Rp50.000.000,00.",
      },
      {
        ref: "Perda Kota Semarang No. 12 Tahun 2025",
        text: "Tentang Pengelolaan Sampah, sebagai penyempurnaan pengaturan pengelolaan sampah di Kota Semarang.",
      },
      {
        ref: "Perwal Semarang No. 79 Tahun 2018 (diubah Perwal No. 34 Tahun 2019)",
        text: "Tentang Kebijakan dan Strategi Daerah dalam Pengelolaan Sampah Rumah Tangga dan Sampah Sejenis Sampah Rumah Tangga.",
      },
      {
        ref: "Perwal Semarang No. 4 Tahun 2024",
        text: "Tentang Rencana Induk Pengelolaan Sampah Tahun 2023–2042, arah kebijakan jangka panjang pengelolaan sampah di Kota Semarang, termasuk penghentian praktik pembuangan dan pembakaran sampah secara terbuka.",
      },
      {
        ref: "Perwal Semarang No. 27 Tahun 2019",
        text: "Tentang Pengendalian Penggunaan Plastik, relevan mengingat pembakaran sampah plastik menghasilkan zat kimia berbahaya.",
      },
    ],
  },
];

const sanctions = [
  {
    basis: "Perda Kota Semarang No. 6/2012, Pasal 52",
    violation: "Membakar sampah yang tidak sesuai persyaratan teknis pengelolaan sampah",
    penalty: "Pidana kurungan maks. 3 bulan dan/atau denda maks. Rp50.000.000,00",
  },
  {
    basis: "UU No. 18/2008, Pasal 41 ayat (1)",
    violation: "Pengelolaan sampah yang melanggar hukum yang mengakibatkan gangguan kesehatan, keamanan, atau pencemaran ringan",
    penalty: "Pidana kurungan maks. 3 tahun dan denda maks. Rp100.000.000,00",
  },
  {
    basis: "UU No. 18/2008, Pasal 40",
    violation: "Pengelolaan sampah yang melanggar hukum yang menimbulkan korban jiwa/luka berat",
    penalty: "Pidana penjara 4–10 tahun dan denda Rp100.000.000,00 – Rp5.000.000.000,00",
  },
  {
    basis: "UU No. 32/2009 (PPLH), Pasal 98–99",
    violation: "Perbuatan yang mengakibatkan dilampauinya baku mutu udara/lingkungan akibat pembakaran",
    penalty: "Pidana penjara dan denda sesuai tingkat kesengajaan/kelalaian, sebagaimana diatur dalam UU PPLH",
  },
  {
    basis: "Sanksi Administratif (Pasal 76 UU PPLH jo. peraturan pelaksana)",
    violation: "Pelanggaran izin lingkungan/ketentuan teknis pengelolaan sampah",
    penalty: "Teguran tertulis, paksaan pemerintah, pembekuan, hingga pencabutan izin",
  },
];

const rights = [
  "Mendapatkan pelayanan dalam pengelolaan sampah secara baik dan berwawasan lingkungan dari Pemerintah Daerah.",
  "Berpartisipasi dalam proses pengambilan keputusan, penyelenggaraan, dan pengawasan di bidang pengelolaan sampah.",
  "Memperoleh informasi yang benar, akurat, dan tepat waktu mengenai penyelenggaraan pengelolaan sampah.",
  "Mendapatkan perlindungan dan kompensasi karena dampak negatif akibat kegiatan tempat pemrosesan akhir sampah.",
  "Mengajukan usul, pertimbangan, dan/atau keberatan terhadap kebijakan pengelolaan sampah yang berdampak pada masyarakat.",
];

const obligations = [
  "Mengelola sampah rumah tangga dengan cara yang berwawasan lingkungan (Pasal 12 ayat (1) UU No. 18 Tahun 2008), antara lain melalui pemilahan sampah organik, anorganik, dan bahan berbahaya.",
  "Berperan aktif dalam kegiatan pengurangan dan penanganan sampah, termasuk melalui bank sampah, komposting, dan daur ulang.",
  "Tidak melakukan pembuangan dan/atau pembakaran sampah secara terbuka yang tidak sesuai dengan persyaratan teknis pengelolaan sampah.",
  "Melaporkan kepada RT/RW, Kelurahan, atau instansi terkait (Dinas Lingkungan Hidup) apabila mengetahui adanya praktik pembakaran atau pembuangan sampah yang berpotensi mencemari lingkungan atau membahayakan warga sekitar.",
  "Turut menanggulangi dan memulihkan fungsi lingkungan apabila terjadi pencemaran akibat aktivitas pengelolaan sampah yang salah (Pasal 53 jo. Pasal 54 UU PPLH).",
];

export default function DasarHukumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {/* breadcrumb */}
        <div className="mb-6 flex items-center justify-between gap-4 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-amber-700">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Beranda
          </Link>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-300">
            Dasar Hukum
          </span>
        </div>

        {/* hero */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
            <svg className="h-4 w-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.031.352 5.988 5.988 0 002.031-.352c.483-.174.711-.703.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97zM12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75"
              />
            </svg>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-800">
              Regulasi &amp; Kepatuhan Hukum
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Dasar Hukum Larangan Pembakaran Sampah
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Pemerintah sebenarnya tidak langsung menghukum masyarakat. Regulasi dibuat agar kita semua memiliki
            pedoman dalam menjaga lingkungan. Jadi tujuan utamanya bukan memberi sanksi, tetapi mencegah terjadinya
            kebakaran dan pencemaran udara.
          </p>
        </section>

        {/* peraturan yang berlaku */}
        <section id="peraturan" className="mt-8 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Peraturan yang Berlaku</h2>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {regulations.map((reg) => (
              <details
                key={reg.title}
                className="group rounded-2xl border border-slate-200 bg-white open:shadow-md open:border-slate-300 transition-shadow"
                open={reg.defaultOpen}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">{reg.title}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800 sm:text-base">{reg.subtitle}</p>
                  </div>
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="flex flex-col gap-3 border-t border-slate-100 px-5 pb-5 pt-4">
                  {reg.points.map((point) => (
                    <div key={point.ref} className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{point.ref}</p>
                      <p className="mt-1.5 text-sm leading-6 text-slate-700">{point.text}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm italic leading-7 text-amber-900">
              &quot;Memangnya membakar sampah boleh?&quot; Jawabannya sudah diatur dalam peraturan
              perundang-undangan. Bahkan di Kota Semarang sendiri terdapat aturan khusus mengenai larangan
              tersebut.
            </p>
          </div>
        </section>

        {/* sanksi hukum */}
        <section id="sanksi" className="mt-10 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Sanksi Hukum</h2>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Pelanggaran terhadap ketentuan larangan pembakaran sampah dapat dikenai dua jenis sanksi, yaitu sanksi
            administratif dan sanksi pidana, tergantung pada tingkat pelanggaran dan dampak yang ditimbulkan.
          </p>

          {/* desktop table */}
          <div className="mt-4 hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-amber-300">
                  <th className="w-1/4 px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Dasar Hukum</th>
                  <th className="w-2/5 px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Perbuatan yang Dilarang</th>
                  <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Ancaman Sanksi</th>
                </tr>
              </thead>
              <tbody>
                {sanctions.map((row, index) => (
                  <tr key={row.basis} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-4 align-top text-xs font-bold text-slate-700">{row.basis}</td>
                    <td className="px-5 py-4 align-top leading-6 text-slate-600">{row.violation}</td>
                    <td className="px-5 py-4 align-top leading-6 font-semibold text-amber-800">{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* mobile stacked cards */}
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            {sanctions.map((row) => (
              <div key={row.basis} className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Dasar Hukum</p>
                <p className="mt-1 text-xs font-bold text-slate-800">{row.basis}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-500">Perbuatan yang Dilarang</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{row.violation}</p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-500">Ancaman Sanksi</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-amber-800">{row.penalty}</p>
              </div>
            ))}
          </div>
        </section>

        {/* hak dan kewajiban */}
        <section id="hak-kewajiban" className="mt-10 scroll-mt-24">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-300">
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Hak dan Kewajiban Masyarakat</h2>
          </div>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Undang-Undang Nomor 18 Tahun 2008 mengatur secara berimbang mengenai hak dan kewajiban masyarakat dalam
            pengelolaan sampah sebagai berikut:
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700">Hak Masyarakat</p>
              <ul className="mt-3 flex flex-col gap-3">
                {rights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">Kewajiban Masyarakat</p>
              <ul className="mt-3 flex flex-col gap-3">
                {obligations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* closing statement */}
        <section className="mt-10 rounded-3xl bg-slate-900 p-6 text-white sm:p-9">
          <p className="text-sm leading-7 text-slate-200 sm:text-base">
            Kalau satu rumah saja berhenti membakar sampah, mungkin dampaknya belum terlalu terasa. Namun jika satu
            RT melakukannya bersama-sama, lingkungan akan menjadi lebih bersih, udara lebih sehat, dan risiko
            kebakaran dapat berkurang secara signifikan.
          </p>
        </section>

        <Link
          href="/"
          className="mx-auto mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-amber-300 hover:text-amber-700 sm:w-auto sm:px-8"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
