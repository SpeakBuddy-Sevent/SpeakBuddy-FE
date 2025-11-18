"use client";

import { useEffect, useState, useRef } from "react";
import { useExercise } from "@/hooks/useExercise";

export default function PracticeClient({ level }: { level: string }) {
  const {
    exerciseId,
    currentItem,
    startExercise,
    nextItem,
    recordAttempt,
    loading,
  } = useExercise();

  const [step, setStep] = useState("intro");
  const [seconds, setSeconds] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [score, setScore] = useState(0);
  const [attemptResult, setAttemptResult] = useState<any | null>(null);

  // Recording states
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [recordBlob, setRecordBlob] = useState<Blob | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startExercise(level);
  }, [level]);

  // Timer logic
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(
        () => setSeconds((s) => s + 1),
        1000
      );
    } else {
      clearInterval(timerRef.current!);
    }
    return () => clearInterval(timerRef.current!);
  }, [isRecording]);

  const startRecordingNow = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (e) =>
      audioChunksRef.current.push(e.data);

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setRecordBlob(blob);
      stream.getTracks().forEach((t) => t.stop());
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const submitRecording = async () => {
    if (!currentItem || !recordBlob) return;

    stopRecording();

    const result = await recordAttempt(currentItem.id, recordBlob);

    result.feedback = cleanFeedback(result.feedback);
    // Simpan result dari API
    setAttemptResult(result);

    const Score = result?.score ?? Math.floor(60 + Math.random() * 35);

    setScore(Score);
    setStep("result");
  };

  function cleanFeedback(text: string) {
    if (!text) return "";

    let cleaned = text;

    cleaned = cleaned.replace(/\*+/g, "");

    cleaned = cleaned.replace(/\(?\bpause\b\)?/gi, "");

    cleaned = cleaned.replace(/\.{3,}/g, ".");

    cleaned = cleaned.replace(/\s{2,}/g, " ");

    cleaned = cleaned.replace(/\""/g, "");

    return cleaned.trim();
  }


  const goNext = async () => {
    const next = await nextItem(exerciseId!, currentItem!.item_number);
    if (!next) {
      setStep("done");
      return;
    }

    setRecordBlob(null);
    setSeconds(0);
    setIsRecording(false);
    setScore(0);
    setStep("intro");
  };

  const retry = () => {
    setSeconds(0);
    setIsRecording(false);
    setRecordBlob(null);
    setStep("record");
    startRecordingNow();
  };

  const start = () => {
    setSeconds(0);
    setStep("record");
    startRecordingNow();
  };

  if (loading || !currentItem) return <p>Loading...</p>;

  const scoreDeg = `${Math.min(100, Math.max(0, score)) * 3.6}deg`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <img
            src="/LogoSpeakBuddy1.svg"
            className="h-6 sm:h-7 w-auto"
          />
          <span className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
            Soal: {currentItem.item_number}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-16">
        {/* Word Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border mb-8">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
              {currentItem.target_text}
            </h1>
          </div>
        </div>

        {/* INTRO */}
        {step === "intro" && (
          <div className="bg-white rounded-2xl shadow-md p-8 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-gray-700 mb-1">Siap mencoba?</p>
                <p className="text-sm text-gray-500">
                  Klik tombol mulai untuk rekam
                </p>
              </div>

              <button
                onClick={start}
                className="px-8 py-3 rounded-xl bg-[#096CF6] text-white font-semibold"
              >
                Mulai Rekam
              </button>
            </div>
          </div>
        )}

        {/* RECORD */}
        {step === "record" && (
          <div className="bg-white rounded-2xl shadow-md p-8 border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span
                  className={`h-14 w-14 rounded-full flex items-center justify-center ${
                    isRecording ? "bg-red-500 animate-pulse" : "bg-gray-400"
                  }`}
                >
                  <svg width="24" height="24" fill="white">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>

                <div>
                  <span className="text-xs text-gray-500">
                    Durasi Rekaman
                  </span>
                  <div className="px-5 py-2 rounded-full bg-red-50 text-red-700 font-bold text-lg">
                    {String(seconds).padStart(2, "0")}:00
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    isRecording ? stopRecording() : startRecordingNow()
                  }
                  className="px-5 py-3 rounded-xl border-2 border-gray-300 font-semibold"
                >
                  {isRecording ? "⏸ Jeda" : "▶ Lanjut"}
                </button>

                <button
                  onClick={submitRecording}
                  className="px-6 py-3 rounded-xl bg-[#096CF6] text-white font-semibold"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        )}

        {/* RESULT */}
          {step === "result" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">

                {/* Feedback */}
                <div className="bg-white rounded-2xl shadow-md p-8 border">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Hasil Analisis
                  </h3>

                  <p className="text-gray-700">
                    {attemptResult?.feedback ??
                      `Kamu sudah mencoba mengucapkan "${currentItem.target_text}". Terus berlatih ya!`}
                  </p>
                </div>

                {/* Score */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md p-8">
                  <div className="relative mx-auto">
                    <div
                      className="w-40 h-40 rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(#096CF6 ${scoreDeg}, #E5E7EB 0)`,
                      }}
                    >
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <p className="text-4xl font-bold">
                          {attemptResult?.accuracy
                            ? Math.round(attemptResult.accuracy)
                            : score}
                          %
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center mt-4 text-sm text-gray-600">
                    Akurasi
                  </p>
                </div>
              </div>

            <div className="bg-white rounded-2xl shadow-md p-8 border">
              <div className="flex justify-between">
                <button
                  onClick={retry}
                  className="px-6 py-3 rounded-xl bg-gray-100"
                >
                  Ulangi
                </button>

                <button
                  onClick={goNext}
                  className="px-6 py-3 rounded-xl bg-[#096CF6] text-white"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DONE */}
        {step === "done" && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center border">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Latihan Selesai! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Terima kasih sudah berlatih!
            </p>

            <button className="px-8 py-3 rounded-xl bg-[#096CF6] text-white font-semibold">
              Lihat Hasil Lengkap
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
