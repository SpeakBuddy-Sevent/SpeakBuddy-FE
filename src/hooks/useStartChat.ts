"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useStartChat() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token")); 
  }, []);

  const startChat = async (therapistID: string) => {
    if (!token) throw new Error("Token belum tersedia");

    const res = await axios.post(
      `${API}/chat/start/${therapistID}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      chatID: res.data.chat_id,
      participants: res.data.participants,
    };
  };

  return { startChat };
}