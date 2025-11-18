"use client";

import { useState, useCallback } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export function useExercise() {
  const [levels, setLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [exerciseId, setExerciseId] = useState<number | null>(null);
  const [currentItem, setCurrentItem] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attemptResult, setAttemptResult] = useState<any | null>(null);

  const getToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
  };

  // 1) GET LEVELS
  const loadLevels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      const res = await fetch(`${API}/api/v1/exercise/levels`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      setLevels(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 2) START EXERCISE
  const startExercise = useCallback(async (level: string) => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      const form = new FormData();
      form.append("level", level);

      const res = await fetch(`${API}/api/v1/exercise/start`, {
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      setExerciseId(data.exercise_id);
      setCurrentItem(data.first_item);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 3) GET NEXT ITEM
  const nextItem = useCallback(async (exerciseID: number, currentItemNumber: number) => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      const res = await fetch(
        `${API}/api/v1/exercise/${exerciseID}/next-item?current_item_number=${currentItemNumber}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (res.status === 404) {
        return null;
      }

      if (!res.ok) throw new Error(data.error);

      setCurrentItem(data);
      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // 4) RECORD ATTEMPT
  const recordAttempt = useCallback(async (itemID: number, blob: Blob) => {
    try {
      setLoading(true);
      setError(null);

      const token = getToken();

      const form = new FormData();
      form.append("item_id", String(itemID));
      form.append("file", blob);

      const res = await fetch(`${API}/api/v1/exercise/record`, {
        method: "POST",
        body: form,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      setAttemptResult({
        id: data.id,
        transcribedText: data.transcribed_text,
        feedback: data.feedback,
        accuracy: data.accuracy,
        model: data.ai_model,
        createdAt: data.created_at
      });

      return data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    levels,
    exerciseId,
    currentItem,
    loading,
    error,
    attemptResult,
    loadLevels,
    startExercise,
    nextItem,
    recordAttempt,
  };
}
