"use client";

import { Level } from '@/data/data_level';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export const useStartExercise = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    console.log("TOKEN LOADED:", t);
    setToken(t);
  }, []);

  const startExercise = async (level: string) => {
    try {
      if (!token) {
        alert("Token belum tersedia — user belum login");
        return;
      }

      setLoading(true);

      const formData = new FormData();
      formData.append('level', level);

      const res = await axios.post(
        `${API}/exercise/start`,
        formData,
        {
            headers: {
                Authorization: `Bearer ${token || ""}`,
            }
        }
      );

      const data = res.data;

      router.push(`/latihan-bicara/${data.level}`);
    } catch (error: any) {
      console.error(error);

      const msg =
        error?.response?.data?.error || 'Tidak dapat memulai latihan';

      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return {
    startExercise,
    loading,
  };
};