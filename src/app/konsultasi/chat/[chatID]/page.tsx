"use client";

import { useParams } from "next/navigation";
import { 
    useEffect, 
    useRef, useState } from "react";
import useChat from "@/hooks/useChat";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ChatRoom() {
  const router = useRouter();
  const { chatID } = useParams();
  const { messages, sendMessage } = useChat(chatID as string);
  const [text, setText] = useState("");

  const bottomRef = useRef<HTMLDivElement>(null);

  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("user_id");
    console.log("user_id di localStorage =", id);
    setUserID(id);
  }, []);

  // const therapistID = localStorage.getItem("therapist_id") || "therapist";

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  if (userID === null) {
    return (
      <main className="w-full max-w-3xl mx-auto px-4 py-6">
        Loading...
      </main>
    );
  }

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-6">

      <button
        onClick={() => router.push("/konsultasi/chat")}
        className="flex items-center gap-2 mb-4 text-sm text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} />
        Kembali ke Daftar Chat
      </button>

      <div className="bg-white border rounded-xl p-4 mb-4 shadow-sm">
        <p className="font-semibold text-gray-800">Chat Terapis</p>
        <p className="text-xs text-gray-500">{messages.length} pesan</p>
      </div>

      {/* Messages */}
      <div className="bg-white border rounded-xl shadow-sm h-[70vh] overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isMe = String(msg.sender_id).trim() === String(userID).trim();
          console.log(msg.sender_id)
          console.log(isMe);

          return (
            <div
              key={msg.id ?? msg.timestamp}
              className={`max-w-[70%] p-3 rounded-xl text-sm ${
                isMe
                  ? "ml-auto bg-blue-600 text-white text-right"
                  : "mr-auto bg-gray-100 text-gray-800 text-left"
              }`}
            >
              {msg.text}

              <p className={`text-xs opacity-60 mt-1 ${isMe ? "text-right" : "text-left"}`}>
                {new Date(msg.timestamp).toLocaleString()}
              </p>
            </div>
          );
        })}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 mt-4 bg-white border rounded-xl shadow-sm p-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border text-sm"
          placeholder="Ketik pesan..."
        />

        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Kirim
        </button>
      </div>
    </main>
  );
}
