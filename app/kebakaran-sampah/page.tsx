import type { Metadata } from "next";
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
              <svg
                className={styles.islandSvg}
                viewBox="0 0 760 620"
                role="img"
                aria-labelledby="island-title island-desc"
              >
                <title id="island-title">Ilustrasi isometrik ProKlim Mijen berbasis elemen SVG</title>
                <desc id="island-desc">
                  Dua pecahan pulau melayang yang dihubungkan jembatan kecil: sisi kiri kering, retak, ada sampah
                  terbakar dan pohon layu; sisi kanan hijau dengan tempat sampah terpilah, kompos, panel surya, dan
                  pepohonan.
                </desc>
                <defs>
                  <linearGradient id="isl-leftTop" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#D1A16E" />
                    <stop offset="1" stopColor="#A17149" />
                  </linearGradient>
                  <linearGradient id="isl-rightTop" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#97D56B" />
                    <stop offset="1" stopColor="#48AA55" />
                  </linearGradient>
                  <linearGradient id="isl-leftSide" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#A87952" />
                    <stop offset="1" stopColor="#5F4434" />
                  </linearGradient>
                  <linearGradient id="isl-rightSide" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#6CA958" />
                    <stop offset="1" stopColor="#4A3B32" />
                  </linearGradient>
                  <linearGradient id="isl-rockDark" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#7B604C" />
                    <stop offset="1" stopColor="#3D312C" />
                  </linearGradient>
                  <linearGradient id="isl-fire" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#FFE66D" />
                    <stop offset=".5" stopColor="#FF9A2E" />
                    <stop offset="1" stopColor="#E94B20" />
                  </linearGradient>
                  <linearGradient id="isl-smoke" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#515151" />
                    <stop offset="1" stopColor="#1F1F1F" />
                  </linearGradient>
                  <filter id="isl-soft" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>
                  <filter id="isl-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="28" stdDeviation="18" floodColor="#14181A" floodOpacity=".18" />
                  </filter>
                </defs>

                <ellipse cx="384" cy="552" rx="230" ry="42" fill="#14181A" opacity=".12" filter="url(#isl-soft)" />

                <g filter="url(#isl-shadow)">
                  <g>
                    <path d="M78 270 255 164 373 232 296 392 103 342Z" fill="url(#isl-leftTop)" />
                    <path d="M78 270 103 342 296 392 296 488 106 428 78 346Z" fill="url(#isl-leftSide)" />
                    <path d="M296 392 373 232 382 330 315 494 296 488Z" fill="#4D382E" />
                    <path d="M103 342 296 392 315 494 122 438Z" fill="#7B5A41" opacity=".55" />
                    <path
                      d="M78 270 255 164 373 232 296 392 103 342Z"
                      fill="none"
                      stroke="#F9EEDC"
                      strokeWidth="3"
                      opacity=".58"
                    />
                    <path
                      d="M350 252 334 270 354 292 333 315 351 340 321 366 296 392"
                      fill="none"
                      stroke="#5E4635"
                      strokeWidth="5"
                      strokeLinecap="round"
                      opacity=".65"
                    />
                  </g>

                  <g>
                    <path d="M410 242 552 168 694 250 627 386 430 404Z" fill="url(#isl-rightTop)" />
                    <path d="M430 404 627 386 694 250 694 338 636 468 430 500Z" fill="url(#isl-rightSide)" />
                    <path d="M410 242 430 404 430 500 386 464 384 330Z" fill="#5B463A" />
                    <path
                      d="M410 242 552 168 694 250 627 386 430 404Z"
                      fill="none"
                      stroke="#F5FFE8"
                      strokeWidth="3"
                      opacity=".55"
                    />
                    <path
                      d="M415 250 438 274 414 298 437 322 412 350 430 404"
                      fill="none"
                      stroke="#3F783C"
                      strokeWidth="5"
                      strokeLinecap="round"
                      opacity=".5"
                    />
                  </g>

                  <path
                    d="M367 248 C390 294 389 366 349 472"
                    stroke="#DDEBE2"
                    strokeWidth="16"
                    opacity=".45"
                    strokeLinecap="round"
                  />
                  <path
                    d="M388 253 C368 313 378 383 414 489"
                    stroke="#DDEBE2"
                    strokeWidth="12"
                    opacity=".34"
                    strokeLinecap="round"
                  />

                  <g opacity=".95">
                    <path
                      d="M454 396c36-50 67-98 101-166"
                      fill="none"
                      stroke="#E8E3CB"
                      strokeWidth="16"
                      strokeLinecap="round"
                    />
                    <path
                      d="M454 396c36-50 67-98 101-166"
                      fill="none"
                      stroke="#F9F3DC"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <circle cx="456" cy="393" r="9" fill="#F8F0D6" />
                    <circle cx="478" cy="365" r="8" fill="#F8F0D6" />
                    <circle cx="499" cy="334" r="8" fill="#F8F0D6" />
                    <circle cx="520" cy="299" r="8" fill="#F8F0D6" />
                    <circle cx="541" cy="259" r="8" fill="#F8F0D6" />
                  </g>

                  <g transform="translate(318 317)">
                    <path d="M0 45 122 44 137 58 17 60Z" fill="#8D623E" opacity=".28" />
                    <path d="M5 16 118 16 133 37 17 38Z" fill="#B97C3F" />
                    <path d="M5 16 118 16 133 37 17 38Z" fill="none" stroke="#7C4D2E" strokeWidth="2" />
                    <path
                      d="M18 17 30 38M44 17 56 38M70 17 82 38M96 17 108 38M122 20 132 36"
                      stroke="#D39A5E"
                      strokeWidth="3"
                      opacity=".65"
                    />
                    <path
                      d="M7 13v34M29 13v34M111 13v34M132 31v34"
                      stroke="#735136"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path d="M8 16c38 8 80 7 123 1" stroke="#E7B36A" strokeWidth="3" opacity=".7" />
                  </g>

                  <g stroke="#5E4030" strokeWidth="3" strokeLinecap="round" opacity=".72" fill="none">
                    <path d="M134 287l28 10 14-21" />
                    <path d="M186 311l-24 21 11 24" />
                    <path d="M230 238l-16 33 22 22" />
                    <path d="M272 300l23 8 11-18" />
                    <path d="M122 330l28-9" />
                    <path d="M252 363l-12-26 23-18" />
                    <path d="M185 250l-21-17" />
                    <path d="M308 250l-20 17 4 25" />
                    <path d="M144 238c9-6 18-8 29-5" />
                    <path d="M213 369c-13 4-24 2-34-6" />
                  </g>

                  <g transform="translate(185 242)">
                    <ellipse cx="64" cy="74" rx="71" ry="34" fill="#2A2824" opacity=".28" />
                    <path d="M4 75 62 42 128 76 64 113Z" fill="#292721" />
                    <path
                      d="M16 71c16-13 33-19 50-14 18 6 34 1 48 15-29 17-61 19-98-1Z"
                      fill="#151515"
                    />
                    <g>
                      <rect x="18" y="67" width="20" height="15" rx="2" fill="#DDC7A4" transform="rotate(-18 28 74)" />
                      <rect x="84" y="63" width="19" height="15" rx="2" fill="#C9B594" transform="rotate(21 93 70)" />
                      <path d="M42 86l16-9 18 9-17 10Z" fill="#6F6F69" />
                      <path d="M68 61l15-8 17 9-15 9Z" fill="#8B8983" />
                      <circle cx="31" cy="88" r="7" fill="#4C4C48" />
                      <circle cx="105" cy="85" r="9" fill="#3B3B37" />
                    </g>
                    <path
                      d="M47 65c-9-22 10-34 8-57 22 16 24 37 10 58 10-8 19-2 21 12 2 14-8 24-24 24-18 0-29-14-15-37Z"
                      fill="url(#isl-fire)"
                    />
                    <path
                      d="M58 72c-5-13 5-22 4-35 12 9 14 21 7 34 8-5 13 3 12 12-1 9-8 15-19 15-11 0-16-10-4-26Z"
                      fill="#FFE66D"
                      opacity=".9"
                    />
                    <path d="M65 28c-2-19 12-34 7-57 28 17 35 49 19 80" fill="#111" opacity=".17" />
                  </g>

                  <g transform="translate(247 178)" opacity=".96">
                    <circle cx="0" cy="66" r="26" fill="#2D2D2D" />
                    <circle cx="16" cy="36" r="31" fill="#383838" />
                    <circle cx="-14" cy="20" r="24" fill="#464646" />
                    <circle cx="19" cy="-2" r="36" fill="#333" />
                    <circle cx="-26" cy="-18" r="30" fill="#4D4D4D" />
                    <circle cx="18" cy="-47" r="42" fill="#505050" />
                    <circle cx="-24" cy="-65" r="35" fill="#5D5D5D" />
                    <circle cx="35" cy="-90" r="49" fill="#3F3F3F" />
                    <circle cx="-12" cy="-110" r="38" fill="#585858" />
                    <circle cx="54" cy="-132" r="46" fill="#626262" opacity=".88" />
                    <path
                      d="M-3 71c11-62 13-119 28-196"
                      stroke="#1B1B1B"
                      strokeWidth="12"
                      strokeLinecap="round"
                      opacity=".16"
                    />
                  </g>

                  <g transform="translate(135 215)" stroke="#5A3928" strokeLinecap="round" fill="none">
                    <path d="M55 97c5-50 0-86-6-123" strokeWidth="12" />
                    <path d="M50 21 26-10" strokeWidth="5" />
                    <path d="M50 12 77-24" strokeWidth="5" />
                    <path d="M49 44 18 35" strokeWidth="4" />
                    <path d="M54 58 88 45" strokeWidth="4" />
                    <path d="M45 3 38-31" strokeWidth="4" />
                    <path d="M63 40 76 18" strokeWidth="4" />
                    <path d="M50 95c-9 4-20 6-34 6" strokeWidth="4" />
                  </g>

                  <g>
                    <g transform="translate(535 235)">
                      <path d="M33 110V43" stroke="#7C5739" strokeWidth="12" strokeLinecap="round" />
                      <circle cx="12" cy="40" r="31" fill="#5BBE63" />
                      <circle cx="42" cy="26" r="37" fill="#6BCB70" />
                      <circle cx="73" cy="49" r="30" fill="#48AA55" />
                      <circle cx="38" cy="63" r="34" fill="#69C86F" />
                      <path d="M31 88 8 103 58 106Z" fill="#3E9F4D" opacity=".42" />
                    </g>
                    <g transform="translate(621 221)">
                      <path d="M26 128V50" stroke="#775237" strokeWidth="12" strokeLinecap="round" />
                      <circle cx="1" cy="48" r="32" fill="#4EB15B" />
                      <circle cx="35" cy="31" r="42" fill="#62C96F" />
                      <circle cx="71" cy="57" r="34" fill="#4CAF56" />
                      <circle cx="30" cy="71" r="38" fill="#5DBF67" />
                    </g>
                    <g transform="translate(488 190)">
                      <path d="M32 120V45" stroke="#6D4A34" strokeWidth="11" strokeLinecap="round" />
                      <path d="M34 0 69 74H0Z" fill="#69C543" />
                      <path d="M34 27 63 87H5Z" fill="#55B83E" />
                      <path d="M34 55 57 107H9Z" fill="#459E39" />
                    </g>
                  </g>

                  <g transform="translate(496 328)">
                    <path d="M-10 69 138 69 154 80 4 82Z" fill="#D7DACB" opacity=".65" />
                    <g>
                      <path d="M0 15h42l-4 58H5Z" fill="#2F9B4A" />
                      <path d="M-3 9h48v12H-3Z" fill="#45B45F" />
                      <path d="M6 3h30v7H6Z" fill="#1D7D38" />
                      <path
                        d="M15 47c9-12 20-12 27-5-7-1-11 2-14 8 4 1 8 0 12-3-4 9-13 12-21 8l-5 6-4-4 5-6c-4-5-4-10 0-16 0 5 2 9 5 12Z"
                        fill="#EAF7EE"
                        opacity=".9"
                      />
                    </g>
                    <g transform="translate(58 3)">
                      <path d="M0 15h42l-4 58H5Z" fill="#444E52" />
                      <path d="M-3 9h48v12H-3Z" fill="#5D686C" />
                      <path d="M6 3h30v7H6Z" fill="#293238" />
                      <path
                        d="M22 38c8 0 14 6 14 14h8l-12 13-12-13h8c0-4-3-7-7-7-3 0-6 2-7 5l-6-4c3-5 8-8 14-8Z"
                        fill="#F5F6F0"
                        opacity=".85"
                      />
                    </g>
                    <g transform="translate(113 16)">
                      <path d="M0 15h34l-4 48H4Z" fill="#A87949" />
                      <path d="M-2 9h38v11H-2Z" fill="#C29258" />
                      <path
                        d="M12 42c10-14 18-12 22-7-7 1-11 5-13 13 5 0 8-1 12-4-4 9-12 12-20 8-4 3-7 4-11 4 3-3 5-6 7-9-4-5-4-10-1-15 1 5 3 8 6 10Z"
                        fill="#F3E5B8"
                        opacity=".9"
                      />
                    </g>
                  </g>

                  <g transform="translate(472 413)">
                    <path d="M0 56 72 18l72 40-73 43Z" fill="#916235" />
                    <path d="M12 53 71 23l60 33-60 35Z" fill="#4B2F20" />
                    <path d="M0 56 72 96 144 58v20l-72 42L0 79Z" fill="#A46F3C" />
                    <path
                      d="M12 47c28 14 55 15 94 2"
                      stroke="#D6A15A"
                      strokeWidth="5"
                      strokeLinecap="round"
                      opacity=".72"
                    />
                    <circle cx="70" cy="48" r="5" fill="#75BC56" />
                    <circle cx="86" cy="55" r="4" fill="#C9823E" />
                    <circle cx="55" cy="57" r="4" fill="#E1B354" />
                  </g>

                  <g transform="translate(612 329)">
                    <path d="M36 70v49" stroke="#67523E" strokeWidth="8" strokeLinecap="round" />
                    <path d="M-4 119 36 98l43 23-42 24Z" fill="#6E503F" opacity=".75" />
                    <path d="M0 27 79 0l75 41-82 33Z" fill="#1C2C38" />
                    <path d="M4 27 80 3l69 38-77 29Z" fill="#233746" />
                    <path
                      d="M24 21 93 58M50 11 120 47M77 3 145 39M16 39 97 10M41 53 123 22M68 67 150 34"
                      stroke="#D8EDF6"
                      strokeWidth="2"
                      opacity=".72"
                    />
                    <path
                      d="M0 27 79 0l75 41-82 33Z"
                      fill="none"
                      stroke="#F7FAF5"
                      strokeWidth="4"
                      opacity=".8"
                    />
                  </g>

                  <g fill="#2F8C44" opacity=".9">
                    <path d="M455 430c10-14 18-14 25 0-10-5-18-5-25 0Z" />
                    <path d="M656 418c12-16 24-16 36 0-13-6-25-6-36 0Z" />
                    <path d="M582 391c9-12 17-12 25 0-10-4-18-4-25 0Z" />
                    <path d="M642 282c8-11 15-11 22 0-8-4-15-4-22 0Z" />
                    <circle cx="646" cy="438" r="4" fill="#FFF6D8" />
                    <circle cx="655" cy="434" r="3" fill="#FFF6D8" />
                    <circle cx="463" cy="282" r="4" fill="#FFF6D8" />
                    <circle cx="473" cy="278" r="3" fill="#FFF6D8" />
                  </g>

                  <g fill="#705844" opacity=".75">
                    <path d="M92 478 111 468 131 480 111 492Z" />
                    <path d="M657 500 674 491 692 502 674 513Z" />
                    <path d="M55 431 70 424 86 432 70 441Z" />
                    <path d="M700 433 714 426 730 434 714 443Z" />
                  </g>
                </g>
              </svg>
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
            <div className={styles.aboutSide}>
              <div className={styles.avatarStack} aria-hidden="true">
                <div className={styles.avatar}>RW</div>
                <div className={styles.avatar}>KK</div>
                <div className={styles.avatar}>W</div>
                <div className={styles.avatar}>+</div>
              </div>
              <div className={styles.bigStat}>
                <strong>6+ RW Terlibat</strong>
                <span>Dimulai dari Kelurahan Mijen</span>
              </div>
              <a className={`${styles.btn} ${styles.btnPrimary} ${styles.btnHero}`} href="#sumber">
                Hubungi Kami
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
