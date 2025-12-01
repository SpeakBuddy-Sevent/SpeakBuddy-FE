"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BuatJanji() {
  const router = useRouter();
  const slots = ["09:00-10:00", "10:00-11.00", "11:00-12.00", "13:00-14.00"];
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const [birthDate, setBirthDate] = useState(null);
  const [consultDate, setConsultDate] = useState(null);

  const [isBirthDateFocused, setIsBirthDateFocused] = useState(false);
  const [isConsultDateFocused, setIsConsultDateFocused] = useState(false);

  const birthDatePickerRef = useRef(null);
  const consultDatePickerRef = useRef(null);
  
  const handleBirthCalendarClick = () => {
    birthDatePickerRef.current?.setFocus();
  };
  
  const handleConsultCalendarClick = () => {
    consultDatePickerRef.current?.setFocus();
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
            <p className="text-xl font-bold">Konsultasi</p>
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
          <h3 className="text-2xl font-bold text-gray-900">Buat Janji</h3>
          
          {/* Card Atas - Data Pasien */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between px-6 py-2">
              <p className="text-xl font-bold text-black">Data Pasien</p>
            </div>

            <div className="px-6 py-6 space-y-5">
              <div>
                <div className="text-black font-bold mb-3">Nama</div>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="Ayu Larasati"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                <div
                  className={`relative w-full px-4 py-3 pr-12 border rounded-xl bg-white text-black transition-all ${
                    isBirthDateFocused
                      ? "border-blue-500 ring-2 ring-blue-100"
                      : "border-gray-300"
                  }`}
                >
                  <DatePicker
                    ref={birthDatePickerRef}
                    selected={birthDate}
                    onChange={(date) => setBirthDate(date)}
                    onFocus={() => setIsBirthDateFocused(true)}
                    onBlur={() => setIsBirthDateFocused(false)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pilih tanggal lahir"
                    className="w-full border-none outline-none bg-transparent text-black"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={100}
                    maxDate={new Date()}
                  />

                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={handleBirthCalendarClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z" />
                    </svg>
                  </span>
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

          {/* Card Bawah - Jadwal Konsultasi */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between px-6 py-2">
              <p className="text-xl font-bold text-black">Jadwal Konsultasi</p>
            </div>

            <div className="px-6 py-6 space-y-5">
              <div>
                <div className="text-black font-medium mb-3">
                  Tanggal Konsultasi
                </div>
                <div
                  className={`relative w-full px-4 py-3 pr-12 border rounded-xl bg-white text-black transition-all ${
                    isConsultDateFocused
                      ? "border-blue-500 ring-2 ring-blue-100"
                      : "border-gray-300"
                  }`}
                >
                  <DatePicker
                    ref={consultDatePickerRef}
                    selected={consultDate}
                    onChange={(date) => setConsultDate(date)}
                    onFocus={() => setIsConsultDateFocused(true)}
                    onBlur={() => setIsConsultDateFocused(false)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Pilih tanggal konsultasi"
                    className="w-full border-none outline-none bg-transparent text-black"
                    minDate={new Date()}
                  />

                  <span
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={handleConsultCalendarClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 hover:text-gray-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <div className="text-black font-medium mb-3">
                  Jam Konsultasi
                </div>
                <div className="flex flex-wrap gap-3">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSlot(s)}
                      type="button"
                      className={`px-6 py-4 rounded-xl border transition-colors text-base ${
                        selectedSlot === s
                          ? "bg-[#096CF6] text-white border-[#096CF6]"
                          : "bg-gray-50 text-gray-600 border-gray-200"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 w-full">
            <Link
              href="/Konsultasi/BuatJanji/Bayar"
              className="block w-full bg-[#096CF6] text-white px-6 py-4 rounded-xl text-xl font-semibold text-center hover:bg-blue-700 transition-colors"
            >
              Selanjutnya
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}