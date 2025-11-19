import { Suspense } from "react";
import DetailPembayaran from "@/components/buat-janji/bayar/DetailPembayaranClient";

export default function Page() {
  return (
    <Suspense>
      <DetailPembayaran />
    </Suspense>
  );
}
