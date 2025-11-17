"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState("beranda");

  return (
    <nav className="bg-[#096CF6] py-4 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src="/LogoSpeakBuddy.svg" className="h-7 w-auto" alt="SpeakBuddy" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <a
                href="/"
                onClick={() => setActiveMenu("beranda")}
                className={`text-white font-medium px-4 py-2 rounded-md transition-all relative ${
                  activeMenu === "beranda" ? "bg-none" : "hover:bg-white/10"
                }`}
              >
                Beranda
                {activeMenu === "beranda" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </a>

              <div className="relative group">
                <button
                  onClick={() => setActiveMenu("layanan")}
                  className={`flex items-center text-white font-medium px-4 py-2 rounded-md transition-all relative ${
                    activeMenu === "layanan" ? "bg-none" : "hover:bg-white/10"
                  }`}
                >
                  Layanan
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.22a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                  </svg>
                  {activeMenu === "layanan" && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                  )}
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/latihan-bicara" onClick={() => setActiveMenu("layanan")} className="block px-4 py-2 text-sm text-black font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Latihan Bicara
                    </a>
                    <a href="#" onClick={() => setActiveMenu("layanan")} className="block px-4 py-2 text-sm text-black font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Perkembangan Anak
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#"
                onClick={() => setActiveMenu("konsultasi")}
                className={`text-white font-medium px-4 py-2 rounded-md transition-all relative ${
                  activeMenu === "konsultasi" ? "bg-none" : "hover:bg-white/10"
                }`}
              >
                Konsultasi
                {activeMenu === "konsultasi" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </a>
            </div>
          </div>

          {/* Right: Login button */}
          <div className="flex items-center gap-3">
            <Link href="/auth/register" className="px-8 py-2 bg-[#FECB08] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
