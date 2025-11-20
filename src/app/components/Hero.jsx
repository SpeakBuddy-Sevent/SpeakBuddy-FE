
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Hero = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Sesuaikan nama token kamu
    setIsLoggedIn(!!token);
  }, []);

  const handleStart = () => {
    if (isLoggedIn) {
      router.push("/latihan-bicara");
    } else {
      router.push("/auth");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#096CF6] to-[#096CF6]">
      {/* Background dengan ilustrasi playground */}
      <div
        className="
  absolute inset-0 
  bg-[url('/BgHero1.svg')] 
  bg-contain sm:bg-cover 
  bg-center bg-no-repeat 
  opacity-80
"
      ></div>

      {/* Overlay pattern untuk texture tambahan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl xl:text-[5rem] 2xl:text-[5rem] font-extrabold text-white mb-6 leading-tight"
          style={{ textShadow: "1px 1px 8px rgba(0,0,0,0.3)" }}
        >
          Temani Setiap <span className="text-[#FECB08]">Kata</span>
          <br />
          Pertama <span className="text-[#FECB08]">Anak</span> dengan Ceria
        </h1>

        <p className="text-2xl text-white mb-10 max-w-4xl mx-auto ">
          Platform interaktif yang membantu anak berlatih berbicara lewat
          permainan, suara, dan interaksi menyenangkan.
        </p>

         <button
          onClick={handleStart}
          className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-800 bg-white rounded-full hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Mulai Sekarang
          <span className="ml-3 w-9 h-9 rounded-full bg-[#FECB08] flex items-center justify-center">
            <svg className="w-7 h-6" fill="white" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
