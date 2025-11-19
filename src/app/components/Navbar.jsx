"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import useUser from "@/hooks/useUser";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user } = useUser();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#096CF6] py-4 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/LogoSpeakBuddy.svg"
                className="h-5 sm:h-6 lg:h-7 w-auto"
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
                href="/konsultasi"
                className={`text-white font-medium px-4 py-2 rounded-md relative transition-all ${
                  pathname === "/Konsultasi" ? "" : "hover:bg-white/10"
                }`}
              >
                Konsultasi
                {pathname.startsWith("/Konsultasi") && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FECB08] rounded-full"></span>
                )}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <Link
                href="/profile"
                className="px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8 bg-white text-[#096CF6] text-sm sm:text-base font-bold rounded-full hover:-translate-y-1 hover:shadow-lg transition-transform"
              >
                {user.name.split(" ")[0]} {/* nama depan saja */}
              </Link>
            ) : (
              <Link
                href="/auth"
                className="px-4 py-1.5 sm:px-6 sm:py-2 lg:px-8 bg-[#FECB08] text-white text-sm sm:text-base font-bold rounded-full hover:-translate-y-1 hover:shadow-lg transition-transform"
              >
                Masuk
              </Link>
            )}

            {/* Hamburger Menu Button (visible only on mobile/tablet) */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
              <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
              <span className="w-6 h-0.5 bg-white rounded-full transition-all"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white font-medium px-4 py-3 rounded-md transition-all ${
                  pathname === "/" ? "bg-white/20" : "hover:bg-white/10"
                }`}
              >
                Beranda
              </Link>

              <Link
                href="/latihan-bicara"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white font-medium px-4 py-3 rounded-md transition-all ${
                  pathname === "/latihan-bicara"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                Latihan Bicara
              </Link>

              <Link
                href="/Konsultasi"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white font-medium px-4 py-3 rounded-md transition-all ${
                  pathname === "/konsultasi"
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                Konsultasi
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
