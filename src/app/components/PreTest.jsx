"use client";
import { useEffect, useRef, useState } from "react";

export default function PreTest() {
  const questions = [
    { word: "Ayam", phonetic: "a . yam" },
    { word: "Sapu", phonetic: "sa . pu" },
    { word: "Buku", phonetic: "bu . ku" },
    { word: "Pintu", phonetic: "pin . tu" },
    { word: "Meja", phonetic: "me . ja" },
  ];
  const [step, setStep] = useState("intro");
  const [index, setIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const start = () => {
    setStep("record");
    setSeconds(0);
    setIsRecording(true);
  };

  const send = () => {
    setIsRecording(false);
    const simulated = Math.floor(60 + Math.random() * 35);
    setScore(simulated);
    setStep("result");
  };

  const retry = () => {
    setSeconds(0);
    setIsRecording(true);
    setStep("record");
  };

  const next = () => {
    const nextIdx = index + 1;
    if (nextIdx < questions.length) {
      setIndex(nextIdx);
      setSeconds(0);
      setIsRecording(false);
      setScore(0);
      setStep("intro");
    } else {
      setStep("done");
    }
  };

  const q = questions[index];
  const scoreDeg = `${Math.min(100, Math.max(0, score)) * 3.6}deg`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <img
            src="/LogoSpeakBuddy1.svg"
            alt="SpeakBuddy"
            className="h-6 sm:h-7 w-auto"
          />
          <span className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium">
            Soal: {index + 1}/{questions.length}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16">
        {/* Word Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-4">
              {q.word}
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="text-base sm:text-lg text-gray-600 tracking-wider">
                {q.phonetic}
              </span>
              <button className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Intro Step */}
        {step === "intro" && (
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-base sm:text-lg text-gray-700 mb-1">
                  Siap untuk mencoba?
                </p>
                <p className="text-sm text-gray-500">
                  Klik tombol "Mulai" untuk merekam suaramu
                </p>
              </div>
              <button
                onClick={start}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#096CF6] hover:bg-[#0859c9] text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Mulai Rekam
              </button>
            </div>
          </div>
        )}

        {/* Recording Step */}
        {step === "record" && (
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isRecording ? "bg-red-500 animate-pulse" : "bg-gray-400"
                  }`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 mb-1">
                    Durasi Rekaman
                  </span>
                  <span className="px-5 py-2 rounded-full bg-red-50 text-red-700 font-bold text-lg">
                    {String(seconds).padStart(2, "0")}:00
                  </span>
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsRecording((r) => !r)}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold transition-all duration-200"
                >
                  {isRecording ? "⏸ Jeda" : "▶ Lanjut"}
                </button>
                <button
                  onClick={send}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#096CF6] hover:bg-[#0859c9] text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Result Step */}
        {step === "result" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
              {/* Feedback Card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#096CF6"
                      strokeWidth="2"
                    >
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      Hasil Analisis
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Bagus sekali kamu sudah mencoba mengucapkan kata{" "}
                      <span className="font-semibold text-[#096CF6]">
                        "{q.word}"
                      </span>
                      ! Kamu sudah benar pada bagian awalnya, dan itu kemajuan
                      yang sangat penting. Untuk bagian akhirnya tadi masih
                      sedikit terdengar berbeda, tapi tidak apa-apa. Terus
                      berlatih ya! 💪
                    </p>
                    <button className="mt-4 h-20 w-20 sm:h-20 sm:w-20 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Score Card */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center">
                <div className="relative">
                  <div
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center"
                    style={{
                      background: `conic-gradient(#096CF6 ${scoreDeg}, #E5E7EB 0)`,
                    }}
                  >
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                          {score}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600 font-medium">
                    Skor PreTest
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {score >= 80
                      ? "Sempurna! 🎉"
                      : score >= 60
                      ? "Bagus! 👍"
                      : "Terus berlatih! 💪"}
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Playback & Actions */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1 pl-2">
                      Putar Ulang
                    </span>
                    <span className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-bold">
                      {String(seconds).padStart(2, "0")}:00
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={retry}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#096CF6] font-semibold transition-all duration-200"
                  >
                    Ulangi
                  </button>
                  <button
                    onClick={next}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#096CF6] hover:bg-[#0859c9] text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
                  >
                    Selanjutnya 
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Done Step */}
        {step === "done" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center">
            <div className="mb-6">
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                PreTest Selesai! 🎉
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Terima kasih sudah mengikuti PreTest. Kamu hebat!
              </p>
              <button className="px-8 py-3 rounded-xl bg-[#096CF6] hover:bg-[#0859c9] text-white font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
                Lihat Hasil Lengkap
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
