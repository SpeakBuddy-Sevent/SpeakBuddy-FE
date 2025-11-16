// src/app/UI/FAQ.jsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: 'Apa itu SpeakBuddy?',
      a: 'SpeakBuddy adalah platform belajar bicara yang dirancang untuk membantu anak dengan keterlambatan bicara (speech delay) melalui latihan interaktif, modul terstruktur, dan pendampingan profesional.'
    },
    {
      q: 'Untuk usia berapa SpeakBuddy cocok digunakan?',
      a: 'SpeakBuddy ideal untuk anak usia 2–7 tahun, atau siapa pun yang sedang membutuhkan stimulasi bicara dasar hingga menengah.'
    },
    {
      q: 'Apakah SpeakBuddy bisa menggantikan terapi langsung?',
      a: 'Tidak. SpeakBuddy bukan pengganti terapi, tapi pendamping yang membantu latihan di rumah secara konsisten. Untuk kasus tertentu, konsultasi dengan terapis tetap disarankan.'
    },
    {
      q: 'Apakah SpeakBuddy aman untuk anak?',
      a: 'Ya. Seluruh konten telah disesuaikan agar ramah anak, tanpa iklan, dan mengikuti standar keamanan digital untuk pemula.'
    },
    {
      q: 'Bagaimana cara memulai?',
      a: 'Cukup buat akun orang tua, tambahkan profil anak, lalu mulai mengikuti modul sesuai level yang direkomendasikan'
    },
    {
      q: 'Apakah orang tua harus mendampingi anak saat belajar?',
      a: 'Sangat dianjurkan. Pendampingan membuat anak merasa aman, fokus, dan progres lebih cepat.'
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 space-y-14">
      <div className="bg-[#096CF6] rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden bg-[url('/BGFAQ1.svg')] bg-no-repeat bg-right bg-cover">
        <div className="p-10 text-white space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Setiap anak berhak berkembang sesuai potensinya
          </h2>
          <p className="text-white/90">
            Dengan pendampingan yang tepat, perkembangan mereka bisa terlihat lebih cepat.
            SpeakBuddy hadir untuk mendampingi si Kecil belajar bicara dengan cara yang menyenangkan dan mudah.
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 bg-[#FECB08] text-gray-900 font-semibold px-5 py-3 rounded-full"
          >
            Mulai bersama SpeakBuddy
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="p-8 flex justify-center">
          <Image src="/LogoFAQ.svg" alt="Maskot SpeakBuddy" width={520} height={360} className="w-full h-auto" />
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-4xl font-bold">
          Masih Ada <span className="text-[#096CF6]">Pertanyaan?</span>
        </h3>
      </div>

      <div className="rounded-2xl bg-white overflow-hidden max-w-2xl mx-auto">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="border-b last:border-b-0">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className=" font-bold text-black">{item.q}</span>
                <svg
                  className={`h-5 w-5 text-black transition-transform ${open ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`${open ? 'block' : 'hidden'} px-6 pb-5 text-black leading-relaxed`}>
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}