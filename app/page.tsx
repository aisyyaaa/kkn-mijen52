import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen px-5 py-8 flex flex-col overflow-x-hidden">
      <section id="beranda" className="mt-4 flex flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-gray-200 rounded-full shadow-sm backdrop-blur-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold text-gray-600 tracking-wider">KKN-IDBU 52 UNDIP</span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex flex-col gap-1">
          <span>Inovasi untuk</span>
          <span className="text-green-500 flex items-center gap-2">Proklim Mijen</span>
          <span className="text-3xl mt-1 text-gray-800">Bersama Mahasiswa</span>
        </h1>

        <div className="w-full mt-0 mb-0 relative flex justify-center">
          <Image
            src="/images/dummy.jpeg"
            alt="Kegiatan KKN IDBU 52 Mijen"
            width={640}
            height={640}
            className="w-full max-w-sm drop-shadow-2xl object-contain rounded-2xl"
            priority
          />
        </div>

        <p className="text-gray-600 text-base leading-relaxed pr-2">
          Program kerja nyata tim KKN-IDBU 52 Universitas Diponegoro dalam mendukung adaptasi dan
          mitigasi perubahan iklim yang berkelanjutan di Kelurahan Mijen.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2">
          <a
            href="#program"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Lihat Program Kerja
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              />
            </svg>
          </a>
          <a
            href="#kegiatan"
            className="w-full inline-flex items-center justify-center gap-2 text-gray-700 font-medium px-6 py-3.5 hover:text-gray-900 transition-colors"
          >
            <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              />
            </svg>
            Dokumentasi KKN
          </a>
        </div>

        <div className="w-full flex flex-col gap-8 mt-2 border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-gray-500 tracking-widest uppercase">Kolaborasi Antara</h3>
            <div className="flex flex-wrap items-center gap-5 opacity-80">
              <span className="text-sm font-extrabold text-blue-900">P2KKN UNDIP</span>
              <span className="text-sm font-bold text-gray-800">Kelurahan Mijen</span>
              <span className="text-sm font-bold text-gray-800">Warga Proklim</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm border border-gray-100">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold text-green-600 leading-none">Aksi Nyata</p>
              <p className="text-sm text-gray-500 mt-1">Pengabdian Masyarakat</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
