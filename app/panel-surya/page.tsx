import type { Metadata } from "next";
import Image from "next/image";
import PanelBookViewer from "@/components/PanelBookViewer";

export const metadata: Metadata = {
  title: "Panel Surya - KKN-T IDBU 52 UNDIP",
  description:
    "Panduan perakitan, instalasi, pengoperasian, perawatan, dan troubleshooting lampu penerangan jalan berbasis panel surya di Kelurahan Mijen.",
};

const reasons = [
  {
    number: "01",
    title: "Mandiri Energi & Hemat Biaya",
    desc: "Memanfaatkan sinar matahari gratis sebagai sumber energi alternatif tanpa menambah beban biaya listrik bulanan warga.",
  },
  {
    number: "02",
    title: "Kendali Otomatis & Terjadwal",
    desc: "Dilengkapi mikrokontroler ESP32 dan modul RTC DS3231 presisi sehingga lampu menyala dan padam otomatis sesuai jadwal yang diatur.",
  },
  {
    number: "03",
    title: "Ramah Lingkungan & Berkelanjutan",
    desc: "Mendukung program Kelurahan Mijen Proklim dalam transisi energi bersih terbarukan dan mitigasi perubahan iklim.",
  },
];

const specifications = [
  { name: "Panel Surya", spec: "12 V (Sumber energi surya)", role: "Menghasilkan energi listrik dari sinar matahari" },
  { name: "Solar Charge Controller (SCC)", spec: "PWM 12 V", role: "Mengatur pengisian daya aki agar stabil dan awet" },
  { name: "Aki Penyimpan", spec: "SLA (Sealed Lead Acid) 12 V", role: "Menyimpan daya listrik untuk operasi malam hari" },
  { name: "Buck Converter", spec: "LM2596 (Step-Down 12V → 5V)", role: "Menyuplai daya stabil 5V ke sistem mikrokontroler" },
  { name: "Mikrokontroler Utama", spec: "ESP32 DevKit V1", role: "Otak pengendali sistem dan pemroses jadwal" },
  { name: "Modul RTC", spec: "DS3231 Real-Time Clock", role: "Pencatat waktu akurat dan presisi" },
  { name: "Relay Module", spec: "1 Channel 5 V", role: "Saklar elektronik pengendali ON/OFF lampu LED" },
  { name: "Lampu Penerangan", spec: "LED DC 12 V", role: "Lampu hemat energi pencahayaan jalan raya" },
  { name: "Monitor Display", spec: "OLED SSD1306 0.96\" (I2C)", role: "Menampilkan jam, status lampu, dan menu jadwal" },
  { name: "Push Button & Saklar", spec: "3 Tombol Navigasi + Override", role: "Pengaturan jadwal manual dan kendali darurat" },
];



const assembleSteps = [
  {
    number: "01",
    title: "Persiapan Perakitan",
    desc: "Pastikan seluruh komponen alat dan bahan telah siap dalam kondisi baik, bersih, dan sesuai spesifikasi teknis.",
  },
  {
    number: "02",
    title: "Perakitan Sistem Catu Daya",
    desc: "Hubungkan terminal aki ke Solar Charge Controller (SCC), lalu sambungkan kabel panel surya ke port input SCC dengan polaritas (+/-) yang benar.",
  },
  {
    number: "03",
    title: "Pemasangan Buck Converter",
    desc: "Pasang modul LM2596 untuk menurunkan tegangan output aki 12V menjadi tegangan stabil 5V sebelum dialirkan ke ESP32.",
  },
  {
    number: "04",
    title: "Perakitan Sistem Kontrol",
    desc: "Hubungkan mikrokontroler ESP32 DevKit V1 dengan modul RTC DS3231 melalui jalur komunikasi I2C (SDA, SCL, VCC 5V, GND).",
  },
  {
    number: "05",
    title: "Pemasangan Push Button",
    desc: "Rangkai 3 unit push button (Menu, Navigasi Atas/Bawah, Simpan) ke pin GPIO ESP32 untuk mengatur jadwal operasional.",
  },
  {
    number: "06",
    title: "Pemasangan Layar Monitor OLED",
    desc: "Sambungkan layar OLED SSD1306 0.96 inci pada jalur bus I2C bersama untuk menampilkan antarmuka visual jam dan status sistem.",
  },
  {
    number: "07",
    title: "Pemasangan Relay Pengendali",
    desc: "Hubungkan pin kontrol relay ke GPIO ESP32. Hubungkan terminal Normally Open (NO) relay seri dengan jalur positif lampu LED 12V.",
  },
  {
    number: "08",
    title: "Pengintegrasian Seluruh Rangkaian",
    desc: "Rapikan susunan PCB ke dalam box panel, amankan perkabelan dengan cable tie, dan pasang saklar override manual.",
  },
];

