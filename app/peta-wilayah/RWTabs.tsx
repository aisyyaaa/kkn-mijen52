"use client";

import Image from "next/image";
import { useState } from "react";

type RWKey = "rw05" | "rw06" | "rw07";

interface MapSection {
  image: string;
  alt: string;
  title: string;
  description: string[];
}

interface RWData {
  label: string;
  headline: string;
  intro: string;
  tone: "emerald" | "teal" | "sky";
  maps: MapSection[];
}

const rwData: Record<RWKey, RWData> = {
  rw05: {
    label: "RW 05",
    headline: "RW 05 Kelurahan Mijen",
    intro:
      "Gambaran wilayah cakupan Program Kampung Iklim (ProKlim) di RW 05 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang.",
    tone: "emerald",
    maps: [
      {
        image: "/images/peta-haedar-2.jpeg",
        alt: "Peta fasilitas pendukung ProKlim RW 05 Kelurahan Mijen",
        title:
          "Peta Fasilitas Pendukung Program ProKlim RW 05 Kelurahan Mijen",
        description: [
          "Peta ini menunjukkan sebaran fasilitas yang mendukung pelaksanaan Program Kampung Iklim (ProKlim) di RW 05 Kelurahan Mijen. Fasilitas yang ditampilkan meliputi sendang, komposter, bank sampah, Taman Kanak-Kanak (TK), dan puskesmas.",
          "Dari peta terlihat bahwa sebagian besar fasilitas berada di bagian utara RW 05, sedangkan dua sendang berada di sisi timur kawasan. Informasi ini membantu masyarakat mengetahui lokasi fasilitas lingkungan yang dapat dimanfaatkan dalam kegiatan konservasi air, pengelolaan sampah, serta edukasi lingkungan.",
          "Hasil pemetaan menunjukkan bahwa sebagian besar wilayah RW 05 memiliki potensi kerawanan rendah hingga sedang, namun terdapat beberapa titik dengan potensi lebih tinggi yang perlu mendapat perhatian, terutama saat musim kemarau dan pada area yang masih terdapat kebiasaan membakar sampah.",
          "Peta ini juga menjadi dasar dalam penyusunan program kerja KKN, seperti revitalisasi sendang, pembuatan komposter, edukasi pengelolaan sampah organik, serta penyusunan rute kegiatan dan penyebaran media edukasi agar pelaksanaannya lebih tepat sasaran dan mudah dijangkau oleh masyarakat.",
        ],
      },
      {
        image: "/images/peta-wilayah.jpeg",
        alt: "Peta potensi kebakaran lahan RW 05 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang",
        title: "Peta Mitigasi Kebakaran Lahan RW 05",
        description: [
          "Peta ini disusun sebagai salah satu upaya mitigasi kebakaran lahan di RW 05 Kelurahan Mijen. Pemetaan dilakukan menggunakan citra satelit Sentinel-2A dengan analisis Normalized Burn Ratio (NBR) dan Differenced Normalized Burn Ratio (dNBR) untuk mengidentifikasi tingkat potensi kerawanan kebakaran berdasarkan kondisi vegetasi dan tutupan lahan.",
          "Pada peta, warna biru menunjukkan potensi kerawanan rendah, kuning menunjukkan potensi sedang, sedangkan merah menunjukkan potensi tinggi. Selain itu, peta juga menampilkan lokasi fasilitas penting seperti sendang, bank sampah, komposter, puskesmas, dan taman kanak-kanak.",
          "Hasil pemetaan menunjukkan bahwa sebagian besar wilayah RW 05 memiliki potensi kerawanan rendah hingga sedang, namun terdapat beberapa titik dengan potensi lebih tinggi yang perlu mendapat perhatian, terutama saat musim kemarau dan pada area yang masih terdapat kebiasaan membakar sampah.",
          "Peta ini diharapkan dapat menjadi acuan dalam menentukan lokasi prioritas untuk kegiatan edukasi, pemasangan papan imbauan, serta penyusunan langkah-langkah mitigasi kebakaran sehingga masyarakat dapat lebih waspada dan berperan aktif dalam mencegah terjadinya kebakaran lahan.",
        ],
      },
      {
        image: "/images/peta-dian.jpeg",
        alt: "Peta persebaran sendang Kelurahan Mijen, Kecamatan Mijen, Kota Semarang",
        title: "Peta Persebaran Sendang Kelurahan Mijen",
        description: [
          "Peta ini disusun sebagai salah satu upaya mitigasi kebakaran lahan di RW 05 Kelurahan Mijen. Pemetaan dilakukan menggunakan citra satelit Sentinel-2A dengan analisis Normalized Burn Ratio (NBR) dan Differenced Normalized Burn Ratio (dNBR) untuk mengidentifikasi tingkat potensi kerawanan kebakaran berdasarkan kondisi vegetasi dan tutupan lahan.Sendang merupakan mata air alami yang muncul di permukaan tanah dan dimanfaatkan masyarakat sebagai sumber air untuk kebutuhan sehari-hari. Dalam konteks geologi, sendang terbentuk ketika air hujan meresap ke dalam tanah, tersimpan di lapisan batuan yang mampu meloloskan air (akuifer), kemudian keluar kembali ke permukaan pada tempat-tempat tertentu akibat pengaruh topografi dan perbedaan sifat batuan. Keberadaan sendang sering menjadi penanda alami adanya sistem aliran air tanah di bawah permukaan.",
          "Kelurahan Mijen, Kecamatan Mijen, Kota Semarang, memiliki kondisi geologi yang mendukung terbentuknya sendang. Wilayah ini didominasi oleh Formasi Damar berumur Kuarter (Plistosen) yang tersusun atas batupasir tufan, konglomerat, dan breksi vulkanik hasil pengendapan material vulkanik Gunung Ungaran purba. Batupasir tufan dan konglomerat memiliki pori-pori dan rekahan yang memungkinkan air hujan meresap dan tersimpan, sedangkan breksi vulkanik yang lebih padat berperan sebagai lapisan yang menghambat pergerakan air ke bawah. Ketika air tanah yang mengalir di dalam lapisan permeabel bertemu dengan lapisan yang lebih kedap dan posisi lereng memungkinkan, air tersebut akan muncul ke permukaan sebagai mata air yang dikenal masyarakat sebagai sendang.",
          "Berdasarkan hasil pemetaan lapangan, terdapat tujuh sendang yang tersebar di beberapa RW di Kelurahan Mijen, yaitu Sendang Kemantren (RW 7), Sendang Wetan (RW 6 RT 3), Sendang RW 4 RT 2, Sendang Gondang (RW 4 RT 4), Sendang Gendol (RW 4 RT 8), Sendang Telogo (RW 5 RT 3), dan Sendang Gedhe (RW 5 RT 3). Persebaran titik-titik tersebut tidak terjadi secara acak, tetapi mengikuti kondisi lereng dan jalur aliran air tanah. Tiga sendang di RW 4 berada relatif berdekatan dan menunjukkan adanya zona keluarnya air tanah pada bagian tengah kelurahan. Sendang Telogo dan Sendang Gedhe berada di bagian timur hingga tenggara, sedangkan Sendang Kemantren dan Sendang Wetan terletak lebih terpisah di bagian barat wilayah.",
          "Keberadaan tujuh sendang tersebut tidak hanya penting sebagai sumber air komunal, tetapi juga mencerminkan sistem hidrogeologi alami Kelurahan Mijen. Oleh karena itu, pelestarian vegetasi, perlindungan daerah resapan, dan pengelolaan lingkungan di sekitar sendang menjadi langkah penting untuk menjaga keberlanjutan sumber air dan keseimbangan lingkungan di wilayah Mijen.",
        ],
      },
    ],
  },
  rw06: {
    label: "RW 06",
    headline: "RW 06 Kelurahan Mijen",
    intro:
      "Gambaran wilayah cakupan Program Kampung Iklim (ProKlim), peta multibencana, serta persebaran sarana prasarana lingkungan di RW 06 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang.",
    tone: "teal",
    maps: [
      {
        image: "/images/peta-multibencana.jpeg",
        alt: "Peta Multibencana RW 6 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang",
        title: "Peta Multibencana RW 6 Kelurahan Mijen",
        description: [
          "Peta ini merupakan Peta Multibencana RW 6 Kelurahan Mijen yang menyajikan tingkat kerawanan atau kelas bahaya (Rendah, Sedang, dan Tinggi) di seluruh wilayah RW 6, serta sebaran fasilitas mitigasi dan titik penting lingkungan seperti lubang resapan Biopori, Sendang Wadas, dan Titik Kumpul evakuasi.",
          "Berdasarkan analisis spasial, tingkat bahaya dibagi menjadi tiga kelas: warna hijau menunjukkan zona bahaya Rendah yang mendominasi sebagian besar pemukiman warga di RT 01, RT 02, RT 04, RT 05, dan RT 06; warna kuning menunjukkan zona bahaya Sedang yang melintasi wilayah tengah hingga Kawasan Perhutani; sedangkan warna merah menunjukkan zona bahaya Tinggi di area tepi hutan/perkebunan dan sepanjang perbatasan RT 03 yang membutuhkan pengawasan dan mitigasi ekstra.",
          "Fasilitas penting yang dipetakan meliputi lokasi titik kumpul evakuasi (simbol ungu) di area pemukiman RT 01, RT 04, dan RT 06; sebaran biopori (simbol kuning) sebagai pengendali limpasan air; serta Sendang Wadas (simbol biru) di dekat wilayah RT 03 yang berperan sebagai salah satu sumber air alami penting di wilayah RW 6 Kelurahan Mijen.",
          "Peta ini disusun oleh Tim KKN-T IDBU 52 Universitas Diponegoro sebagai instrumen perencanaan mitigasi kebencanaan komunal dan pengelolaan lingkungan terpadu, membantu Kelurahan Mijen dan warga setempat dalam kesiapsiagaan bencana serta adaptasi perubahan iklim.",
        ],
      },
      {
        image: "/images/peta tematik rw 6.jpg",
        alt: "Peta Tematik Lingkungan dan Sarana Prasarana RW 06 Kelurahan Mijen",
        title: "Peta Tematik Lingkungan dan Sarana Prasarana RW 06 Kelurahan Mijen",
        description: [
          "Peta ini merupakan Peta Tematik Lingkungan dan Sarana Prasarana RW 06 Kelurahan Mijen yang menyajikan batas wilayah administrasi dari 9 Rukun Tetangga (RT 01 hingga RT 09), dilengkapi dengan katalog visual dan koordinat sebaran sarana prasarana publik, fasilitas keagamaan, pendidikan, serta titik konservasi hijau.",
          "Pemetaan fasilitas umum mencakup Balai Pertemuan dan Balai Warga (Balai Kegiatan RW 6, Balai RT 2, Balai Kegiatan RT 3, Balai Kegiatan RT 4, Balai RT 5, dan Balai RT 7), sarana pendidikan Akademi Teknik Pika, tempat peribadatan (Masjid Nurul Falah, Musholla Al Barokah, Musholla An-Nuur, dan Gereja Pantekosta Antiokhia), serta Makam Lemah Mendhak.",
          "Selain sarana umum, peta ini menonjolkan potensi lingkungan hidup berbasis komunitas berupa persebaran Taman TOGA (Tanaman Obat Keluarga) yang aktif dibudidayakan oleh warga di RT 01, RT 02, RT 03, RT 04, RT 06, RT 07, dan RT 09. Keberadaan kebun TOGA ini menjadi pilar penting pendukung Program Kampung Iklim (ProKlim) dalam pemanfaatan lahan pekarangan dan ketahanan hayati lokal.",
          "Peta ini disusun oleh Tim KKN-T IDBU 52 Universitas Diponegoro berdasarkan akuisisi data lapangan Agustus 2026 yang diintegrasikan dengan Peta Rupa Bumi Indonesia (BIG) serta Citra Satelit Google Earth & Landsat dalam sistem proyeksi koordinat UTM WGS 1984 Zone 49S.",
        ],
      },
    ],
  },
  rw07: {
    label: "RW 07",
    headline: "RW 07 Kelurahan Mijen",
    intro:
      "Gambaran wilayah cakupan Program Kampung Iklim (ProKlim) di RW 07 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang.",
    tone: "sky",
    maps: [
      {
        image: "/images/Peta%20Indah%20RW%2007.png",
        alt: "Peta wilayah RW 07 Kelurahan Mijen",
        title: "Peta Wilayah RW 07 Kelurahan Mijen",
        description: [
          "Peta ini menampilkan wilayah RW 07 Kelurahan Mijen beserta sebaran fasilitas umum, titik-titik konservasi, dan potensi sumber daya lingkungan yang terdapat di kawasan ini.",
          "RW 07 merupakan salah satu wilayah strategis dalam Program Kampung Iklim (ProKlim) di Kelurahan Mijen yang mendukung upaya adaptasi dan mitigasi perubahan iklim melalui berbagai program lingkungan berbasis masyarakat.",
          "Informasi spasial pada peta ini membantu identifikasi area prioritas untuk pelaksanaan kegiatan KKN dan program pemberdayaan masyarakat.",
        ],
      },
      {
        image: "/images/Peta%20Indah%20Kebakaran.png",
        alt: "Peta potensi kebakaran lahan RW 07 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang",
        title: "Peta Mitigasi Kebakaran Lahan RW 07",
        description: [
          "Peta ini disusun sebagai salah satu upaya mitigasi kebakaran lahan di RW 07 Kelurahan Mijen. Pemetaan dilakukan untuk mengidentifikasi tingkat potensi kerawanan kebakaran berdasarkan kondisi vegetasi dan tutupan lahan.",
          "Peta menampilkan area-area dengan potensi kerawanan kebakaran serta lokasi fasilitas penting di sekitar RW 07 yang dapat dimanfaatkan dalam upaya pencegahan dan penanggulangan kebakaran.",
          "Hasil pemetaan ini diharapkan dapat menjadi acuan dalam menentukan lokasi prioritas untuk kegiatan edukasi, pemasangan papan imbauan, serta penyusunan langkah-langkah mitigasi kebakaran sehingga masyarakat dapat lebih waspada dan berperan aktif dalam mencegah terjadinya kebakaran lahan.",
        ],
      },
      {
        image: "/images/Peta%20Ariaji.png",
        alt: "Peta rute dari Pos Utama ke Sendang Kemantren RW 07 Kelurahan Mijen",
        title: "Peta Rute Pos Utama ke Sendang Kemantren",
        description: [
          "Peta ini menampilkan rute perjalanan dari Pos Utama menuju Sendang Kemantren yang berada di wilayah RW 07 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang.",
          "Rute ini menjadi panduan bagi masyarakat maupun tim KKN dalam menjangkau lokasi sendang yang merupakan salah satu sumber daya air penting di kawasan tersebut.",
          "Informasi rute ini diharapkan dapat memudahkan akses menuju Sendang Kemantren serta mendukung kegiatan konservasi air dan pelestarian lingkungan di sekitar wilayah RW 07.",
        ],
      },
    ],
  },
};

