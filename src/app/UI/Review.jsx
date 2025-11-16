'use client';
import { useRef } from 'react';

export default function Review() {
  const scrollerRef = useRef(null);
  const scrollByAmount = 360; // Sedikit lebih besar dari width card (340px)
  
  // Animasi scroll smooth dengan easing
  const animateScrollTo = (el, to, duration = 500) => {
    if (!el) return;
    const start = el.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    // Easing function: easeInOutQuad untuk transisi lebih smooth
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = start + change * ease(progress);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };
  
  const scrollLeft = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = Math.max(0, el.scrollLeft - scrollByAmount);
    animateScrollTo(el, target, 500);
  };
  
  const scrollRight = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = Math.min(maxScroll, el.scrollLeft + scrollByAmount);
    animateScrollTo(el, target, 500);
  };

  const reviews = [
    {
      name: "Agung Nugraha",
      role: "Pengguna",
      text: "Setelah pakai SpeakBuddy setiap hari, anak saya mulai berani mengeluarkan lebih banyak kata dan terlihat jauh lebih percaya diri waktu berlatih.",
      image: "/avatar1.jpg"
    },
    {
      name: "Carmenita Ayu",
      role: "Pengguna",
      text: "Laporan perkembangan di SpeakBuddy bikin saya sadar kalau anak saya sebenarnya mengalami banyak kemajuan kecil, dan membuat saya semakin semangat mendampinginya.",
      image: "/avatar2.jpg"
    },
    {
      name: "Maudy Ayunda",
      role: "Terapis",
      text: "Dari sudut pandang profesional, saya menilai SpeakBuddy efektif karena menggabungkan stimulasi audio, visual, dan aktivitas sederhana yang sesuai untuk anak dengan speech delay ringan hingga sedang.",
      image: "/avatar3.jpg"
    },
    {
      name: "Levina Nathania",
      role: "Pengguna",
      text: "Anak saya selalu antusias membuka SpeakBuddy karena latihannya dibuat seperti permainan, jadi proses belajar yang ringan tapi tetap efektif.",
      image: "/avatar4.jpg"
    },
    {
      name: "Dita Cahyaning",
      role: "Pengguna",
      text: "Dulu anak saya cenderung malu jika diminta bicara, sejak pakai SpeakBuddy malah sering minta latihan sendiri.",
      image: "/avatar5.jpg"
    }
  ];

  return (
    <section className="bg-[#096CF6] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-[2.6 rem] md:text-4xl font-bold text-white mb-4">
            Pengalaman Mereka Belajar di SpeakBuddy
          </h2>
          <p className="text-white/90 text-[1.4rem] max-w-2xl mx-auto">
            Cerita dari para orang tua yang melihat perkembangan bicara anaknya sedikit demi sedikit, setiap hari.
          </p>
        </div>

        <div className="relative">
          {/* Button Kiri */}
          <button 
            onClick={scrollLeft} 
            aria-label="Sebelumnya" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-100 text-blue-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Button Kanan */}
          <button 
            onClick={scrollRight} 
            aria-label="Berikutnya" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-100 text-blue-600 rounded-full p-3 shadow-lg transition-all hover:scale-110"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollerRef} 
            className="flex gap-6 overflow-x-auto px-2 py-4 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'none' // Disable snap untuk scroll yang lebih smooth
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 w-[320px] md:w-[340px] shrink-0 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}