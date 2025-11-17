"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div
        className="grid grid-cols-2 
            lg:grid-cols-4 gap-6"
      >
        <aside className="space-y-4">
          <div className="rounded-2xl bg-[#096CF6] text-white p-6 shadow-sm relative overflow-hidden bg-[url('/BgProfile1.svg')] bg-cover bg-right bg-no-repeat">
            <img
              src="/LogoSpeakBuddy.svg"
              className="h-[0.895rem] w-auto mb-2"
              alt="SpeakBuddy"
            />
            <p className="text-xl font-bold">Konsultasi</p>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-5">
          <div
            onClick={() => router.back()}
            className="flex items-center gap-2 text-lg font-bold text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z" />
            </svg>
            <span>Kembali</span>
          </div>
          

          {/* Card Atas Orang */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-20 w-20 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1">
                <p className="font-semibold text-black ">Claudia Intan Permata, A.Md.TW</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="max-w-md">
                <div className="rounded-full border border-gray-400 bg-white px-4 py-3 text-black shadow-sm">Hi, ada yang bisa saya bantu?</div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-md rounded-2xl border border-gray-400 bg-white px-4 py-3 text-black shadow-sm">Hai Kak, saya mau konsultasi soal perkembangan bicara anak saya. Dia usia 3 tahun tapi masih sering cuma mengeluarkan 1–2 kata, dan kadang hanya menunjuk kalau mau sesuatu. Apakah itu normal?</div>
              </div>

              <div className="max-w-md">
                <div className="rounded-full border border-gray-400 bg-white px-4 py-3 text-black shadow-sm">Boleh saya tanya sedikit?</div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-md rounded-full border border-gray-400 bg-white px-4 py-3 text-black shadow-sm">Boleh kak, silakan.</div>
              </div>

              <div className="max-w-lg rounded-2xl border border-gray-400 bg-white px-4 py-3 text-black shadow-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Apakah anak Ibu sudah bisa meniru kata sederhana seperti “ma”, “pa”, atau nama benda?</li>
                  <li>Bagaimana responsnya saat dipanggil nama?</li>
                  <li>Apakah dia memahami instruksi sederhana, seperti “ambil bola” atau “duduk dulu”?</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3 rounded-full border border-gray-400 bg-gray-200 px-4 py-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                </span>
                <input type="text" placeholder="Ketik pesan disini" className="flex-1 outline-none text-gray-700" />
              </div>
            </div>
          </div>

    
            
        </section>
      </div>
    </main>
  );
}
