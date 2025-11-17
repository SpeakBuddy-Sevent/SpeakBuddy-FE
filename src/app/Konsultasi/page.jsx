import React from "react";
import Link from "next/link";
import { HeroKonsul } from "@/app/components/HeroKonsul";

export default function HomeKonsul() {
  const terapis = [
    {
      name: "Rizky Aditya Pratama, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    {
      name: "Nadia Ayu Lestari, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    {
      name: "Siti Rahma Dewi, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    {
      name: "Melati Putri Anindya, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    {
      name: "Laras Wening Puspita, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    {
      name: "Gantang Satria Yudha S.Kom",
      role: "Terapi BackEnd",
      price: 100000,
    },
  ];

  return (
    <>
      <HeroKonsul />
      <main className="w-full max-w-7.5xl mx-auto px-12 sm:px-15 lg:px-30 py-3 sm:py-3 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:pl-8 xl:pl-16">
        {/* Sidebar - Tetap di kiri pada desktop, atas pada mobile */}
        <aside className="justify-start w-auto lg:w-56 xl:w-70 shrink-0 ">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="px-4 sm:px-6 py-3 sm:py-4">
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                Konsultasi
              </p>
            </div>
            <nav className="px-2 py-2">
              <Link
                href="#"
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[#096CF6] font-medium bg-blue-50 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                  className="sm:w-6 sm:h-6"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="4">
                    <circle
                      cx="24"
                      cy="11"
                      r="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 41c0-8.837 8.059-16 18-16"
                    />
                    <circle cx="34" cy="34" r="9" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M33 31v4h4"
                    />
                  </g>
                </svg>
                Buat Janji
              </Link>
              <Link
                href="/Konsultasi/Riwayat-Chat"
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#096CF6] text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="sm:w-6 sm:h-6"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z" />
                    <path
                      strokeLinecap="round"
                      d="M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6"
                    />
                  </g>
                </svg>
                Riwayat Chat
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content - Di kanan sidebar */}
        <section className="flex-1 max-w-5xl space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              Buat Janji
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Pilih terapis dan jadwalkan konsultasi sesuai kebutuhan Anda.
            </p>
          </div>

          {/* Therapist Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full">
            {terapis.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-5 lg:p-6 flex items-center gap-4 w-full"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-20 w-20 rounded-full bg-gray-200 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">
                      {t.name}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500 mt-0.5">
                      {t.role}
                    </p>
                    <p className="mt-2 font-semibold text-gray-900 text-sm lg:text-base">
                      Rp {t.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="px-6 py-2 bg-[#096CF6] text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Konsul
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      </main>
    </>
  );
}
