"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ArticleBody() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={styles.body}>
        <p>
          Kebakaran lahan terbuka di Indonesia, khususnya di Pulau Jawa, sebagian besar bukan disebabkan oleh
          faktor alam murni, melainkan oleh aktivitas manusia yang tampak sepele yaitu dari membakar sampah.
          Sampah kering (daun, rumput, kertas, plastik) dan sisa material organik yang menumpuk di lahan kosong
          sering dibakar sebagai cara &quot;praktis&quot; untuk membersihkan lingkungan. Namun pada musim kemarau,
          ketika kelembapan udara dan vegetasi rendah, praktik ini menjadi salah satu pemicu utama kebakaran lahan
          yang sulit dikendalikan. Fenomena ini bukan sekadar potensi risiko di atas kertas, melainkan telah
          terbukti nyata dalam berbagai kejadian di lapangan, salah satunya yang terjadi di Pesisir Pantai Baruna
          Mas, Semarang Utara.
        </p>

        <p className={expanded ? undefined : "hidden md:block"}>
          Pada Minggu, 20 Agustus 2023 pukul 18.00 WIB, kebakaran lahan melanda kawasan Pesisir Pantai Baruna Mas,
          Kelurahan Bandarharjo, Kecamatan Semarang Utara. Kejadian ini bermula dari pembakaran sampah yang tidak
          terkontrol, yang kemudian menjalar ke lahan ilalang di sekitarnya hingga menghanguskan sekitar 0,5
          hektare lahan dan merusak ekosistem setempat secara signifikan (BPBD Provinsi Jawa Tengah, 2023).
          Penyebaran api yang begitu cepat ini tidak lepas dari kondisi cuaca kering yang sedang berlangsung saat
          itu, serta kelembapan rendah membuat api dari pembakaran sampah dengan mudah menjalar dan merambat ke
          vegetasi kering di sekelilingnya yang menghanguskan apa pun yang dilaluinya dalam waktu singkat.
        </p>

        <p className={`${styles.lessonPara} ${expanded ? "" : "hidden md:block"}`}>
          Dari rangkaian kejadian tersebut, dapat ditarik tiga pelajaran penting yang saling berkaitan. Pertama,
          sumber api sekecil apa pun, seperti tumpukan sampah yang dibakar, dapat memicu kebakaran lahan yang luas
          apabila bertemu dengan vegetasi kering dan cuaca panas, sebagaimana yang terjadi ketika api dari
          pembakaran sampah merembet ke lahan ilalang di Baruna Mas. Kedua, tidak adanya pengawasan saat proses
          pembakaran menjadi faktor kunci di balik meluasnya api, seperti sampah yang dibakar lalu ditinggalkan
          tanpa kendali dapat berubah menjadi kebakaran yang tidak terkendali hanya dalam hitungan menit. Ketiga,
          edukasi dan sosialisasi yang baru dilakukan setelah kejadian, seperti yang dilakukan pihak berwenang
          kepada warga Bandarharjo pasca-kebakaran yang pada dasarnya hanyalah langkah reaktif. Mitigasi yang
          benar-benar efektif seharusnya dilakukan secara preventif, jauh sebelum musim kemarau tiba, agar
          kejadian serupa tidak terus berulang di lokasi-lokasi lain yang memiliki karakteristik risiko yang sama.
        </p>
      </div>

      <button type="button" onClick={() => setExpanded((v) => !v)} className={styles.readMore}>
        {expanded ? "Tutup" : "Lihat Selengkapnya"}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </>
  );
}
