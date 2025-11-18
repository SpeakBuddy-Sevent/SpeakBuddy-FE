"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      router.push("/");

      return res.data;
    } catch (err: any) {
      const msg = err.response?.data?.error || "Email atau password salah";
      setError(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
