"use client";

import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useStartChat() {
  const startChat = async (therapistID: string) => {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${API}/chat/start/${therapistID}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      chatID: res.data.chat_id, // FIX
      participants: res.data.participants,
    };
  };

  return { startChat };
}
