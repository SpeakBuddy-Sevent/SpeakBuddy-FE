export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a73e8]">
      {/* Background dengan ilustrasi playground */}
      <div className="absolute inset-0 bg-[url('/BgHero.svg')] bg-cover bg-center opacity-60 grayscale-[100%]"></div>
      
      {/* Overlay gradient - lebih subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#096CF6]/50 to-blue-500/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Temani Setiap <span className="text-yellow-300">Kata</span>
          <br />
          Pertama <span className="text-yellow-300">Anak</span> dengan Ceria
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Platform interaktif yang membantu anak berlatih berbicara lewat permainan,
          suara, dan interaksi menyenangkan.
        </p>
        
        <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Mulai Sekarang
          <svg 
            className="ml-2 w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>
      
      {/* Decorative elements - removed for cleaner look */}
    </div>
  );
};