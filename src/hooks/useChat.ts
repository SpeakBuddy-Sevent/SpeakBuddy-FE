"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  text: string;
  timestamp: string;
}

export default function useChat(chatID?: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, 
    // setLoading
] = useState(false);

  // GET messages
  const fetchMessages = async () => {
    if (!chatID) return;

    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API}/chat/${chatID}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // MAP FIELD BACKEND → FRONTEND
      const raw = res.data || [];
    const mapped = raw.map((msg: any) => ({
      id: msg.id,
      chat_id: msg.chat_id,
      sender_id: msg.sender_id,
      text: msg.text,
      timestamp: msg.timestamp,
    }));

      setMessages(mapped);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };


  // SEND message (pakai chatID)
  const sendMessage = async (text: string) => {
    if (!chatID) return;

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API}/chat/${chatID}/send`,
        { text },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      fetchMessages(); // refresh setelah kirim
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, [chatID]);

  return {
    messages,
    loading,
    sendMessage,
    fetchMessages,
  };
}
