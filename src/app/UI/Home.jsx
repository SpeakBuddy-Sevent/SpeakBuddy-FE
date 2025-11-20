"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // sesuaikan kalau nama token lain
    setIsLoggedIn(!!token);
  }, []);

  const goToLatihan = () => {
    router.push(isLoggedIn ? "/latihan-bicara" : "/auth");
  };

  const goToKonsultasi = () => {
    router.push(isLoggedIn ? "/konsultasi" : "/auth");
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-25 space-y-20 ">
      <section className="text-center space-y-4">
        <h2 className="text-[2.6rem] font-bold pt-7">
          Fitur <span className="text-blue-600">SpeakBuddy</span>
        </h2>
        <p className="text-black text-2xl max-w-3xl  mx-auto">
          Mendukung perkembangan bicara Si Kecil dengan fitur yang mudah
          digunakan dan ramah anak.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 mt-8">
          {/* Card 1 - Latihan Bicara */}
          <div
            onClick={goToLatihan}
            className="group rounded-2xl border border-gray-200 bg-gray-100 md:bg-gray-100 bg-[#E6F0FE] p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE] animate-fade-in cursor-pointer"
          >
            <div className="h-20 w-20 rounded-xl bg-gray-400 md:bg-gray-400 bg-[#096CF6] mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-12 w-12" src="/mic_home.svg" alt="mic" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 md:text-gray-600 text-[#096CF6] transition-colors duration-300 group-hover:text-[#096CF6]">
              Latihan Bicara
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed max-w-[280px] mx-auto">
              Sesi latihan singkat yang membantu anak memahami suara, kata, dan
              pengucapan secara bertahap.
            </p>
          </div>

          {/* Card 2 - Perkembangan Anak */}
          {/* <div className="group rounded-2xl border border-gray-200 bg-gray-100 md:bg-gray-100 bg-[#E6F0FE] p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE] animate-fade-in animation-delay-100">
            <div className="h-20 w-20 rounded-xl bg-gray-400 md:bg-gray-400 bg-[#096CF6] mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-10 w-10" src="/chart.svg" alt="chart" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 md:text-gray-600 text-[#096CF6] transition-colors duration-300 group-hover:text-[#096CF6]">
              Perkembangan Anak
            </h3>
            <p className="text-base text-black mt-2 leading-relaxed max-w-[280px] mx-auto">
              Pantau perkembangan bicara Si Kecil setiap harinya.
            </p>
          </div> */}

          {/* Card 3 - Konsultasi Terapis */}
          <div
            onClick={goToKonsultasi}
            className="group rounded-2xl border border-gray-200 bg-gray-100 md:bg-gray-100 bg-[#E6F0FE] p-8 shadow-sm w-full h-80 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#E6F0FE] animate-fade-in animation-delay-200 cursor-pointer"
          >
            <div className="h-20 w-20 rounded-xl bg-gray-400 md:bg-gray-400 bg-[#096CF6] mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#096CF6]">
              <img className="h-12 w-12" src="/konsultan.svg" alt="konsultan" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 md:text-gray-600 text-[#096CF6] transition-colors duration-300 group-hover:text-[#096CF6]">
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
          <h2 className="text-[2.6rem] font-black ">
            Mengenal <span className="text-blue-600">SpeechDelay</span>
          </h2>
          <p className="text-black mt-5 text-[1.4rem]">
            Speech delay adalah kondisi ketika perkembangan bicara anak berjalan
            lebih lambat dibandingkan usia sebayanya. Mengenal tanda-tandanya
            sejak dini sangat penting agar orang tua dapat memberikan dukungan
            optimal.
          </p>
        </div>
      </section>

      {/* Section Kenapa Harus Belajar */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Kenapa harus{" "}
          <span className="text-blue-600">belajar di SpeakBuddy?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className="absolute inset-0 opacity-100 group-hover:opacity-31 transition-opacity duration-300"
              style={{
                backgroundImage: `url(/BgHomebawah.svg)`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Latihan yang bisa dilakukan dimana dan kapan saja
              </h3>
            </div>
          </div>

          <div className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className="absolute inset-0 opacity-100 group-hover:opacity-31 transition-opacity duration-300"
              style={{
                backgroundImage: `url(/BgHomebawah.svg)`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Belajar jadi lebih interaktif dan menyenangkan
              </h3>
            </div>
          </div>

          <div className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className="absolute inset-0 opacity-100 group-hover:opacity-31 transition-opacity duration-300"
              style={{
                backgroundImage: `url(/BgHomebawah.svg)`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Pantau perkembangan dengan mudah
              </h3>
            </div>
          </div>

          <div className="group rounded-3xl border border-gray-300 bg-gray-50 p-8 shadow-sm relative overflow-hidden transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-[#096CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className="absolute inset-0 opacity-100 group-hover:opacity-31 transition-opacity duration-300"
              style={{
                backgroundImage: `url(/BgHomebawah.svg)`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-[#A0A0A0] max-w-[70%] pt-3 transition-colors duration-300 group-hover:text-white">
                Terhubung langsung dengan terapis profesional
              </h3>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        @media (min-width: 768px) {
          .animate-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  );
}
