import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FAF8] text-slate-950" id="beranda">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />

      <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-5 sm:px-6 md:pt-8 lg:px-8 lg:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(16,185,129,0.12)]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-emerald-700">KKN-IDBU 52 UNDIP</span>
            </div>

            <h1 className="mt-5 max-w-2xl text-[2.55rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Inovasi untuk</span>
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                Proklim Mijen
              </span>
              <span className="block">Bersama Mahasiswa</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Program kerja nyata tim KKN-IDBU 52 Universitas Diponegoro dalam mendukung adaptasi dan mitigasi
              perubahan iklim yang berkelanjutan di Kelurahan Mijen.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-sky-500 px-6 py-3 text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(14,165,233,0.26)]"
              >
                Lihat Program Kerja
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  />
                </svg>
              </a>
              <a
                href="#kegiatan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-6 py-3 text-sm font-extrabold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
              >
                Dokumentasi KKN
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  />
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
            <div className="relative mx-auto flex max-w-[420px] items-center justify-center py-6">
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
                  src="/images/dummy.jpeg"
                  alt="Kegiatan KKN IDBU 52 Mijen"
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
    </main>
  );
}