const installSteps = [
  {
    number: "01",
    title: "Persiapan Lokasi Instalasi",
    desc: "Pilih lokasi tanah padat yang tidak terhalang bayangan pohon/gedung, pastikan panel surya menerima sinar matahari langsung sepanjang hari, dan bebas dari genangan air.",
  },
  {
    number: "02",
    title: "Pembuatan Pondasi Beton",
    desc: "Buat lubang pondasi berukuran 400 × 400 mm dengan kedalaman sesuai daya dukung tanah. Pasang baut angkur presisi sebelum adukan cor beton mengeras.",
  },
  {
    number: "03",
    title: "Pemasangan Tiang Lampu",
    desc: "Dirikan tiang lampu setinggi 4 meter secara tegak lurus, lalu kencangkan baut pengunci angkur pada base plate tiang secara merata dan kokoh.",
  },
  {
    number: "04",
    title: "Pemasangan Panel Surya",
    desc: "Pasang braket panel surya di puncak tiang dengan sudut kemiringan 10–15° menghadap arah datang sinar matahari optimal (arah khatulistiwa).",
  },
  {
    number: "05",
    title: "Pemasangan Lampu LED",
    desc: "Pasang kap lampu LED pada lengan tiang (panjang ±500 mm) mengarah langsung ke badan jalan dengan sudut penerangan yang merata.",
  },
  {
    number: "06",
    title: "Pemasangan Box Panel Pelindung",
    desc: "Pasang box panel weatherproof di tiang untuk melindungi aki, SCC, ESP32, RTC, relay, dan layar OLED dari debu serta percikan air hujan.",
  },
];

const maintenanceSchedule = [
  { item: "Box Panel", check: "Memeriksa kebersihan, kekedapan air, kunci, dan engsel", freq: "Setiap 3 Bulan" },
  { item: "Kabel & Terminal", check: "Memeriksa kekencangan baut terminal dan memastikan kabel tidak terkelupas", freq: "Setiap 3 Bulan" },
  { item: "Relay & Buck Converter", check: "Memastikan relay bekerja normal dan output tegangan konverter stabil di 5V", freq: "Setiap 3 Bulan" },
  { item: "Aki SLA 12V", check: "Memeriksa tegangan aki, kebersihan kutub terminal, dan proses pengisian surya", freq: "Setiap 6 Bulan" },
  { item: "OLED & Push Button", check: "Memastikan tampilan informasi waktu jelas dan tombol pengaturan berfungsi", freq: "Setiap 1 Bulan" },
  { item: "Permukaan Panel Surya", check: "Membersihkan debu, kotoran burung, atau dedaunan yang menutupi panel", freq: "Setiap 1 Bulan" },
];

