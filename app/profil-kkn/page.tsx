import type { Metadata } from "next";
import ProfilKknClient from "./ProfilKknClient";

export const metadata: Metadata = {
  title: "Tim KKN-T IDBU 52 UNDIP - Profil Kelompok",
  description:
    "Profil Tim KKN Tematik IDBU-52 Universitas Diponegoro di Kelurahan Mijen. Terbagi dalam Kelompok 1 (RW 6), Kelompok 2 (RW 7), dan Kelompok 3 (RW 5) dengan fokus Revitalisasi Sendang, Mitigasi Bencana, dan Pengolahan Sampah Organik.",
};

export default function ProfilKknPage() {
  return <ProfilKknClient />;
}
