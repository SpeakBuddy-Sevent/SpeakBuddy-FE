"use client";

import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { CombinedProfile } from "@/types/Profile";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useProfileEdit() {
  const [data, setData] = useState<CombinedProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token || ""}`,
    },
  };

  const fetchProfile = useCallback(async () => {
    if (!token) {
      setError("User belum login");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const [userRes, profileRes] = await Promise.all([
        axios.get(`${API}/user`, authHeader),
        axios.get(`${API}/profile`, authHeader),
      ]);

      setData({
        id: profileRes.data?.id ?? 0,
        name: userRes.data?.name ?? "",
        email: userRes.data?.email ?? "",
        age: profileRes.data?.age ?? null,
        sex: profileRes.data?.sex ?? "",
        phone: profileRes.data?.phone ?? "",
      });
    } catch (err: any) {
      setError(err.response?.data?.error || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }, [token]);

  const updateName = useCallback(
    async (name: string) => {
      if (!token) return;

      setLoading(true);
      setError(null);

      try {
        await axios.patch(`${API}/user/name`, { name }, authHeader);
        setData((prev) => (prev ? { ...prev, name } : prev));
      } catch (err: any) {
        setError(err.response?.data?.error || "Gagal update nama");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  const upsertProfile = useCallback(
    async (req: { age: number; sex: string; phone: string }) => {
      if (!token) return;

      setLoading(true);
      setError(null);

      try {
        const res = await axios.post(`${API}/profile`, req, authHeader);

        setData((prev) =>
          prev
            ? {
                ...prev,
                age: res.data.age,
                sex: res.data.sex,
                phone: res.data.phone,
              }
            : prev
        );
      } catch (err: any) {
        setError(err.response?.data?.error || "Gagal menyimpan profile");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { data, loading, error, updateName, upsertProfile };
}
