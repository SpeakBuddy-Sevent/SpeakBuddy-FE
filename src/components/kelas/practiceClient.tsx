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
    loading
  } = useExercise();

  const [recordBlob, setRecordBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    startExercise(level);
  }, [level]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);

    mediaRecorder.onstop = () => {
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      setRecordBlob(blob);
      stream.getTracks().forEach((t) => t.stop());
    };

    mediaRecorder.start();
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
  };

  const submitRecording = async () => {
    if (!currentItem || !recordBlob) return;

    const result = await recordAttempt(currentItem.id, recordBlob);
    console.log("Feedback:", result);

    // get next item
    const next = await nextItem(exerciseId!, currentItem.item_number);
    if (!next) {
      alert("Semua soal selesai!");
    }
  };

  if (loading || !currentItem) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{currentItem.target_text}</h1>
      <p>Item #{currentItem.item_number}</p>

      <div className="mt-6 flex gap-3">
        <button onClick={startRecording} className="px-4 py-2 bg-blue-600 text-white rounded">
          Rekam
        </button>
        <button onClick={stopRecording} className="px-4 py-2 bg-gray-600 text-white rounded">
          Stop
        </button>
        <button
          onClick={submitRecording}
          disabled={!recordBlob}
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          Kirim Jawaban
        </button>
      </div>
    </div>
  );
}
