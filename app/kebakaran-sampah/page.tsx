import type { Metadata } from "next";
import Image from "next/image";
import LegalBasisSection from "@/components/LegalBasisSection";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ProKlim Mijen — Kampung Bebas Asap Sampah",
};

export default function KebakaranSampahPage() {
  return (
    <div className={styles.wrapper}>
      <main>
        <section className={`${styles.page} ${styles.hero}`} id="beranda">
          <div className={styles.heroLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span> PROKLIM · KELURAHAN MIJEN
            </div>
            <h1>
              Mijen Menuju
              <br />
              <span className={styles.green}>Kampung Bebas</span>
              <br />
              Asap Sampah
            </h1>
            <p className={styles.heroDesc}>
              Membakar sampah di pekarangan terasa seperti solusi cepat. Padahal setiap kali asapnya naik, ia
              membawa zat yang merusak paru-paru, mencemari tanah, dan memperparah krisis iklim — persis yang
              coba dijawab ProKlim.
            </p>
            <div className={styles.heroActions}>
              <a className={`${styles.btn} ${styles.btnPrimary} ${styles.btnHero}`} href="#bahaya">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3.2 20.8 19a1.4 1.4 0 0 1-1.2 2H4.4a1.4 1.4 0 0 1-1.2-2L12 3.2Z"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path d="M12 8v5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  <path d="M12 17.2h.01" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
                </svg>
                Pelajari Bahayanya
              </a>
              <a className={`${styles.btn} ${styles.btnOutline}`} href="#solusi">
                Lihat Solusi
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  <path
                    d="m13 6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.trustRow}>
              <div className={styles.miniLeaves} aria-hidden="true">
                <span className={styles.miniLeaf}></span>
                <span className={styles.miniLeaf}></span>
                <span className={styles.miniLeaf}></span>
              </div>
              <p>Didukung oleh: Kelurahan Mijen · Tim KKN UNDIP · RW Setempat · Warga Mijen</p>
            </div>
          </div>

          <div className={styles.heroVisual} aria-label="Ilustrasi ProKlim Mijen">
            <div className={styles.visualCard}>
              <span className={`${styles.sparkle} ${styles.sparkleOne}`}></span>
              <span className={`${styles.sparkle} ${styles.sparkleTwo}`}></span>
              <span className={`${styles.sparkle} ${styles.sparkleThree}`}></span>
              <div className={styles.visualGlow}></div>
              <Image
                src="/images/kebakaran-sampah-island.png"
                alt="Ilustrasi dua pulau melayang: sisi kiri kering dengan sampah terbakar, sisi kanan hijau dengan tempat sampah terpilah, kompos, dan panel surya"
                width={1448}
                height={1086}
                priority
                className={styles.islandSvg}
              />
            </div>

            <aside className={styles.statBubble} aria-label="Statistik sampah dibakar terbuka">
              <div>
                <div className={styles.icon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path
                      d="M7 14.5c0 3 2.3 5.5 5.2 5.5 3.1 0 5.8-2.1 5.8-5.4 0-2.6-1.4-4.2-3.3-6.4-.8 2-2 3.1-3.8 3.8.4-2.8-.6-5.2-2.9-7-1.3 3.4-1 5.3.2 7.3-.8-.3-1.5-.8-2.2-1.6-.5 1.1-1 2.3-1 3.8Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <strong>40-65%</strong>
                <span>Sampah Dibakar Terbuka</span>
              </div>
            </aside>
          </div>
        </section>

        <section className={`${styles.page} ${styles.about}`} id="tentang">
          <div className={styles.aboutCard}>
            <div className={styles.aboutText}>
              <div className={styles.eyebrow}>
                <span className={styles.dot}></span> Tentang ProKlim
              </div>
              <p>
                <strong>ProKlim Kelurahan Mijen adalah inisiatif warga bersama Tim KKN UNDIP</strong> untuk
                membangun kesadaran lingkungan dan mendorong pengelolaan sampah yang lebih sehat. Kami memadukan
                edukasi langsung ke warga dengan program nyata seperti pemilahan sampah dan pengomposan skala RW,
                agar transisi menuju kampung bebas asap bakar sampah terasa nyata dan berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.page} ${styles.sectionBlock}`} id="bahaya">
          <div className={`${styles.sectionHead} ${styles.sectionHeadCenter}`}>
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span> Bahaya · Zat Berbahaya
            </div>
            <h2 className={styles.sectionTitle}>Satu Kali Bakar, Lima Zat Berbahaya Sekaligus</h2>
          </div>
          <div className={styles.cardsGrid}>
            <article className={styles.infoCard}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 15c3-5 9-5 12-2 2 2 4 2 5 1"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 10c4-4 8-4 12-1 2 1 4 1 6 0"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path d="M7 19c2-2 5-2 8 0" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              <h3>PM2.5</h3>
              <p>Partikel sangat halus yang masuk jauh ke saluran napas dan aliran darah</p>
            </article>
            <article className={`${styles.infoCard} ${styles.infoCardOrange}`}>
              <div className={`${styles.cardIcon} ${styles.cardIconOrange}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2} />
                </svg>
              </div>
              <h3>Dioksin &amp; Furan</h3>
              <p>Terkait iritasi kulit, gangguan sistem imun, hingga risiko kanker</p>
            </article>
            <article className={`${styles.infoCard} ${styles.infoCardOrange}`}>
              <div className={`${styles.cardIcon} ${styles.cardIconOrange}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17c-2-1.2-3-2.8-3-4.8 0-2.6 2.2-4.8 5-4.8.9-2.4 3.1-3.9 5.6-3.4 2.5.5 4.2 2.7 4.2 5.1 1.9.6 3.2 2.3 3.2 4.3 0 2.7-2.2 4.6-5 4.6H7Z"
                    stroke="currentColor"
                    strokeWidth={2}
                  />
                  <path d="M8 20h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              <h3>Black Carbon</h3>
              <p>Jelaga hitam berumur pendek di atmosfer, namun daya pemanasannya besar</p>
            </article>
            <article className={styles.infoCard}>
              <div className={styles.cardIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                  <path d="M8 15h8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                </svg>
              </div>
              <h3>Logam Berat</h3>
              <p>Arsenik, merkuri, timbal, karbon monoksida, hingga asam klorida</p>
            </article>
          </div>
        </section>

        <section className={`${styles.page} ${styles.sectionBlock}`} id="dampak">
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span> Dampak Kesehatan
            </div>
            <h2 className={styles.sectionTitle}>Yang Terasa Hari Ini, dan yang Terbentuk Diam-Diam</h2>
          </div>
          <div className={styles.impactGrid}>
            <article className={styles.impactPanel}>
              <h3>Jangka Pendek</h3>
              <ul className={styles.impactList}>
                <li>
                  <span className={styles.checkDot}>✓</span> Sakit kepala &amp; mual
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Iritasi mata &amp; kulit
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Batuk &amp; sesak napas
                </li>
              </ul>
            </article>
            <article className={styles.impactPanel}>
              <h3>Jangka Panjang</h3>
              <ul className={styles.impactList}>
                <li>
                  <span className={styles.checkDot}>✓</span> Bronkitis kronis
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Asma &amp; penurunan fungsi paru
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Risiko kanker paru
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className={`${styles.page} ${styles.sectionBlock}`} id="iklim">
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span> Dampak Iklim
            </div>
            <h2 className={styles.sectionTitle}>Asap yang Menetap Lebih Lama dari yang Kita Kira</h2>
          </div>
          <div className={styles.climateGrid}>
            <article className={styles.climateStat}>
              <strong>~5.000x</strong>
              <p>Potensi pemanasan black carbon per satuan massa dibanding CO2</p>
            </article>
            <article className={styles.climateStat}>
              <strong>Tanah &amp; Air</strong>
              <p>Abu sisa pembakaran mencemari tanah, air tanah, dan rantai makanan</p>
            </article>
          </div>
        </section>

        <section className={`${styles.page} ${styles.sectionBlock}`} id="solusi">
          <div className={styles.solutionCard}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.dot}></span> Solusi
              </div>
              <h2 className={styles.sectionTitle}>Solusi Ada, dan Sudah Bisa Dimulai dari Rumah</h2>
            </div>
            <div>
              <ul className={styles.solutionList}>
                <li>
                  <span className={styles.checkDot}>✓</span> Pilah dari sumber (organik vs anorganik)
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Kompos skala rumah/RW
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Manfaatkan bank sampah
                </li>
                <li>
                  <span className={styles.checkDot}>✓</span> Saling ingatkan tetangga
                </li>
              </ul>
            </div>
            <div className={styles.solutionVisual} aria-hidden="true">
              <svg viewBox="0 0 420 290" fill="none">
                <path d="M92 196 206 130l118 66-116 67L92 196Z" fill="#5CB96A" />
                <path d="M92 196v34l116 66v-33L92 196Z" fill="#3B8E4C" />
                <path d="M324 196v34l-116 66v-33l116-67Z" fill="#2E7A41" />
                <path d="M138 186l37-21 38 22-37 21-38-22Z" fill="#E9F6EB" />
                <path d="M225 185l38-22 42 24-39 23-41-25Z" fill="#D7E0D9" />
                <path d="M156 169v-54h41v72" stroke="#2D8C48" strokeWidth="9" strokeLinecap="round" />
                <path d="M244 168v-49h43v71" stroke="#5D6360" strokeWidth="9" strokeLinecap="round" />
                <path
                  d="M114 147c28-40 80-62 130-46 29 9 48 30 59 60"
                  stroke="#3AA655"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity=".45"
                />
                <path
                  d="M80 98c20-26 56-34 87-19"
                  stroke="#3AA655"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity=".34"
                />
                <path
                  d="M303 92c22-10 47-7 66 10"
                  stroke="#3AA655"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity=".34"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className={`${styles.page} ${styles.sectionBlock}`} id="hukum">
          <LegalBasisSection
            intro="Membakar sampah bukan sekadar kebiasaan yang keliru — praktik ini secara tegas diatur dan dilarang dalam undang-undang tingkat pusat."
            references={[
              {
                ref: "UU No. 18/2008 — Pasal 29, 40 & 41",
                note: "Larangan membakar sampah yang tidak sesuai persyaratan teknis pengelolaan sampah, dengan ancaman pidana bagi pengelolaan sampah yang melanggar hukum dan menimbulkan gangguan kesehatan, keamanan, pencemaran, atau kerusakan lingkungan.",
              },
              {
                ref: "UU No. 32/2009 jo. UU No. 6/2023 (PPLH) — Pasal 69, 98 & 99",
                note: "Larangan pembukaan lahan dengan cara membakar, dengan ancaman pidana bagi perbuatan yang mengakibatkan dilampauinya baku mutu udara, air, atau tanah, baik disengaja maupun karena kelalaian.",
              },
            ]}
            sanctions={[
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
            ]}
            obligations={[
              "Tidak melakukan pembuangan dan/atau pembakaran sampah secara terbuka yang tidak sesuai dengan persyaratan teknis pengelolaan sampah.",
              "Melaporkan kepada RT/RW, Kelurahan, atau instansi terkait (Dinas Lingkungan Hidup) apabila mengetahui adanya praktik pembakaran atau pembuangan sampah yang berpotensi mencemari lingkungan atau membahayakan warga sekitar.",
              "Turut menanggulangi dan memulihkan fungsi lingkungan apabila terjadi pencemaran akibat aktivitas pengelolaan sampah yang salah (Pasal 53 jo. Pasal 54 UU PPLH).",
            ]}
            moreHref="/dasar-hukum"
          />
        </section>
      </main>

      <footer className={`${styles.page} ${styles.footer}`} id="sumber">
        <div className={styles.footerCard}>
          <div>
            <strong>Sumber</strong>
            <p>WHO (2025) Open waste burning: sectoral solutions for air pollution and health; Pathak dkk (2024) Annals of Global Health</p>
          </div>
          <div className={styles.footerMeta}>Tim KKN UNDIP · Kelurahan Mijen · ProKlim 2026</div>
        </div>
      </footer>
    </div>
  );
}
