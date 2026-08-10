"use client";

import { usePathname } from "next/navigation";

const SOLID_BACKGROUNDS: Record<string, string> = {
  "/aksi-biopori": "#ffffff",
  "/teba": "#FAF9F5",
  "/eco-enzim": "#FFFCF4",
};

export default function PageBackground() {
  const pathname = usePathname();
  const solidColor = SOLID_BACKGROUNDS[pathname];

  if (solidColor) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ backgroundColor: solidColor }}
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.18),transparent_34%),radial-gradient(circle_at_88%_10%,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#F8FCFA_0%,#EFF8F4_48%,#F6FAF8_100%)]" />
  );
}
