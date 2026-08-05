import type { Metadata } from "next";
import RWTabs from "./RWTabs";

export const metadata: Metadata = {
  title: "Peta Wilayah - KKN-T IDBU 52 UNDIP",
  description:
    "Peta wilayah RW 05, RW 06, dan RW 07 Kelurahan Mijen sebagai bagian dari Program Kampung Iklim (ProKlim).",
};

export default function PetaWilayahPage() {
  return (
    <main>
      <section className="mx-auto w-full max-w-5xl px-4 pt-16 pb-16 sm:px-6 sm:pb-20 md:pb-24 lg:px-8">
        <h1 className="sr-only">Peta Wilayah Kelurahan Mijen</h1>
        <RWTabs />
      </section>
    </main>
  );
}
