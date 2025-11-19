"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import useProfileEdit from "@/hooks/useProfileEdit";
import { useRouter } from "next/navigation";

export default function ProfileEdit() {
  const router = useRouter();
  const { data, loading, error, updateName, upsertProfile } = useProfileEdit();

  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [sex, setSex] = useState("");
  const [phone, setPhone] = useState("");

  const [isPhoneEditable, setIsPhoneEditable] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  // Masukkan data awal
  useEffect(() => {
    if (data) {
      setName(data.name);
      setAge(data.age ?? null);
      setSex(data.sex ?? "");
      setPhone(data.phone ?? "");
    }
  }, [data]);

  const handleSave = async () => {
    if (!data) return;

    try {
      await updateName(name);

      await upsertProfile({
        age: Number(age),
        sex,
        phone,
      });

      alert("Profile berhasil disimpan!");
      router.push("/profile");
    } catch {}
  };

  const handlePhoneEdit = () => {
    setIsPhoneEditable(true);
    setTimeout(() => phoneInputRef.current?.focus(), 0);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <aside className="space-y-4">
          <div className="rounded-2xl bg-[#096CF6] text-white p-6 shadow-sm relative overflow-hidden bg-[url('/BgProfile1.svg')] bg-cover bg-right bg-no-repeat">
            <img src="/LogoSpeakBuddy.svg" className="h-[0.895rem] w-auto mb-2" alt="SpeakBuddy" />
            <p className="text-xl font-bold">Pusat Akun</p>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-5">
          <div
            onClick={() => router.back()}
            className="flex items-center gap-2 text-lg font-bold text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/>
            </svg>
            <Link href={"/profile"}>Kembali</Link>
          </div>

          <h2 className="text-2xl font-bold text-black">Pusat Akun</h2>

          {/* INFO AKUN */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="px-6 py-4">
              <p className="text-xl font-bold text-black">Info Pemilik Akun</p>
            </div>

            <div className="px-6 py-6 space-y-5">

              {/* NAMA */}
              <div>
                <div className="text-black font-bold mb-3">Nama</div>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* UMUR */}
              <div>
                <div className="text-black font-bold mb-3">Umur</div>
                <input
                  type="text"
                  value={age ?? ""}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* SEX */}
              <div>
                <div className="text-black font-bold mb-3">Jenis Kelamin</div>
                <select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 appearance-none"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="perempuan">Perempuan</option>
                  <option value="laki">Laki-laki</option>
                </select>
              </div>
            </div>
          </div>

          {/* NOMOR HP */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <p className="text-xl font-bold px-6">Nomor HP</p>

            <div className="px-6 py-6 space-y-5">
              <div className="relative">
                <input
                  ref={phoneInputRef}
                  type="text"
                  disabled={!isPhoneEditable}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-xl text-black"
                />

                {!isPhoneEditable ? (
                  <button
                    onClick={handlePhoneEdit}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#096CF6]"
                  >
                    Ubah
                  </button>
                ) : (
                  <button
                    onClick={() => setIsPhoneEditable(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600"
                  >
                    Simpan
                  </button>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
          >
            Simpan Semua Perubahan
          </button>

          <h2 className="text-lg font-bold text-center text-red-600 cursor-pointer">
            Hapus Akun
          </h2>
        </section>
      </div>
    </main>
  );
}
