"use client"

// src/app/UI/Profile.jsx
// import Link from "next/link";
import { useState } from "react";
import useProfile from "@/hooks/useProfile";
import { useRouter } from "next/navigation";
import DataAnakSection from "@/components/data-anak/dataAnakSection";
// import { Router } from "next/router";


export default function Profile() {
  const router = useRouter();
  const { data, error } = useProfile();
  const [tab, setTab] = useState<"profil" | "data-anak">("profil");

  
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-2 
            lg:grid-cols-4 gap-6">
        <aside className="space-y-4">
          <div className="rounded-2xl bg-[#096CF6] text-white p-6 shadow-sm relative overflow-hidden bg-[url('/BgProfile1.svg')] bg-cover bg-right bg-no-repeat">
            <p className="text-sm opacity-90">Halo,</p>
            <p className="text-xl font-bold">{data?.name}</p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="px-6 py-4">
              <p className="text-gray-700 font-semibold">Dashboard</p>
            </div>
            <nav className="px-2 py-2">
              <button
                onClick={() => setTab("profil")}
                className={`flex w-full text-left items-center gap-3 px-4 py-3 rounded-lg font-medium ${
                  tab === "profil"
                    ? "text-[#096CF6] bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path
                      stroke-linejoin="round"
                      d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                    />
                    <circle cx="12" cy="7" r="3" />
                  </g>
                </svg>
                Pusat Akun
              </button>
              <button
                onClick={() => setTab("data-anak")}
                className={`flex w-full text-left items-center gap-3 px-4 py-3 rounded-lg font-medium ${
                  tab === "data-anak"
                    ? "text-[#096CF6] bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
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
                Data Anak
              </button>
            </nav>
          </div>
        </aside>

<section className="lg:col-span-3 space-y-5">
          
          {/* ===== TAB PROFIL ===== */}
          {tab === "profil" && (
            <>
              <h2 className="text-2xl font-bold text-gray-900">Pusat Akun</h2>

              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between px-6 py-4">
                  <p className="text-xl font-bold text-black">Profil</p>
                  <button
                    onClick={() => router.push("/profile/edit-profile")}
                    className="text-[#096CF6] font-bold text-lg"
                  >
                    Ubah
                  </button>
                </div>

                <div className="px-6 py-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="text-gray-500">Nama</div>
                    <div className="text-black font-medium">{data?.name}</div>

                    <div className="text-gray-500">Nomor HP</div>
                    <div className="text-black font-medium">{data?.phone || "Belum diisi"}</div>

                    <div className="text-gray-500">Email</div>
                    <div className="text-black font-medium">{data?.email}</div>

                    <div className="text-gray-500">Umur</div>
                    <div className="text-gray-400">{data?.age ?? "Isi tanggal lahirmu"}</div>

                    <div className="text-gray-500">Jenis Kelamin</div>
                    <div className="text-gray-400">{data?.sex ?? "Pilih jenis kelaminmu"}</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ===== TAB DATA ANAK ===== */}
          {tab === "data-anak" && (
            <>
              <h2 className="text-2xl font-bold text-gray-900">Data Anak</h2>

              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
                <DataAnakSection />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