const troubleshootingList = [
  {
    problem: "OLED tidak menyala",
    cause: "Kabel VCC, GND, SDA, atau SCL terlepas / longgar",
    solution: "Periksa kembali seluruh koneksi perkabelan modul OLED dan pastikan suplai 5V tersedia.",
  },
  {
    problem: "Waktu pada OLED tidak sesuai",
    cause: "RTC belum dikalibrasi atau baterai koin RTC CR2032 lemah",
    solution: "Atur ulang waktu RTC melalui tombol pengaturan atau ganti baterai koin RTC.",
  },
  {
    problem: "Push button tidak merespon",
    cause: "Kabel pin GPIO terlepas atau tombol mengalami keausan",
    solution: "Periksa sambungan kabel tombol ke PCB dan ganti push button bila kontak rusak.",
  },
  {
    problem: "Jadwal ON/OFF tidak tersimpan",
    cause: "Pengguna belum menekan menu 'Simpan' pada layar OLED",
    solution: "Ulangi langkah pengaturan jadwal hingga menekan tombol pada menu konfirmasi Simpan.",
  },
  {
    problem: "Lampu tidak menyala saat jadwal ON",
    cause: "Relay tidak terpicu, aki drop, atau lampu LED putus",
    solution: "Periksa indikator relay, ukur tegangan aki (>11.5V), dan cek sambungan kabel lampu LED.",
  },
  {
    problem: "Lampu tidak padam saat jadwal OFF",
    cause: "Kontak relay macet tertutup (welded) atau mikrokontroler hang",
    solution: "Periksa modul relay dan lakukan restart (matikan lalu hidupkan kembali) sistem daya.",
  },
  {
    problem: "ESP32 tidak menyala",
    cause: "Tegangan output 5V dari buck converter tidak keluar",
    solution: "Periksa tegangan input buck converter dari aki dan kalibrasi trimpot output ke 5.0V.",
  },
  {
    problem: "Aki tidak terisi daya",
    cause: "Panel surya terhalang naungan, kabel putus, atau SCC rusak",
    solution: "Pastikan panel surya bersih terkena sinar matahari dan amati indikator charge pada SCC.",
  },
  {
    problem: "Panel surya menghasilkan daya rendah",
    cause: "Permukaan kaca panel tertutup debu tebal atau bayangan pohon",
    solution: "Bersihkan permukaan kaca panel dengan kain basah lembut dan pangkas ranting pohon yang menutupi.",
  },
  {
    problem: "Sistem mati total",
    cause: "Tegangan aki habis total (deep discharge), sekering putus, atau kabel utama terputus",
    solution: "Cek tegangan aki, periksa sekering pengaman (fuse), dan teliti seluruh kabel jalur utama.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <span className="rounded-full bg-[#2C5E43]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function PanelSuryaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden text-stone-900">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50/50 via-[#FAF9F5] to-emerald-50/30" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-24 sm:px-6 sm:pb-32 lg:px-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-white/70 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.03)] backdrop-blur-md sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="rounded-full bg-[#2C5E43]/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
                Program Kerja KKN-T IDBU 52
              </span>
              <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-stone-900 sm:text-5xl sm:leading-[1.15]">
                Penerangan Jalan Berbasis Panel Surya
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base text-justify">
                Penerangan jalan merupakan fasilitas vital untuk meningkatkan keamanan, ketertiban, dan kenyamanan mobilitas warga pada malam hari. Melalui program KKN-T IDBU 52 Universitas Diponegoro di Kelurahan Mijen, dirancang sistem lampu jalan mandiri tenaga surya yang terintegrasi dengan mikrokontroler pintar <strong>ESP32</strong>, modul waktu <strong>RTC DS3231</strong>, dan penampil status <strong>OLED</strong> untuk pengoperasian otomatis, hemat biaya, dan ramah lingkungan.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#buku-panduan"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2C5E43] to-[#5B8C5A] px-6 py-3 text-xs font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  Buka Buku Panduan (33 Halaman)
                </a>
                <a
                  href="#cara-kerja"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50"
                >
                  Lihat Cara Kerja & Spesifikasi
                </a>
              </div>
            </div>

            {/* Hero Image & Feature Badges */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md flex items-center justify-center py-2">
                <div className="relative aspect-square w-full max-w-[420px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/images/panel-surya-hero.png"
                    alt="Mockup 3D Lampu Jalan Tenaga Surya KKN-T IDBU 52 UNDIP"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
                <div className="rounded-2xl border border-stone-200/70 bg-white/80 p-2.5 text-center shadow-sm">
                  <span className="text-sm font-black text-amber-600">12V DC</span>
                  <p className="text-[10px] font-semibold text-stone-600">Sistem Mandiri</p>
                </div>
                <div className="rounded-2xl border border-stone-200/70 bg-white/80 p-2.5 text-center shadow-sm">
                  <span className="text-sm font-black text-emerald-600">ESP32</span>
                  <p className="text-[10px] font-semibold text-stone-600">Kendali Pintar</p>
                </div>
                <div className="rounded-2xl border border-stone-200/70 bg-white/80 p-2.5 text-center shadow-sm">
                  <span className="text-sm font-black text-blue-600">RTC</span>
                  <p className="text-[10px] font-semibold text-stone-600">Waktu Akurat</p>
                </div>
                <div className="rounded-2xl border border-stone-200/70 bg-white/80 p-2.5 text-center shadow-sm">
                  <span className="text-sm font-black text-stone-800">OLED</span>
                  <p className="text-[10px] font-semibold text-stone-600">Display 0.96&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mengapa Tenaga Surya */}
        <section className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Manfaat & Alasan"
            title="Mengapa Menggunakan Penerangan Tenaga Surya?"
            description="Solusi berkelanjutan untuk menjawab kebutuhan penerangan jalan warga Kelurahan Mijen secara efisien, mandiri, dan ramah lingkungan."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reasons.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#2C5E43]/40 hover:shadow-md"
              >
                <span className="text-3xl font-black text-[#2C5E43]/25 group-hover:text-[#2C5E43]/60 transition-colors">
                  {item.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-stone-600 text-justify">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Spesifikasi Sistem & Komponen */}
        <section id="cara-kerja" className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Spesifikasi Teknis"
            title="Daftar Komponen & Perangkat Sistem"
            description="Spesifikasi lengkap dari komponen catu daya, rangkaian kendali cerdas, hingga aktuator penerangan yang digunakan."
          />

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 shadow-sm backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-stone-600">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80 font-bold text-xs uppercase tracking-wider text-stone-900">
                    <th className="px-5 py-4 w-12 text-center">No</th>
                    <th className="px-5 py-4">Nama Komponen</th>
                    <th className="px-5 py-4">Spesifikasi Model</th>
                    <th className="px-6 py-4">Fungsi / Peran dalam Sistem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {specifications.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                      <td className="px-5 py-3.5 text-center font-bold text-stone-400">{idx + 1}</td>
                      <td className="px-5 py-3.5 font-bold text-stone-900 whitespace-nowrap">{item.name}</td>
                      <td className="px-5 py-3.5 font-semibold text-[#2C5E43] whitespace-nowrap">{item.spec}</td>
                      <td className="px-6 py-3.5 text-xs leading-relaxed text-stone-600">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: 8 Tahap Perakitan Rangkaian */}
        <section className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Langkah Perakitan"
            title="8 Tahapan Perakitan Sistem Kelistrikan & Kontrol"
            description="Panduan langkah demi langkah merangkai modul kontrol ESP32, RTC, relay, dan sistem catu daya surya."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assembleSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col justify-between rounded-[2rem] border border-stone-200/70 bg-white/75 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2C5E43] text-sm font-black text-white shadow-sm">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-stone-900">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600 text-justify">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 6 Langkah Instalasi Lapangan */}
        <section className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Instalasi Fisik"
            title="6 Tahapan Instalasi Tiang & Panel di Lapangan"
            description="Tata cara pemasangan pondasi, pendirian tiang 4 meter, orientasi sudut panel surya, dan perakitan box panel luar ruangan."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {installSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-stone-200/70 bg-white/75 p-6 shadow-sm backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-xs font-black text-white shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900">{step.title}</h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-stone-600 text-justify">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Pengoperasian & Antarmuka OLED */}
        <section className="mt-20 sm:mt-28 rounded-[2.5rem] border border-[#2C5E43]/20 bg-gradient-to-br from-[#2C5E43] to-[#1E3F2D] p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200 backdrop-blur-sm">
                Pengoperasian Otomatis
              </span>
              <h2 className="mt-4 text-2xl font-black sm:text-4xl">
                Tampilan Layar OLED & Logika Kendali Cerdas
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-emerald-100/90 text-justify">
                Sistem bekerja secara otomatis tanpa perlu saklar manual setiap hari. Modul <strong>RTC DS3231</strong> membaca waktu aktual, kemudian <strong>ESP32</strong> membandingkannya dengan parameter jadwal ON/OFF di memori. Saat waktu menunjukkan jadwal ON (misal 18:00), relay langsung terpicu untuk menyalakan lampu, dan akan memadamkannya saat waktu mencapai jadwal OFF (misal 05:30).
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">1</span>
                  <p className="text-xs leading-relaxed text-stone-100"><strong>Tampilan Utama:</strong> Menampilkan waktu jam terkini, target jadwal ON, target jadwal OFF, dan status lampu (ON/OFF).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">2</span>
                  <p className="text-xs leading-relaxed text-stone-100"><strong>3 Tombol Navigasi:</strong> Tombol [MENU] untuk masuk ke mode setelan, tombol [UP/DOWN] untuk mengubah angka jam/menit, dan tombol [SIMPAN] untuk menyimpan ke memori permanen.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">3</span>
                  <p className="text-xs leading-relaxed text-stone-100"><strong>Saklar Override:</strong> Saklar manual darurat apabila sewaktu-waktu lampu perlu dihidupkan di luar jadwal otomatis.</p>
                </div>
              </div>
            </div>

            {/* OLED Monitor Screen Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] rounded-3xl border-4 border-stone-800 bg-black p-5 font-mono shadow-2xl">
                <div className="flex items-center justify-between border-b border-blue-500/30 pb-2 text-[11px] text-blue-400">
                  <span>SSD1306 OLED</span>
                  <span className="animate-pulse text-emerald-400">● LIVE</span>
                </div>
                <div className="mt-4 space-y-2 text-center">
                  <div className="text-3xl font-black tracking-widest text-cyan-300">18:00:24</div>
                  <div className="pt-2 text-xs text-stone-300">
                    <p className="text-emerald-400 font-bold">JADWAL ON : 18:00</p>
                    <p className="text-amber-400 font-bold">JADWAL OFF : 05:30</p>
                  </div>
                  <div className="mt-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 py-1.5 text-xs font-bold text-emerald-300">
                    STATUS LAMPU: ON 💡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Perawatan Berkala (Maintenance) */}
        <section className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Pemeliharaan"
            title="Jadwal Perawatan Berkala"
            description="Rekomendasi inspeksi rutin untuk memastikan keandalan sistem lampu surya dalam jangka panjang."
          />

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/80 shadow-sm backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm text-stone-600">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80 font-bold text-xs uppercase tracking-wider text-stone-900">
                    <th className="px-5 py-4">Bagian / Komponen</th>
                    <th className="px-6 py-4">Aktivitas Pemeriksaan</th>
                    <th className="px-5 py-4 text-right">Frekuensi Berkala</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {maintenanceSchedule.map((row, idx) => (
                    <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                      <td className="px-5 py-3.5 font-bold text-stone-900 whitespace-nowrap">{row.item}</td>
                      <td className="px-6 py-3.5 text-xs leading-relaxed text-stone-600">{row.check}</td>
                      <td className="px-5 py-3.5 text-right font-black text-[#2C5E43] whitespace-nowrap">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section: Troubleshooting (Penanganan Masalah) */}
        <section className="mt-20 sm:mt-28">
          <SectionHeading
            eyebrow="Solusi Praktis"
            title="Panduan Troubleshooting Cepat"
            description="Identifikasi dan langkah penanganan mandiri untuk 10 gejala gangguan umum pada sistem lampu panel surya."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {troubleshootingList.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-stone-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-amber-300"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                    !
                  </span>
                  <h3 className="text-sm font-bold text-stone-900">{item.problem}</h3>
                </div>
                <div className="mt-3 space-y-1.5 text-xs leading-relaxed">
                  <p className="text-stone-500">
                    <strong className="text-stone-700">Penyebab:</strong> {item.cause}
                  </p>
                  <p className="text-emerald-700">
                    <strong className="text-emerald-800">Solusi:</strong> {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-amber-500/10 p-5 border border-amber-500/20 text-xs leading-relaxed text-amber-900">
            ⚠️ <strong>Perhatian Keselamatan:</strong> Selalu matikan sumber daya (putuskan koneksi baterai/SCC) sebelum melakukan perbaikan kabel di dalam box panel. Hindari membuka box panel saat kondisi hujan deras atau kelembapan tinggi.
          </div>
        </section>

        {/* Section: Interactive 33-Page Book Viewer */}
        <div id="buku-panduan">
          <PanelBookViewer />
        </div>

      </div>
    </main>
  );
}
