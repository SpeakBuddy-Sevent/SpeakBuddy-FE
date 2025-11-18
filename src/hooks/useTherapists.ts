"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export interface Therapist {
  id: number;
  name: string;
}

export default function useTherapists() {
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTherapists = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`${API}/therapists`, {
        withCredentials: true,
      });

      const mapped = res.data.map((t: any) => ({
        id: t.id,
        name: t.name,
      }));

      setTherapists(mapped);
    } catch (err: any) {
      const msg =
        err.response?.data?.error ||
        err.message ||
        "Gagal mengambil data terapis";

      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTherapists();
  }, [fetchTherapists]);

  return {
    therapists,
    loading,
    error,
    fetchTherapists,
  };
}
