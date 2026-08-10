import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="beranda">

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16 md:pt-20 lg:px-8 lg:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="order-2 lg:order-1">

            <h1 className="mt-5 max-w-2xl text-[2.55rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-5xl md:text-6xl">
              <span className="block">Inovasi untuk</span>
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Proklim Mijen
              </span>
              <span className="block">Bersama Mahasiswa</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-[1.1rem] lg:leading-[1.85]">
              Program kerja nyata tim KKN-T IDBU 52 Universitas Diponegoro dalam mendukung adaptasi dan mitigasi
              perubahan iklim yang berkelanjutan di Kelurahan Mijen.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/peta-wilayah"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(14,165,233,0.26)]"
              >
                Lihat Peta Wilayah
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.752a1.125 1.125 0 00-1.006 0L3.622 6.19C3.24 6.38 3 6.77 3 7.197v14.25c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.875 2.437c.317.158.69.158 1.006 0z" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Kolaborasi Antara</p>
              <div className="grid grid-cols-3 gap-3 sm:max-w-xl">
                <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black leading-tight text-blue-900">P2KKN UNDIP</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Kolaborator</p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black leading-tight text-emerald-700">Kel. Mijen</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Lokasi</p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <p className="text-sm font-black leading-tight text-sky-700">Warga</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Proklim</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto flex w-full max-w-[420px] lg:max-w-[540px] items-center justify-center py-6">
              {/* soft glow shadow beneath the floating photo */}
              <div className="animate-float-glow absolute bottom-4 left-1/2 h-16 w-2/3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.30),rgba(14,165,233,0.16)_60%,transparent_75%)] blur-2xl" />

              {/* sparkle accents */}
              <span className="animate-float-sparkle absolute right-[4%] top-[4%] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(16,185,129,0.18)]" />
              <span
                className="animate-float-sparkle absolute left-[2%] top-[24%] h-2 w-2 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(14,165,233,0.18)]"
                style={{ animationDelay: "1.2s" }}
              />
              <span
                className="animate-float-sparkle absolute bottom-[20%] right-[8%] h-2 w-2 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.35),0_8px_22px_rgba(16,185,129,0.18)]"
                style={{ animationDelay: "2.1s" }}
              />

              <div className="animate-float-card relative w-full">
                <Image
                  src="/images/heading.jpeg"
                  alt="Kegiatan KK-TN IDBU 52 Mijen"
                  width={1600}
                  height={900}
                  priority
                  className="relative z-10 h-auto w-full rounded-[2rem] object-contain drop-shadow-[0_30px_34px_rgba(15,23,42,0.20)]"
                />

                <div className="absolute -bottom-3 -right-2 z-20 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/90 bg-white/90 text-center shadow-[0_20px_54px_rgba(15,23,42,0.16)] backdrop-blur sm:h-32 sm:w-32">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-white shadow-sm">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      />
                    </svg>
                  </span>
                  <span className="mt-1.5 text-sm font-black leading-tight text-slate-950">Aksi Nyata</span>
                  <span className="mt-1 px-2 text-[10px] font-bold leading-tight text-slate-500">Pengabdian Masyarakat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Navigasi Cepat (Grid Tombol) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-slate-400">Jelajahi Program &amp; Informasi</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          <Link href="/peta-wilayah" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.752a1.125 1.125 0 00-1.006 0L3.622 6.19C3.24 6.38 3 6.77 3 7.197v14.25c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.875 2.437c.317.158.69.158 1.006 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Peta Wilayah</span>
          </Link>
          <Link href="/kebakaran-sampah" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Kebakaran Sampah</span>
          </Link>
          <Link href="/memilah-sampah" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Memilah Sampah</span>
          </Link>
          <Link href="/eco-enzim" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3.75c-2.8 3.27-5.25 6.13-5.25 9.25a5.25 5.25 0 1010.5 0C17.25 9.88 14.8 7.02 12 3.75z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Eco-Enzyme</span>
          </Link>
          <Link href="/aksi-biopori" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Aksi Nyata Biopori</span>
          </Link>
          <Link href="/teba" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Edukasi Teba Modern</span>
          </Link>
          <Link href="/briket" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8.5h10A2.5 2.5 0 0119.5 11v5A2.5 2.5 0 0117 18.5H7A2.5 2.5 0 014.5 16v-5A2.5 2.5 0 017 8.5z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-700">Edukasi Briket</span>
          </Link>
          <Link href="/panel-surya" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-amber-700">Panel Surya</span>
          </Link>
          <Link href="/studi-kasus" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7H4a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1zM5 11v7a2 2 0 002 2h10a2 2 0 002-2v-7M10 15h4" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-sky-700">Studi Kasus</span>
          </Link>
          <Link href="/dasar-hukum" className="group flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50 hover:shadow-md text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.031.352 5.988 5.988 0 002.031-.352c.483-.174.711-.703.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97zM12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-sky-700">Dasar Hukum</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
