// src/hooks/useConsultation.ts
"use client";

import axios from "axios";
import { useState } from "react";
import {BookConsultationPayload} from "@/types/BookConsultationPayload";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useConsultation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookConsultation = async (payload: BookConsultationPayload) => {
    try {
      setLoading(true);
      setError(null);

      // pastikan format tanggal sesuai Go
      const formattedDate = new Date(payload.date).toISOString();

      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API}/consultation/book/${payload.therapistUserId}`,
        {
          //user_id: payload.userId,
          //therapist_id: payload.therapistUserId,

          child_name: payload.childName,
          child_age: payload.childAge,
          child_sex: payload.childSex,

          date: formattedDate,
          time_slot: payload.timeSlot,
          is_paid: payload.isPaid,
        },
        {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }
      );

      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Gagal membuat konsultasi");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    bookConsultation,
    loading,
    error,
  };
}
