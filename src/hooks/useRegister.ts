"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";

export default function useRegister() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post(
        `${API}/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      setSuccess("Registrasi berhasil!");

      // Opsional → redirect ke login
      setTimeout(() => {
        router.push("/auth/login");
      }, 800);

      return res.data;
    } catch (err: any) {
      const msg =
        err.response?.data?.error || "Terjadi kesalahan saat registrasi";
      setError(msg);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
}
