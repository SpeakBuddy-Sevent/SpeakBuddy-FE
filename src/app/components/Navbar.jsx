export default function Navbar() {
  return (
    <nav className="bg-[#096CF6] py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/LogoSpeakBuddy.svg"
              className="h-7 w-auto"
              alt="SpeakBuddy"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="/"
              className="text-white font-medium px-4 py-2 rounded-md bg-white/10 transition-all"
            >
              Beranda
            </a>
            
            <div className="relative group">
              <button className="flex items-center text-white font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-all">
                Layanan
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.22a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a
                    href="/kelas"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Kelas
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Assessment
                  </a>
                </div>
              </div>
            </div>
            
            <a
              href="#"
              className="text-white font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-all"
            >
              Artikel
            </a>
            
            <a
              href="#"
              className="text-white font-medium px-4 py-2 rounded-md hover:bg-white/10 transition-all"
            >
              Konsultasi
            </a>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
            </div>
            <button className="hidden sm:flex items-center text-white font-medium hover:text-white/90 transition-colors">
              Hi, Ayu Larasati
              <svg
                className="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.22a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}