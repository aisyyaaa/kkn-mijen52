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
      "Gambaran wilayah cakupan Program Kampung Iklim (ProKlim) dan peta multibencana di RW 06 Kelurahan Mijen, Kecamatan Mijen, Kota Semarang.",
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
          "Peta ini disusun oleh Tim KKN-T IDBU 52 Universitas Diponegoro sebagai instrumen perencanaan mitigasi kebencanaan komunal dan pengelolaan lingkungan terpadu, membantu Kelurahan Mijen dan warga setempat dalam kesiapsiagaan bencana serta adaptasi perubahan iklim."
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
  const active = rwData[activeTab];
  const styles = toneStyles[active.tone];

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
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                isActive
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
              <Image
                src={section.image}
                alt={section.alt}
                width={1600}
                height={1130}
                priority={i === 0}
                unoptimized
                className="h-auto w-full rounded-xl object-contain"
              />
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
    </>
  );
}