const toneStyles = {
  emerald: {
    tabActive: "bg-emerald-600 text-white shadow-md",
    tabInactive: "border-gray-200 bg-white text-gray-600 hover:border-emerald-300 hover:text-emerald-600",
    headlineColor: "text-emerald-600",
    cardBorder: "border-gray-200",
    titleColor: "text-gray-900",
  },
  teal: {
    tabActive: "bg-teal-600 text-white shadow-md",
    tabInactive: "border-gray-200 bg-white text-gray-600 hover:border-teal-300 hover:text-teal-600",
    headlineColor: "text-teal-600",
    cardBorder: "border-gray-200",
    titleColor: "text-gray-900",
  },
  sky: {
    tabActive: "bg-sky-600 text-white shadow-md",
    tabInactive: "border-gray-200 bg-white text-gray-600 hover:border-sky-300 hover:text-sky-600",
    headlineColor: "text-sky-600",
    cardBorder: "border-gray-200",
    titleColor: "text-gray-900",
  },
};

function PlaceholderMap({ alt, tone }: { alt: string; tone: "emerald" | "teal" | "sky" }) {
  const bg = {
    emerald: "bg-emerald-50",
    teal: "bg-teal-50",
    sky: "bg-sky-50",
  };
  const iconColor = {
    emerald: "text-emerald-300",
    teal: "text-teal-300",
    sky: "text-sky-300",
  };
  const textColor = {
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    sky: "text-sky-500",
  };

  return (
    <div
      className={`flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-xl ${bg[tone]}`}
      role="img"
      aria-label={alt}
    >
      <svg
        className={`h-16 w-16 ${iconColor[tone]}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.752a1.125 1.125 0 00-1.006 0L3.622 6.19C3.24 6.38 3 6.77 3 7.197v14.25c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.875 2.437c.317.158.69.158 1.006 0z"
        />
      </svg>
      <div className="text-center">
        <p className={`text-sm font-semibold ${textColor[tone]}`}>Peta Segera Hadir</p>
        <p className="mt-1 text-xs text-gray-400">Gambar peta sedang dalam proses penyusunan</p>
      </div>
    </div>
  );
}

export default function RWTabs() {
  const [activeTab, setActiveTab] = useState<RWKey>("rw05");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; alt: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const active = rwData[activeTab];
  const styles = toneStyles[active.tone];

  const handleOpenLightbox = (src: string, title: string, alt: string) => {
    setSelectedImage({ src, title, alt });
    setZoomLevel(1);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  return (
    <>
      {/* Tab buttons */}
      <div className="grid grid-cols-3 gap-3">
        {(Object.keys(rwData) as RWKey[]).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${isActive
                  ? "bg-emerald-600 text-white shadow-md"
                  : "border border-gray-300 bg-white text-gray-700 shadow-sm hover:border-emerald-400 hover:text-emerald-600"
                }`}
            >
              {rwData[key].label}
            </button>
          );
        })}
      </div>

      {/* Heading */}
      <h2 className="mt-8 text-2xl font-bold text-gray-900 sm:text-3xl">
        Peta Wilayah dan Mitigasi{" "}
        <span className={styles.headlineColor}>{active.headline}</span>
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        {active.intro}
      </p>

      {/* Map sections */}
      {active.maps.map((section, i) => (
        <div key={`${activeTab}-map-${i}`}>
          <div className={`mt-7 overflow-hidden rounded-2xl border bg-white p-3 shadow-sm ${styles.cardBorder}`}>
            {section.image ? (
              <div className="relative group">
                <div
                  onClick={() => handleOpenLightbox(section.image, section.title, section.alt)}
                  className="cursor-zoom-in overflow-hidden rounded-xl bg-stone-50 flex items-center justify-center"
                >
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={1600}
                    height={1200}
                    priority={i === 0}
                    unoptimized
                    className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Hover Quick Action Overlay */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                    Klik gambar untuk memperbesar resolusi penuh
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(section.image, section.title, section.alt)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-stone-100 px-3 py-1.5 font-semibold text-stone-700 hover:bg-stone-200 transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                      Perbesar Peta
                    </button>
                    <a
                      href={section.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Buka Tab Baru
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <PlaceholderMap alt={section.alt} tone={active.tone} />
            )}
          </div>

          <div className={`mt-5 rounded-2xl border bg-white p-5 shadow-sm sm:p-7 ${styles.cardBorder}`}>
            <h3 className={`text-base font-bold sm:text-lg ${styles.titleColor}`}>
              {section.title}
            </h3>
            <div className="mt-3 flex flex-col gap-3 text-sm leading-7 text-gray-600">
              {section.description.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm p-4 sm:p-6"
          onClick={handleCloseLightbox}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between gap-4 text-white pb-3 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="truncate">
              <h4 className="font-bold text-sm sm:text-base truncate">{selectedImage.title}</h4>
              <p className="text-xs text-stone-400 truncate">Resolusi Penuh • Klik luar atau tombol tutup untuk kembali</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Zoom Controls */}
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.max(0.5, prev - 0.25))}
                className="rounded-lg bg-white/10 p-2 hover:bg-white/20 text-white transition"
                title="Perkecil"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              <span className="text-xs font-mono px-1">{Math.round(zoomLevel * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.min(3, prev + 0.25))}
                className="rounded-lg bg-white/10 p-2 hover:bg-white/20 text-white transition"
                title="Perbesar"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-semibold hover:bg-white/20 text-white transition hidden sm:block"
                title="Reset Zoom"
              >
                Reset
              </button>

              <a
                href={selectedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition flex items-center gap-1"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Tab Baru
              </a>

              <a
                href={selectedImage.src}
                download
                className="rounded-lg bg-white/20 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/30 transition flex items-center gap-1"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Unduh
              </a>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="rounded-lg bg-red-600/80 p-2 hover:bg-red-600 text-white transition ml-2"
                title="Tutup (ESC)"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Container with Zoom and Scroll */}
          <div
            className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center center",
                transition: "transform 0.15s ease-out",
              }}
              className="max-w-none flex items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
