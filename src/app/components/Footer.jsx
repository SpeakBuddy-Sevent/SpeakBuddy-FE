export default function Footer() {
  return (
    <footer>
      {/* BAGIAN UTAMA */}
      <div className="bg-[#054194] py-8 text-white">
        <div className="mx-auto max-w-6xl px-2">
          <div className="flex flex-wrap gap-8 justify-between">
            
            {/* KOLOM KIRI */}
            <div className="w-full xl:w-1/4">
              <a href="/" className="block w-56 mb-6">
                <img 
                  src="/LogoSpeakBuddy.svg"
                  className="h-7 w-auto"
                  alt="SpeakBuddy"
                />
              </a>

              <p className="text-justify font-bold mb-2">
                Tempat belajar bicara yang menyenangkan untuk si kecil.
              </p>

              <p className="text-justify leading-relaxed">
                Temani setiap kata pertama anak dengan cara yang seru, aman, dan penuh dukungan.
              </p>
            </div>

            {/* KOLOM TENGAH */}
            <div>
              <h2 className="text-2xl pb-2 mb-3 border-b-4 border-blue-300 inline-block">
                Company
              </h2>
              <ul className="leading-7">
                <li><a href="#" className="hover:text-blue-300">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-blue-300">Hubungi Kami</a></li>
                <li><a href="#" className="hover:text-blue-300">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-blue-300">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            {/* KOLOM KANAN */}
            <div>
              <h2 className="text-2xl pb-2 mb-3 border-b-4 border-blue-300 inline-block">
                Social Media
              </h2>
              <ul className="leading-7">
                <li><a href="#" className="hover:text-blue-300">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-300">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-300">Youtube</a></li>
                <li><a href="#" className="hover:text-blue-300">TikTok</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#054194]  py-3 text-gray-100">
        <div className="text-center text-sm">
          Copyright © 2025 SpeakBuddy Indonesia
        </div>
      </div>
    </footer>
  );
}
