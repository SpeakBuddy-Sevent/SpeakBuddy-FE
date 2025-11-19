import { Hero } from "@/app/components/Hero";

export const HeroKonsul = () => {
  return (
    <div className="relative py-5 md:py-7 flex items-center justify-center overflow-hidden bg-linear-to-r from-[#096CF6] to-[#096CF6]">
      {/* Background dengan ilustrasi playground */}
      <div
        className="
  absolute inset-0 
  bg-[url('/BgHeroKonsul.svg')] 
  bg-contain sm:bg-cover 
  bg-center bg-no-repeat 
  opacity-80
"
      ></div>

      {/* Overlay pattern untuk texture tambahan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl md:text-3xl lg:text-5xl font-extrabold text-white mb-2 leading-tight">
          Konsultasi dengan Terapis Terpercaya Kami
        </h1>

        <p className="text-2xl md:text-3xl text-white/90 mb-0 max-w-5xl mx-auto mt-5">
          Dapatkan bantuan langsung dari terapis berpengalaman terkait
          perkembangan bicara anak.
        </p>
      </div>
    </div>
  );
};
