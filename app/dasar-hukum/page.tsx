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
    basis: "Sanksi Administratif (Pasal 76 UU PPLH)",
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
  "Mengelola sampah rumah tangga dengan cara yang berwawasan lingkungan, antara lain melalui pemilahan sampah.",
  "Berperan aktif dalam kegiatan pengurangan dan penanganan sampah.",
  "Tidak melakukan pembuangan dan/atau pembakaran sampah secara terbuka yang tidak sesuai dengan persyaratan teknis.",
  "Melaporkan kepada instansi terkait apabila mengetahui adanya praktik pembakaran sampah yang mencemari lingkungan.",
  "Turut menanggulangi dan memulihkan fungsi lingkungan apabila terjadi pencemaran.",
];

export default function DasarHukumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f4f2] font-sans selection:bg-amber-200 selection:text-stone-900">
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        
        {/* breadcrumb - Gaya minimalis */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          <span className="border-b-2 border-amber-700 pb-0.5 text-xs font-bold uppercase tracking-widest text-stone-900">
            Lembaran Informasi
          </span>
        </div>

        {/* hero - Gaya Dokumen/Dossier */}
        <section className="relative overflow-hidden rounded-md border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
          {/* Aksen pita atas ala dokumen */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-stone-900" />
          
          <div className="mb-4 inline-flex items-center gap-2 border border-stone-200 bg-stone-50 px-3 py-1.5 rounded-sm">
            <svg className="h-4 w-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.031.352 5.988 5.988 0 002.031-.352c.483-.174.711-.703.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97zM12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75" />
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-stone-700">
              Regulasi &amp; Kepatuhan Hukum
            </span>
          </div>

          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-stone-900 sm:text-4xl sm:leading-snug">
            Dasar Hukum Larangan Pembakaran Sampah
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
            Pemerintah tidak semata-mata langsung menghukum masyarakat. Regulasi dibuat agar kita semua memiliki pedoman yang jelas dalam menjaga lingkungan. Tujuan utamanya bukanlah memberi sanksi, melainkan mencegah terjadinya kebakaran dan pencemaran udara demi kepentingan umum.
          </p>

          <div className="mt-8 p-1">
            <img 
              src="/images/hukum-pembakaran.png" 
              alt="Ilustrasi Hukum Pembakaran Sampah" 
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* peraturan yang berlaku */}
        <section id="peraturan" className="mt-12 scroll-mt-24">
          <div className="mb-6 flex items-center gap-3 border-b-2 border-stone-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-stone-900">I. Peraturan yang Berlaku</h2>
          </div>

          <div className="flex flex-col gap-4">
            {regulations.map((reg) => (
              <details
                key={reg.title}
                className="group bg-white border border-stone-200 border-l-[6px] border-l-stone-400 transition-all open:border-l-amber-700 open:shadow-sm"
                open={reg.defaultOpen}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900">{reg.title}</h3>
                    <p className="mt-1 text-sm text-stone-500">{reg.subtitle}</p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500 group-open:bg-amber-100 group-open:text-amber-700 transition-colors">
                    <svg className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col gap-0 border-t border-stone-100 px-5 pb-6 pt-2 sm:px-6">
                  {reg.points.map((point, idx) => (
                    <div key={point.ref} className={`py-4 ${idx !== reg.points.length - 1 ? 'border-b border-stone-100/70' : ''}`}>
                      <div className="flex flex-col sm:flex-row sm:gap-6">
                        <div className="mb-2 sm:mb-0 sm:w-1/4 shrink-0">
                          <span className="inline-block bg-stone-100 px-2 py-1 text-xs font-bold text-stone-700 rounded-sm">
                            {point.ref}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-stone-700 sm:w-3/4">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-6 border-l-4 border-amber-600 bg-amber-50 p-5 rounded-r-md">
            <p className="text-sm font-medium italic leading-relaxed text-amber-900">
              Catatan: Membakar sampah tidak dibenarkan oleh aturan perundang-undangan mana pun. Di Kota Semarang sendiri, praktik ini diawasi secara khusus guna menekan risiko polusi udara.
            </p>
          </div>
        </section>

        {/* sanksi hukum */}
        <section id="sanksi" className="mt-12 scroll-mt-24">
          <div className="mb-6 flex items-center gap-3 border-b-2 border-stone-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-stone-900">II. Ketentuan Pidana &amp; Sanksi</h2>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-stone-600">
            Berdasarkan kaidah hukum yang berlaku, setiap pelanggaran atas larangan pembakaran sampah dapat dikenai sanksi administratif hingga pidana, disesuaikan dengan tingkat kerugian yang ditimbulkan.
          </p>

          {/* desktop table - Gaya Tabel Hukum */}
          <div className="hidden overflow-hidden rounded-sm border border-stone-300 md:block bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-stone-800 bg-stone-900 text-stone-100">
                  <th className="w-1/4 px-6 py-4 font-serif text-sm font-bold tracking-wide">Dasar Hukum</th>
                  <th className="w-2/5 px-6 py-4 font-serif text-sm font-bold tracking-wide">Tindak Pelanggaran</th>
                  <th className="px-6 py-4 font-serif text-sm font-bold tracking-wide">Ancaman Hukuman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {sanctions.map((row, index) => (
                  <tr key={row.basis} className={index % 2 === 0 ? "bg-white" : "bg-stone-50/50"}>
                    <td className="px-6 py-4 align-top font-semibold text-stone-900">{row.basis}</td>
                    <td className="px-6 py-4 align-top leading-relaxed text-stone-700">{row.violation}</td>
                    <td className="px-6 py-4 align-top font-medium leading-relaxed text-amber-800">{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* mobile cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {sanctions.map((row) => (
              <div key={row.basis} className="rounded-sm border border-stone-200 bg-white p-5 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1.5 bg-stone-800" />
                <h4 className="font-bold text-stone-900 mb-2">{row.basis}</h4>
                <div className="mt-3 space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Pelanggaran</span>
                    <p className="mt-0.5 text-sm leading-snug text-stone-700">{row.violation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Sanksi</span>
                    <p className="mt-0.5 text-sm font-medium text-amber-800">{row.penalty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* hak dan kewajiban */}
        <section id="hak-kewajiban" className="mt-12 scroll-mt-24">
          <div className="mb-6 flex items-center gap-3 border-b-2 border-stone-200 pb-3">
            <h2 className="font-serif text-2xl font-bold text-stone-900">III. Hak dan Kewajiban Warga Negara</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Hak */}
            <div className="rounded-sm border border-stone-200 bg-white p-6 shadow-sm border-t-4 border-t-stone-800">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hak Masyarakat
              </h3>
              <ul className="flex flex-col gap-4">
                {rights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-stone-600">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kewajiban */}
            <div className="rounded-sm border border-stone-200 bg-white p-6 shadow-sm border-t-4 border-t-amber-700">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Kewajiban Masyarakat
              </h3>
              <ul className="flex flex-col gap-4">
                {obligations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-stone-600">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-[10px] font-bold text-amber-700">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* closing statement - Gaya Konklusi */}
        <section className="mt-12 rounded-sm border border-stone-800 bg-stone-900 p-8 shadow-md relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-2 bg-amber-600" />
          <h3 className="font-serif text-xl font-bold text-white mb-3">Ketentuan Penutup</h3>
          <p className="text-sm leading-relaxed text-stone-300">
            Hukum dibentuk untuk merawat ketertiban bersama. Apabila satu rumah berhenti membakar sampah, lingkungan akan mulai bernapas. Jika satu wilayah mematuhinya secara kolektif, kita sedang menyelamatkan generasi masa depan dari bahaya polusi dan ancaman bencana kebakaran.
          </p>
        </section>

      </div>
    </main>
  );
}