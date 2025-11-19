"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useChatList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchChatList = async () => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      const therapistRes = await axios.get(`${API}/therapist`);
      const therapistMap: Record<number, string> = {};

      therapistRes.data.forEach((t: any) => {
        therapistMap[t.id] = t.name;
      });

      const res = await axios.get(`${API}/chat/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const mapped = res.data.data.map((chat: any) => {
        return {
          id: chat.id,                 
          therapist_name: therapistMap[chat.therapist_id] || "Terapis",
          last_message: chat.last_message ?? "",
          last_time: chat.last_time ?? "",
        };
      });

      setData(mapped);

    } catch (err: any) {
      const msg = err.response?.data?.error || "Gagal mengambil data chat";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatList();
  }, []);

  return { data, loading, error };
}
