// src/app/UI/FAQ.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Apa itu SpeakBuddy?",
      a: "SpeakBuddy adalah platform belajar bicara yang dirancang untuk membantu anak dengan keterlambatan bicara (speech delay) melalui latihan interaktif, modul terstruktur, dan pendampingan profesional.",
    },
    {
      q: "Untuk usia berapa SpeakBuddy cocok digunakan?",
      a: "SpeakBuddy ideal untuk anak usia 2–7 tahun, atau siapa pun yang sedang membutuhkan stimulasi bicara dasar hingga menengah.",
    },
    {
      q: "Apakah SpeakBuddy bisa menggantikan terapi langsung?",
      a: "Tidak. SpeakBuddy bukan pengganti terapi, tapi pendamping yang membantu latihan di rumah secara konsisten. Untuk kasus tertentu, konsultasi dengan terapis tetap disarankan.",
    },
    {
      q: "Apakah SpeakBuddy aman untuk anak?",
      a: "Ya. Seluruh konten telah disesuaikan agar ramah anak, tanpa iklan, dan mengikuti standar keamanan digital untuk pemula.",
    },
    {
      q: "Bagaimana cara memulai?",
      a: "Cukup buat akun orang tua, tambahkan profil anak, lalu mulai mengikuti modul sesuai level yang direkomendasikan",
    },
    {
      q: "Apakah orang tua harus mendampingi anak saat belajar?",
      a: "Sangat dianjurkan. Pendampingan membuat anak merasa aman, fokus, dan progres lebih cepat.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl py-16 ">
      <div
        className="bg-[#096CF6] rounded-[45px] grid grid-cols-1 md:grid-cols-[3fr_2fr] items-center overflow-hidden bg-[url('/BGFAQ.svg')] bg-no-repeat bg-right-bottom bg-contain  w-full max-w-none"
      >
        <div className="p-10 pl-20 text-white  max-w-full text-left ">
          <h2 className="text-[2.6rem] md:text-4xl max-w-full font-bold leading-tight">
            Setiap anak berhak berkembang sesuai potensinya
          </h2>
          <p className="text-white/90 text-[1.35rem] max-w-full mt-6 mb-6">
            Pendampingan yang tepat, perkembangan mereka bisa terlihat
            lebih cepat. SpeakBuddy hadir untuk mendampingi si Kecil belajar
            bicara dengan cara yang menyenangkan dan mudah.
          </p>
          <a
            href="/register"
            className="inline-flex items-center text-[1.2rem] p-8 gap-2 bg-[#FECB08] text-black font-semibold px-5 py-3 rounded-full"
          >
            Mulai bersama SpeakBuddy
            <span className="ml-3 w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <svg className="w-7 h-6" fill="black" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          </a>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-[2.6rem] font-bold pt-14">
          Masih Ada <span className="text-[#096CF6]">Pertanyaan?</span>
        </h3>
      </div>

      <div className="rounded-2xl bg-white overflow-hidden max-w-3xl mx-auto pt-7">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="border-b last:border-b-0">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className=" font-bold text-black text-[1.2rem]">{item.q}</span>
                <svg
                  className={`h-5 w-5 text-black  transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`${
                  open ? "block" : "hidden"
                } px-6 pb-5 text-black leading-relaxed`}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
