"use client";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ProfileEdit() {
  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);

  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handlePhoneEdit = () => {
    setIsPhoneEditable(true);
    setTimeout(() => phoneInputRef.current?.focus(), 0);
  };

  const handleEmailEdit = () => {
    setIsEmailEditable(true);
    setTimeout(() => emailInputRef.current?.focus(), 0);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="rounded-2xl bg-[#096CF6] text-white p-6 shadow-sm relative overflow-hidden bg-[url('/BgProfile1.svg')] bg-cover bg-right bg-no-repeat">
            <img
              src="/LogoSpeakBuddy.svg"
              className="h-[0.895rem] w-auto mb-2"
              alt="SpeakBuddy"
            />
            <p className="text-xl font-bold">Pusat Akun</p>
          </div>
        </aside>

        <section className="flex-1 space-y-4 sm:space-y-5">
          <div
            onClick={() => router.back()}
            className="flex items-center gap-2 text-lg font-bold text-black cursor-pointer hover:text-blue-600 transition-colors"
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
          <h2 className="text-2xl font-bold text-black">Pusat Akun</h2>

          {/* Info Pemilik Akun */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between px-6 py-4">
              <p className="text-xl font-bold text-black">Info Pemilik Akun</p>
            </div>

            <div className="px-6 py-6 space-y-5">
              <div>
                <div className="text-black font-bold mb-3">Nama</div>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Ayu Larasati"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-blackfocus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM21.41 6.34l-3.75-3.75l-2.53 2.54l3.75 3.75z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <div className="text-black font-bold mb-3">Tanggal Lahir</div>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z" />
                  </svg>
                </div>
              </div>

              <div>
                <div className="text-black font-bold mb-3">Jenis Kelamin</div>
                <div className="relative">
                  <select className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none cursor-pointer">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="perempuan">Perempuan</option>
                    <option value="laki">Laki-laki</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Nomor HP dan Email */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between px-6 py-4">
              <p className="text-xl font-bold text-black">Nomor HP dan Email</p>
            </div>

            <div className="px-6 py-6 space-y-5">
              <div>
                <div className="text-black font-bold mb-3">Nomor HP</div>
                <div className="relative">
                  <input
                    ref={phoneInputRef}
                    type="text"
                    defaultValue="+62 85810393050"
                    disabled={!isPhoneEditable}
                    className={`w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                      !isPhoneEditable ? "bg-white" : "bg-white"
                    }`}
                  />
                  {!isPhoneEditable ? (
                    <button
                      onClick={handlePhoneEdit}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#096CF6] font-medium hover:text-blue-700 transition-colors"
                    >
                      Ubah
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsPhoneEditable(false)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Simpan
                    </button>
                  )}
                </div>
              </div>

              <div>
                <div className="text-black font-bold mb-3">Email</div>
                <div className="relative">
                  <input
                    ref={emailInputRef}
                    type="email"
                    defaultValue="ayularasati@gmail.com"
                    disabled={!isEmailEditable}
                    className={`w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
                      !isEmailEditable ? "bg-white" : "bg-white"
                    }`}
                  />
                  {!isEmailEditable ? (
                    <button
                      onClick={handleEmailEdit}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#096CF6] font-medium hover:text-blue-700 transition-colors"
                    >
                      Ubah
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEmailEditable(false)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 font-medium hover:text-green-700 transition-colors"
                    >
                      Simpan
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-lg font-bold text-center text-red-600 cursor-pointer">
            Hapus Akun
          </h2>
        </section>
      </div>
    </main>
  );
}
