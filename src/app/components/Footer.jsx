export default function Footer() {
  return (
    <footer>
      {/* BAGIAN UTAMA */}
      <div className="bg-[#054194] pt-8 sm:pt-12 md:pt-16 pb-6 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 justify-between">
            {/* KOLOM KIRI */}
            <div className="w-full sm:w-auto lg:w-1/3">
              <a href="/" className="block w-40 sm:w-48 md:w-56 mb-4 sm:mb-6">
                <img
                  src="/LogoSpeakBuddy.svg"
                  className="h-5 sm:h-6 md:h-7 w-auto"
                  alt="SpeakBuddy"
                />
              </a>

              <p className="text-justify text-base sm:text-lg md:text-[1.1rem] max-w-3xl font-bold mb-2">
                Tempat belajar bicara yang menyenangkan untuk si kecil.
              </p>

              <p className="text-justify text-sm sm:text-base leading-relaxed max-w-full">
                Temani setiap kata pertama anak dengan cara yang seru, aman, dan
                penuh dukungan.
              </p>
            </div>

            {/* KOLOM TENGAH */}
            <div className="w-full sm:w-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl pb-2 mb-2 sm:mb-3 font-semibold">
                Company
              </h2>
              <ul className="space-y-1 sm:space-y-2 leading-6 sm:leading-7 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
              </ul>
            </div>

            {/* KOLOM KANAN */}
            <div className="w-full sm:w-auto">
              <h2 className="text-lg sm:text-xl md:text-2xl pb-2 mb-2 sm:mb-3 font-semibold">
                Social Media
              </h2>
              <ul className="space-y-1 sm:space-y-2 leading-6 sm:leading-7 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#054194] py-3 sm:py-4 text-gray-100">
        <div className="text-center text-xs sm:text-sm px-4">
          Copyright © 2025 SpeakBuddy Indonesia
        </div>
      </div>
    </footer>
  );
}
