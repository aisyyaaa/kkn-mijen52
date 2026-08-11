"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TOTAL_PAGES = 7;

export default function BioporiBookSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile)
        setCurrentPage((page) =>
          page % 2 === 0 ? Math.max(1, page - 1) : page
        );
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  // Close fullscreen on Escape key
  useEffect(() => {
    if (!isFullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isFullscreen]);

  const previous = () =>
    setCurrentPage((page) => Math.max(1, page - (isMobile ? 1 : 2)));
  const next = () =>
    setCurrentPage((page) =>
      Math.min(
        isMobile ? TOTAL_PAGES : TOTAL_PAGES - 1,
        page + (isMobile ? 1 : 2)
      )
    );
  const pageSource = (page: number) =>
    `/images/book-biopori/page_${page}.jpg`;
  const atEnd = isMobile
    ? currentPage === TOTAL_PAGES
    : currentPage >= TOTAL_PAGES - 1;

  const pages = (
    <div className="relative mx-auto flex w-full max-w-[680px] justify-center">
      {/* Left page (or single page on mobile) */}
      <div
        className={`${isMobile ? "w-full max-w-[340px]" : "w-1/2"} relative aspect-[1/1.414] overflow-hidden rounded-l-2xl border border-slate-200 bg-slate-100 shadow-xl`}
      >
        <Image
          src={pageSource(currentPage)}
          alt={`Halaman ${currentPage} Buku Saku Biopori`}
          fill
          sizes="(max-width: 640px) 90vw, 340px"
          className="object-contain"
          priority={currentPage <= 2}
        />
      </div>
      {/* Right page (desktop only) */}
      {!isMobile && (
        <div className="relative aspect-[1/1.414] w-1/2 overflow-hidden rounded-r-2xl border-y border-r border-slate-200 bg-slate-100 shadow-xl">
          <Image
            src={pageSource(currentPage + 1)}
            alt={`Halaman ${currentPage + 1} Buku Saku Biopori`}
            fill
            sizes="340px"
            className="object-contain"
            priority={currentPage <= 2}
          />
        </div>
      )}
      {/* Book spine shadow */}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-5 -translate-x-1/2 bg-gradient-to-r from-black/[0.04] via-black/[0.1] to-black/[0.04]" />
      )}
    </div>
  );

  return (
    <section
      id="buku-saku"
      className="mx-auto mt-12 w-full max-w-[820px] rounded-[2.5rem] border border-emerald-200/60 bg-white/80 p-5 shadow-[0_20px_45px_rgba(13,124,102,0.04)] backdrop-blur-md sm:mt-16 sm:p-8"
    >
      {/* Header */}
      <div className="mb-6 text-center">
        <span className="rounded-full bg-[#0D7C66]/10 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#0D7C66] ring-1 ring-[#0D7C66]/20 sm:text-[11px]">
          Media Edukasi &amp; Buku Saku Digital
        </span>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900 sm:text-3xl">
          Buku Saku Biopori
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-slate-500 sm:text-sm">
          Baca tujuh halaman panduan lengkap pembuatan lubang biopori sebagai
          solusi resapan air &amp; pengolahan sampah organik dari KKN-T IDBU 52
          Universitas Diponegoro.
        </p>
      </div>

      {/* Clickable Book Spread */}
      <button
        type="button"
        onClick={() => setIsFullscreen(true)}
        className="mt-7 block w-full cursor-zoom-in"
        aria-label="Perbesar Buku Saku Biopori"
      >
        {pages}
      </button>

      {/* Navigation Controls */}
      <div className="mx-auto mt-5 flex w-full max-w-[680px] items-center justify-between gap-3">
        <button
          type="button"
          onClick={previous}
          disabled={currentPage === 1}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
        >
          Sebelumnya
        </button>
        <span className="text-center text-xs font-black text-slate-600">
          {isMobile
            ? `Halaman ${currentPage} dari ${TOTAL_PAGES}`
            : `Halaman ${currentPage}-${Math.min(currentPage + 1, TOTAL_PAGES)} dari ${TOTAL_PAGES}`}
        </span>
        <button
          type="button"
          onClick={next}
          disabled={atEnd}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
        >
          Berikutnya
        </button>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col justify-center gap-3 border-t border-slate-200/80 pt-5 sm:flex-row">
        <a
          href="/pdf/buku-panduan-biopori.pdf"
          download="Buku_Panduan_Biopori_KKN_IDBU_52.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0D7C66] to-[#1B6B93] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Unduh Buku Saku (PDF)
        </a>
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Tampilan Layar Penuh
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F0FAF7]/95 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Buku Saku Biopori layar penuh"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl font-bold text-slate-700 shadow-lg"
            aria-label="Tutup tampilan layar penuh"
          >
            ×
          </button>
          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {pages}
            <div className="mx-auto mt-5 flex max-w-[680px] items-center justify-between gap-3">
              <button
                type="button"
                onClick={previous}
                disabled={currentPage === 1}
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-lg disabled:opacity-40"
              >
                Sebelumnya
              </button>
              <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-slate-700 shadow-sm">
                {isMobile
                  ? `${currentPage}/${TOTAL_PAGES}`
                  : `${currentPage}-${Math.min(currentPage + 1, TOTAL_PAGES)}/${TOTAL_PAGES}`}
              </span>
              <button
                type="button"
                onClick={next}
                disabled={atEnd}
                className="rounded-xl bg-[#0D7C66] px-5 py-3 text-sm font-bold text-white shadow-lg disabled:opacity-40"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
