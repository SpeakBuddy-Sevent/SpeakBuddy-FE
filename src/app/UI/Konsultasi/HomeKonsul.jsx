import React from "react";
import Link from "next/link";

export default function HomeKonsul() {
  const terapis = [
    {
      name: "Rizky Aditya Pratama, A.Md.TW",
      role: "Terapi Wicara",
      price: 59000,
    },
    { name: "Nadia Ayu Lestari, A.Md.TW", role: "Terapi Wicara", price: 59000 },
    { name: "Siti Rahma Dewi, A.Md.TW", role: "Terapi Wicara", price: 59000 },
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
    <main className="mx-auto max-w-6xl px-4 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-4">
              <p className="text-gray-700 font-semibold">Konsultasi</p>
            </div>
            <nav className="px-2 py-2">
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#096CF6] font-medium bg-blue-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <g fill="none" stroke="currentColor" stroke-width="4">
                    <circle
                      cx="24"
                      cy="11"
                      r="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 41c0-8.837 8.059-16 18-16"
                    />
                    <circle cx="34" cy="34" r="9" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M33 31v4h4"
                    />
                  </g>
                </svg>
                Buat Janji
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z" />
                    <path
                      stroke-linecap="round"
                      d="M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6"
                    />
                  </g>
                </svg>
                Riwayat Chat
              </Link>
            </nav>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-2">
          <h2 className="text-2xl font-bold text-black">Buat Janji </h2>
          <h2 className="text-sm  text-black mb-9">
            Pilih terapis dan jadwalkan konsultasi sesuai kebutuhan Anda.{" "}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
            {terapis.map((t, i) => (
              <div
                key={i}
                className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-start justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-gray-200" />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    <p className="mt-2 font-semibold text-gray-900">
                      Rp {t.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="mt-auto px-5 py-2 bg-[#096CF6] text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Konsul
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
