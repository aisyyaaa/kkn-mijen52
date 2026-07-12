import Link from "next/link";

type LegalRef = {
  ref: string;
  note: string;
};

type Sanction = {
  basis: string;
  violation: string;
  penalty: string;
};

interface LegalBasisSectionProps {
  id?: string;
  intro: string;
  references: LegalRef[];
  sanctions?: Sanction[];
  rights?: string[];
  obligations?: string[];
  moreHref: string;
  moreLabel?: string;
}

export default function LegalBasisSection({
  id,
  intro,
  references,
  sanctions,
  rights,
  obligations,
  moreHref,
  moreLabel = "Baca Dasar Hukum Selengkapnya",
}: LegalBasisSectionProps) {
  return (
    <div id={id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
        <svg className="h-4 w-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.031.352 5.988 5.988 0 002.031-.352c.483-.174.711-.703.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97zM12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75"
          />
        </svg>
        <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-800">Dasar Hukum Terkait</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{intro}</p>

      <div className="mt-5 flex flex-col gap-3">
        {references.map((item) => (
          <div key={item.ref} className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.ref}</p>
            <p className="mt-1.5 text-sm leading-6 text-slate-700">{item.note}</p>
          </div>
        ))}
      </div>

      {sanctions && (
        <div className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Sanksi Hukum</p>

          <div className="mt-3 hidden overflow-hidden rounded-2xl border border-slate-200 md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-amber-300">
                  <th className="w-1/4 px-4 py-3 text-xs font-bold uppercase tracking-wide">Dasar Hukum</th>
                  <th className="w-2/5 px-4 py-3 text-xs font-bold uppercase tracking-wide">Perbuatan yang Dilarang</th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wide">Ancaman Sanksi</th>
                </tr>
              </thead>
              <tbody>
                {sanctions.map((row, index) => (
                  <tr key={row.basis} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3.5 align-top text-xs font-bold text-slate-700">{row.basis}</td>
                    <td className="px-4 py-3.5 align-top leading-6 text-slate-600">{row.violation}</td>
                    <td className="px-4 py-3.5 align-top font-semibold leading-6 text-amber-800">{row.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 flex flex-col gap-3 md:hidden">
            {sanctions.map((row) => (
              <div key={row.basis} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Dasar Hukum</p>
                <p className="mt-1 text-xs font-bold text-slate-800">{row.basis}</p>
                <p className="mt-2.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">Perbuatan yang Dilarang</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{row.violation}</p>
                <p className="mt-2.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">Ancaman Sanksi</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-amber-800">{row.penalty}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {rights && (
        <div className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-700">Hak Masyarakat</p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {rights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {obligations && (
        <div className="mt-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">Kewajiban Masyarakat</p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {obligations.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href={moreHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:text-amber-800"
      >
        {moreLabel}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
