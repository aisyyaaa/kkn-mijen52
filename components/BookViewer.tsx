"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface BookViewerProps {
  title?: string;
  description?: string;
  category?: string;
  pdfSrc?: string;
  downloadFileName?: string;
  pagePathPrefix?: string;
  totalPages?: number;
}

export default function BookViewer({
  title = "Buku Pedoman Pengadaan",
  description = "Panduan praktis pengadaan barang dan material untuk KKN-T IDBU 52 Universitas Diponegoro di Kelurahan Mijen.",
  category = "Media Edukasi & Administrasi",
  pdfSrc = "/pdf/buku-panduan-pengadaan.pdf",
  downloadFileName = "Buku_Pedoman_Pengadaan_KKN.pdf",
  pagePathPrefix = "/images/book/page_",
  totalPages = 10,
}: BookViewerProps = {}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640; // 640px is Tailwind's 'sm' breakpoint
      setIsMobile(mobile);
      if (!mobile) {
        setCurrentPage((p) => (p % 2 === 0 ? Math.max(p - 1, 1) : p));
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextPage = () => {
    if (isMobile) {
      if (currentPage < totalPages) {
        setCurrentPage((prev) => prev + 1);
      }
    } else {
      if (currentPage < totalPages - 1) {
        setCurrentPage((prev) => prev + 2);
      }
    }
  };

  const prevPage = () => {
    if (isMobile) {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 2);
      }
    }
  };

  // Generate page images path
  const getPageSrc = (pageNum: number) => `${pagePathPrefix}${pageNum}.png`;

  return (
    <div className="mt-16 mx-auto w-full max-w-[760px] rounded-[2rem] border border-stone-200/60 bg-white/60 p-5 sm:p-8 shadow-[0_20px_45px_rgba(15,23,42,0.02)] backdrop-blur-md">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">
          {category}
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-stone-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-2 text-xs leading-relaxed text-stone-500 max-w-lg">
          {description}
        </p>
      </div>

      {/* Main Content: Centered Responsive Book */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Book Container */}
        <div 
          className="relative w-full cursor-zoom-in group select-none"
          onClick={() => setIsFullscreen(true)}
          title="Klik untuk memperbesar halaman"
        >
          {isMobile ? (
            /* Mobile Single Page View */
            <div className="relative w-full max-w-[340px] mx-auto aspect-[1/1.414] rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-150 shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.10)]">
              <Image
                src={getPageSrc(currentPage)}
                alt={`Halaman ${currentPage}`}
                fill
                sizes="(max-w-340px) 100vw, 340px"
                className="object-contain"
                priority
              />
            </div>
          ) : (
            /* Desktop Double Page Spread View (Book crease effect) */
            <div className="relative flex flex-row w-full max-w-[680px] mx-auto">
              {/* Left Page */}
              <div className="relative w-1/2 aspect-[1/1.414] rounded-l-2xl overflow-hidden border-y border-l border-stone-200/80 bg-stone-150 shadow-[0_12px_24px_rgba(0,0,0,0.04)]">
                <Image
                  src={getPageSrc(currentPage)}
                  alt={`Halaman ${currentPage}`}
                  fill
                  sizes="(max-w-340px) 100vw, 340px"
                  className="object-contain"
                  priority={currentPage <= 2}
                />
              </div>

              {/* Right Page */}
              <div className="relative w-1/2 aspect-[1/1.414] rounded-r-2xl overflow-hidden border-y border-r border-stone-200/80 bg-stone-150 shadow-[0_12px_24px_rgba(0,0,0,0.04)]">
                <Image
                  src={getPageSrc(currentPage + 1)}
                  alt={`Halaman ${currentPage + 1}`}
                  fill
                  sizes="(max-w-340px) 100vw, 340px"
                  className="object-contain"
                  priority={currentPage <= 2}
                />
              </div>

              {/* 3D Realistic Fold Shadows */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-stone-200/80 z-20" />
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/[0.04] via-black/[0.08] to-transparent z-10" />
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-l from-black/[0.04] via-black/[0.08] to-transparent z-10" />
            </div>
          )}

          {/* Navigation Overlay Arrows (Hidden on Mobile, Visible on Hover) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
            disabled={currentPage === 1}
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-md backdrop-blur-sm transition-all hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Halaman sebelumnya"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPage();
            }}
            disabled={isMobile ? currentPage === totalPages : currentPage >= totalPages - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-stone-700 shadow-md backdrop-blur-sm transition-all hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Halaman berikutnya"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Corner Zoom Accent */}
          <div className="absolute right-3 bottom-3 rounded-lg bg-black/40 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm transition-opacity group-hover:bg-[#2C5E43] cursor-pointer">
            🔍 Perbesar
          </div>
        </div>

        {/* Controls & Page indicator */}
        <div className="mt-5 flex items-center justify-between w-full max-w-[680px]">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex h-9 px-4 items-center justify-center gap-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50 hover:text-stone-900 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Sebelumnya
          </button>

          <span className="text-xs font-black text-stone-700 tracking-wide">
            {isMobile 
              ? `Halaman ${currentPage} dari ${totalPages}` 
              : `Halaman ${currentPage}–${Math.min(currentPage + 1, totalPages)} dari ${totalPages}`}
          </span>

          <button
            onClick={nextPage}
            disabled={isMobile ? currentPage === totalPages : currentPage >= totalPages - 1}
            className="flex h-9 px-4 items-center justify-center gap-1.5 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50 hover:text-stone-900 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            Berikutnya
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Action Buttons: Centered below the book */}
        <div className="mt-6 pt-5 border-t border-stone-200/80 w-full flex justify-center">
          <div className="flex flex-col gap-2.5 sm:flex-row w-full sm:w-auto justify-center">
            <a
              href={pdfSrc}
              download={downloadFileName}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2C5E43] to-[#5B8C5A] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Unduh Buku Saku (PDF)
            </a>
            <button
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50 hover:text-stone-900 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
              </svg>
              Tampilan Layar Penuh
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Blurred Beige Background */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF9F5]/96 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Top Panel Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <span className="text-sm font-black text-stone-800 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
              {isMobile 
                ? `Halaman ${currentPage} dari ${totalPages}` 
                : `Halaman ${currentPage}–${Math.min(currentPage + 1, totalPages)} dari ${totalPages}`}
            </span>
            <button
              onClick={() => setIsFullscreen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 hover:bg-[#2C5E43] hover:text-white border border-stone-200 shadow-md transition-all cursor-pointer"
              aria-label="Tutup tampilan"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Fullscreen Image View */}
          <div 
            className="relative flex items-center justify-center w-full max-w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            {isMobile ? (
              /* Mobile Single Page View in Fullscreen */
              <div className="relative h-full max-h-[85vh] aspect-[1/1.414] rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 shadow-2xl shrink-0 max-w-[85vw]">
                <Image
                  src={getPageSrc(currentPage)}
                  alt={`Halaman ${currentPage}`}
                  fill
                  sizes="(max-w-800px) 100vw, 800px"
                  className="object-contain"
                  priority
                />

                {/* Prev arrow (inside page) */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-700 border border-stone-200 hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next arrow (inside page) */}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-700 border border-stone-200 hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg cursor-pointer"
                  aria-label="Berikutnya"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : (
              /* Desktop Double Page Spread View in Fullscreen */
              <div className="relative flex flex-row w-full max-w-[90vw] md:max-w-[75vw] h-full max-h-[85vh] aspect-[2/1.414]">
                {/* Left Page */}
                <div className="relative w-1/2 h-full rounded-l-2xl overflow-hidden border-y border-l border-stone-200/80 bg-stone-100 shadow-2xl">
                  <Image
                    src={getPageSrc(currentPage)}
                    alt={`Halaman ${currentPage}`}
                    fill
                    sizes="(max-w-800px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Right Page */}
                <div className="relative w-1/2 h-full rounded-r-2xl overflow-hidden border-y border-r border-stone-200/80 bg-stone-100 shadow-2xl">
                  <Image
                    src={getPageSrc(currentPage + 1)}
                    alt={`Halaman ${currentPage + 1}`}
                    fill
                    sizes="(max-w-800px) 100vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Fullscreen Fold Shadows */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-stone-200/80 z-20" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/[0.04] via-black/[0.1] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-l from-black/[0.04] via-black/[0.1] to-transparent z-10" />

                {/* Prev arrow (inside page) */}
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-700 border border-stone-200 hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next arrow (inside page) */}
                <button
                  onClick={nextPage}
                  disabled={currentPage >= totalPages - 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-stone-700 border border-stone-200 hover:bg-[#2C5E43] hover:text-white disabled:opacity-0 disabled:pointer-events-none transition-all shadow-lg cursor-pointer"
                  aria-label="Berikutnya"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Bottom Keyboard Guide */}
          <div className="absolute bottom-4 text-center text-xs text-stone-600 font-medium hidden sm:block">
            Klik di luar halaman atau tekan tombol &apos;X&apos; di pojok kanan atas untuk kembali.
          </div>
        </div>
      )}
    </div>
  );
}
