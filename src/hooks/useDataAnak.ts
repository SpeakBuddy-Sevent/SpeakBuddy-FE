"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export interface DataAnak {
  id: number;
  child_name: string;
  child_age: number;
  child_sex: string;
}

export default function useDataAnak() {
  const [data, setData] = useState<DataAnak | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GET data anak
  const fetchDataAnak = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${API}/data-anak`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setData(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || "Gagal memuat data anak");
    } finally {
      setLoading(false);
    }
  }, []);

  // POST / update data anak
  const upsertDataAnak = useCallback(
    async (input: { child_name: string; child_age: number; child_sex: string }) => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.post(`${API}/data-anak`, input, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setData(res.data);
      } catch (err: any) {
        setError(err.response?.data?.error || "Gagal menyimpan data anak");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchDataAnak();
  }, [fetchDataAnak]);

  return { data, loading, error, upsertDataAnak };
}
