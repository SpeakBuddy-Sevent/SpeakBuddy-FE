import { useEffect, useState } from "react";

export const useExerciseItems = (exerciseID: string) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNextItem = async () => {
    try {
      setLoading(true);

      const res = await fetch(`http://localhost:8080/exercise/${exerciseID}/next-item`, {
        credentials: "include"
      });

      if (!res.ok) throw new Error("Gagal fetch item berikutnya");

      const json = await res.json();
      setItem(json);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (exerciseID) fetchNextItem();
  }, [exerciseID]);

  return { item, loading, error, fetchNextItem };
};
