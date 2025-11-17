"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#096CF6] py-4 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/LogoSpeakBuddy.svg"
                className="h-7 w-auto"
                alt="SpeakBuddy"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {/* BERANDA */}
              <Link
                href="/"
                className={`text-white font-medium px-4 py-2 rounded-md relative transition-all ${
                  pathname === "/" ? "" : "hover:bg-white/10"
                }`}
              >
                Beranda
                {pathname === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </Link>

              {/* Latihan Bicara */}
              <Link
                href="/latihan-bicara"
                className={`text-white font-medium px-4 py-2 rounded-md relative transition-all ${
                  pathname === "/latihan-bicara" ? "" : "hover:bg-white/10"
                }`}
              >
                Latihan Bicara
                {pathname === "/latihan-bicara" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </Link>

              {/* KONSULTASI */}
              <Link
                href="/Konsultasi"
                className={`text-white font-medium px-4 py-2 rounded-md relative transition-all ${
                  pathname === "/Konsultasi" ? "" : "hover:bg-white/10"
                }`}
              >
                Konsultasi
                {pathname === "/Konsultasi" && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </Link>
            </div>
          </div>

          <Link
            href="/auth"
            className="px-8 py-2 bg-[#FECB08] text-white font-bold rounded-full hover:-translate-y-1 hover:shadow-lg transition-transform"
          >
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
}
