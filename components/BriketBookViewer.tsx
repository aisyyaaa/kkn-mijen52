"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TOTAL_PAGES = 8;

export default function BriketBookViewer() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) setCurrentPage((page) => page % 2 === 0 ? Math.max(1, page - 1) : page);
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isFullscreen]);

  const previous = () => setCurrentPage((page) => Math.max(1, page - (isMobile ? 1 : 2)));
  const next = () => setCurrentPage((page) => Math.min(isMobile ? TOTAL_PAGES : TOTAL_PAGES - 1, page + (isMobile ? 1 : 2)));
  const pageSource = (page: number) => `/images/book-briket/page_${page}.jpg`;
  const atEnd = isMobile ? currentPage === TOTAL_PAGES : currentPage >= TOTAL_PAGES - 1;

  const pages = (
    <div className="relative mx-auto flex w-full max-w-[680px] justify-center">
      <div className={`${isMobile ? "w-full max-w-[340px]" : "w-1/2"} relative aspect-[1/1.414] overflow-hidden rounded-l-2xl border border-stone-200 bg-stone-100 shadow-xl`}>
        <Image src={pageSource(currentPage)} alt={`Halaman ${currentPage} Buku Saku Briket`} fill sizes="(max-width: 640px) 90vw, 340px" className="object-contain" priority={currentPage <= 2} />
      </div>
      {!isMobile && (
        <div className="relative aspect-[1/1.414] w-1/2 overflow-hidden rounded-r-2xl border-y border-r border-stone-200 bg-stone-100 shadow-xl">
          <Image src={pageSource(currentPage + 1)} alt={`Halaman ${currentPage + 1} Buku Saku Briket`} fill sizes="340px" className="object-contain" priority={currentPage <= 2} />
        </div>
      )}
      {!isMobile && <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-5 -translate-x-1/2 bg-gradient-to-r from-black/[0.04] via-black/[0.1] to-black/[0.04]" />}
    </div>
  );

  return (
    <section className="mx-auto mt-20 w-full max-w-[820px] rounded-[2rem] border border-stone-200/60 bg-white/65 p-5 shadow-sm backdrop-blur sm:p-8">
      <div className="text-center">
        <span className="rounded-full bg-[#2C5E43]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#2C5E43] ring-1 ring-[#2C5E43]/20">Media Edukasi</span>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-stone-900 sm:text-3xl">Buku Saku Briket</h2>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-stone-500">Baca delapan halaman panduan pemanfaatan daun kering menjadi briket dari KKN-T IDBU 52 Universitas Diponegoro.</p>
      </div>

      <button type="button" onClick={() => setIsFullscreen(true)} className="mt-7 block w-full cursor-zoom-in" aria-label="Perbesar Buku Saku Briket">
        {pages}
      </button>

      <div className="mx-auto mt-5 flex w-full max-w-[680px] items-center justify-between gap-3">
        <button type="button" onClick={previous} disabled={currentPage === 1} className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40">Sebelumnya</button>
        <span className="text-center text-xs font-black text-stone-600">{isMobile ? `Halaman ${currentPage} dari ${TOTAL_PAGES}` : `Halaman ${currentPage}-${Math.min(currentPage + 1, TOTAL_PAGES)} dari ${TOTAL_PAGES}`}</span>
        <button type="button" onClick={next} disabled={atEnd} className="rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40">Berikutnya</button>
      </div>

      <div className="mt-6 flex flex-col justify-center gap-3 border-t border-stone-200 pt-5 sm:flex-row">
        <a href="/pdf/buku-saku-briket.pdf" download="Buku_Saku_Briket_KKN_IDBU_52.pdf" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#24552F] to-[#4F7D32] px-5 py-2.5 text-xs font-extrabold text-white shadow-md transition hover:-translate-y-0.5">Unduh Buku Saku (PDF)</a>
        <button type="button" onClick={() => setIsFullscreen(true)} className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-xs font-bold text-stone-700 shadow-sm transition hover:bg-stone-50">Tampilan Layar Penuh</button>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5FAF8]/95 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-label="Buku Saku Briket layar penuh" onClick={() => setIsFullscreen(false)}>
          <button type="button" onClick={() => setIsFullscreen(false)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-xl font-bold text-stone-700 shadow-lg" aria-label="Tutup tampilan layar penuh">×</button>
          <div className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            {pages}
            <div className="mx-auto mt-5 flex max-w-[680px] items-center justify-between gap-3">
              <button type="button" onClick={previous} disabled={currentPage === 1} className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-stone-700 shadow-lg disabled:opacity-40">Sebelumnya</button>
              <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-black text-stone-700 shadow-sm">{isMobile ? `${currentPage}/${TOTAL_PAGES}` : `${currentPage}-${Math.min(currentPage + 1, TOTAL_PAGES)}/${TOTAL_PAGES}`}</span>
              <button type="button" onClick={next} disabled={atEnd} className="rounded-xl bg-[#2C5E43] px-5 py-3 text-sm font-bold text-white shadow-lg disabled:opacity-40">Berikutnya</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
