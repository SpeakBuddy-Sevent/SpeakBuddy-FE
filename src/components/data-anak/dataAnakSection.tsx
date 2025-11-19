import useDataAnak from "@/hooks/useDataAnak";
import { useEffect, useState } from "react";

export default function DataAnakSection() {
  const { data, loading, error, upsertDataAnak } = useDataAnak();

  const [childName, setChildName] = useState(data?.child_name || "");
  const [childAge, setChildAge] = useState(data?.child_age || 0);
  const [childSex, setChildSex] = useState(data?.child_sex || "");

  useEffect(() => {
    if (data) {
      setChildName(data.child_name || "");
      setChildAge(data.child_age || 0);
      setChildSex(data.child_sex || "");
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const save = async () => {
    await upsertDataAnak({
      child_name: childName,
      child_age: Number(childAge),
      child_sex: childSex,
    });
    alert("Data anak berhasil disimpan");
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-gray-700 font-medium">Nama Anak</label>
        <input
          type="text"
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-lg p-3"
        />
      </div>

      <div>
        <label className="text-gray-700 font-medium">Umur Anak</label>
        <input
          type="number"
          value={childAge}
          onChange={(e) => setChildAge(Number(e.target.value))}
          className="mt-1 w-full border border-gray-300 rounded-lg p-3"
        />
      </div>

      <div>
        <label className="text-gray-700 font-medium">Jenis Kelamin Anak</label>
        <select
          value={childSex}
          onChange={(e) => setChildSex(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-lg p-3"
        >
          <option value="">Pilih</option>
          <option value="Laki-laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
      </div>

      <button
        onClick={save}
        className="w-full bg-[#096CF6] text-white rounded-xl py-3 font-semibold hover:bg-blue-600"
      >
        Simpan
      </button>
    </div>
  );
}
