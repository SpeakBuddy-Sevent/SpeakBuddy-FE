export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-20 ">
      <section className="text-center space-y-4">
        <h2 className="text-5xl font-bold pt-7">
          Fitur <span className="text-blue-600">SpeakBuddy</span>
        </h2>
        <p className="text-black text-2xl max-w-2xl mx-auto">
          Mendukung perkembangan bicara Si Kecil dengan fitur yang mudah
          digunakan dan ramah anak.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-5 mt-8">
          <div className="group rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE]">
            <div className="h-20 w-20 rounded-xl bg-gray-400 mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-12 w-12" src="/mic_home.svg" alt="mic" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 transition-colors duration-300 group-hover:text-[#096CF6]">
              Latihan Bicara
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed max-w-[280px] mx-auto">
              Sesi latihan singkat yang membantu anak memahami suara, kata, dan
              pengucapan secara bertahap.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE]">
            <div className="h-20 w-20 rounded-xl bg-gray-400 mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-10 w-10" src="/chart.svg" alt="chart" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 transition-colors duration-300 group-hover:text-[#096CF6]">
              Perkembangan Anak
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed max-w-[280px] mx-auto">
              Pantau perkembangan bicara Si Kecil setiap harinya.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE]">
            <div className="h-20 w-20 rounded-xl bg-gray-400 mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-12 w-12" src="/konsultan.svg" alt="konsultan" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 transition-colors duration-300 group-hover:text-[#096CF6]">
              Konsultasi Terapis
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed max-w-[280px] mx-auto">
              Dapatkan pendampingan dari terapis wicara profesional untuk
              rekomendasi sesuai kebutuhan anak.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/home1.svg"
            alt="Ilustrasi SpeechDelay"
            className="w-full max-w-md"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            Mengenal <span className="text-blue-600">SpeechDelay</span>
          </h2>
          <p className="text-black mt-3 text-xl">
            Speech delay adalah kondisi ketika perkembangan bicara anak berjalan
            lebih lambat dibandingkan usia sebayanya. Mengenal tanda-tandanya
            sejak dini sangat penting agar orang tua dapat memberikan dukungan
            optimal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-2 rounded-xl border text-center flex items-center justify-center h-20 w-full border-gray-500 bg-[#F5F5F5] text-black">
              Anak jarang mengoceh atau meniru suara
            </div>

            <div className="p-2 rounded-xl border text-center flex items-center justify-center h-20 w-full border-gray-500   bg-[#F5F5F5] text-black">
              Belum mengucapkan kata sederhana di usia 18+ bulan
            </div>
          </div>
        </div>
      </section>

      {/* Section Kenapa Harus Belajar */}
      {/* Section Kenapa Harus Belajar */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Kenapa harus{" "}
          <span className="text-blue-600">belajar di SpeakBuddy?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div
            className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(/BgHomebawah.svg)`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Latihan yang bisa dilakukan dimana dan kapan saja
              </h3>
            </div>
          </div>
          
          <div
            className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(/BgHomebawah1.svg)`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Belajar jadi lebih interaktif dan menyenangkan
              </h3>
            </div>
          </div>
          
          <div
            className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(/BgHomebawah1.svg)`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Pantau perkembangan dengan mudah
              </h3>
            </div>
          </div>
          
          <div
            className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: `url(/BgHomebawah1.svg)`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Terhubung langsung dengan terapis profesional
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
