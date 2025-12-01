"use client";

import { Suspense } from "react";
import BuatJanji from "@/components/buat-janji/BuatJanjiClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BuatJanji />
    </Suspense>
  );
}
