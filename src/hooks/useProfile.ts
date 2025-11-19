"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { UserData, ProfileData, CombinedProfile } from "@/types/Profile";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useProfile() {
  const [data, setData] = useState<CombinedProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Parallel request ke /user dan /profile
      const [userRes, profileRes] = await Promise.all([
        axios.get<UserData>(`${API}/user`, { headers }),
        axios.get<ProfileData>(`${API}/profile`, { headers }),
      ]);

      const user = userRes.data;
      const profile = profileRes.data;

      setData({
        id: user.id,
        name: user.name,
        email: user.email,
        age: profile?.age ?? null,
        sex: profile?.sex ?? null,
        phone: profile?.phone ?? null,
      });
    } catch (err: any) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    data,
    loading,
    error,
    refresh: fetchProfile,
  };
}
