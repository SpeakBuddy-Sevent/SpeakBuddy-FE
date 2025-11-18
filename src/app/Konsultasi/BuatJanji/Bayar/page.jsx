"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DetaiPembayaran() {
  const router = useRouter();
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="rounded-2xl bg-[#096CF6] text-white p-4 sm:p-6 shadow-sm relative overflow-hidden bg-[url('/BgProfile1.svg')] bg-cover bg-right bg-no-repeat">
            <img
              src="/LogoSpeakBuddy.svg"
              className="h-3 sm:h-[0.895rem] w-auto mb-2"
              alt="SpeakBuddy"
            />
            <p className="text-lg sm:text-xl font-bold">Konsultasi</p>
          </div>
        </aside>

        <section className="flex-1 space-y-4 sm:space-y-5">
          <div
            onClick={() => router.back()}
            className="flex items-center gap-2 text-base sm:text-lg font-bold text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z" />
            </svg>
            <span>Kembali</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Detail Pembayaran
          </h3>

          {/* Card Atas Orang */}
          <div className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm p-4 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-black truncate mt-2">
                    Claudia Intan Permata, A.Md.TW
                  </p>
                </div>
                <p className="text-sm text-gray-600 truncate mt-2">
                  Terapis Wicara
                </p>
              </div>
            </div>
          </div>

          {/* Card Atas Total */}
          <div className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm p-4 sm:p-6">
            <div className="px-2 py-2 space-y-1 text-lg">
              <div className="flex items-center justify-between">
                <div className="text-black font-bold mb-3">Biaya Per Sesi</div>
                <span className="text-base text-gray-500 whitespace-nowrap">
                  59.000
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-black font-bold mb-3">Biaya Layanan</div>
                <span className="text-base text-gray-500 whitespace-nowrap">
                  2.500
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-black font-bold mb-3">Total Biaya</div>
                <span className="text-base text-gray-500 whitespace-nowrap">
                  61.500
                </span>
              </div>
            </div>
          </div>

          {/* Card Bawah - Metode Pembayaran */}

          <div className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between px-2 py-2">
              <p className="text-lg sm:text-xl font-bold text-black">Metode Pembayaran</p>
            </div>

            <div className="px-2 py-2 space-y-5">
              <div>
                <div className="text-black font-bold text-base mb-3">
                  Pilih Metode
                </div>
                <div className="relative">
                  <input
                  
                    type="date"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                  <span className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full bg-[#096CF6] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold hover:bg-blue-700 transition-colors">
              Bayar
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
