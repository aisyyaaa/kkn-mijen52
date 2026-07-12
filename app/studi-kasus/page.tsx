import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { lora, playfair, specialElite } from "./fonts";
import ArticleBody from "./ArticleBody";

export const metadata: Metadata = {
  title: "Studi Kasus - KKN-T IDBU 52 UNDIP",
  description:
    "Studi kasus kebakaran lahan yang disebabkan oleh pengelolaan sampah tidak terkontrol di Pesisir Pantai Baruna Mas, Bandarharjo, Semarang Utara.",
};

export default function StudiKasusPage() {
  return (
    <main className={`${styles.board} ${playfair.variable} ${lora.variable} ${specialElite.variable}`}>
      <div className={styles.container}>
        <section className={`${styles.note} ${styles.introNote}`}>
          <span className={`${styles.tape} ${styles.tapeTopLeft}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.tapeTopRight}`} aria-hidden="true" />

          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              Beranda
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className={styles.breadcrumbCurrent}>Studi Kasus</span>
          </div>

          <div className={styles.introBadge}>
            <span>Papan Mading Kampung</span>
          </div>

          <h1 className={styles.introTitle}>Studi Kasus Kejadian Nyata</h1>
          <p className={styles.introDesc}>
            Bukti nyata bahwa pengelolaan sampah yang tidak terkontrol bukan sekadar risiko di atas kertas.
            Kliping berita di bawah ini mendokumentasikan salah satu kejadian yang pernah terjadi akibat kebiasaan
            membakar sampah sembarangan.
          </p>
        </section>

        <article className={`${styles.note} ${styles.clipping}`} style={{ fontFamily: "var(--font-lora), serif" }}>
          <span className={`${styles.tape} ${styles.tapeTopLeft}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.tapeTopRight}`} aria-hidden="true" />
          <span className={`${styles.tape} ${styles.tapeBottomLeft}`} aria-hidden="true" />

          <span className={styles.stamp} style={{ fontFamily: "var(--font-special-elite), monospace" }}>
            Arsip Kejadian
          </span>

          <div className={styles.placeholderImage}>
            <Image
              src="/images/image-studi-kasus.jpeg"
              alt="Kebakaran lahan akibat pembakaran sampah terbuka"
              width={1536}
              height={864}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <p className={styles.caption}>Ilustrasi kejadian kebakaran lahan akibat pembakaran sampah terbuka.</p>

          <h2 className={styles.headline} style={{ fontFamily: "var(--font-playfair), serif" }}>
            Studi Kasus: Kebakaran yang Disebabkan Pengelolaan Sampah Tidak Terkontrol
          </h2>

          <p className={styles.byline} style={{ fontFamily: "var(--font-special-elite), monospace" }}>
            SABTU, 11 JULI 2026
          </p>

          <div className={styles.divider} aria-hidden="true" />

          <ArticleBody />

          <p className={styles.source}>Sumber: BPBD Provinsi Jawa Tengah (2023)</p>
        </article>

        <Link href="/" className={styles.backLink}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
