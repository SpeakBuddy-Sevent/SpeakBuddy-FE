'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Login from './login/page';
import Register from './register/page';

export default function AuthPage() {
  const router = useRouter();
  return (
    <div className="bg-[#096CF6] flex items-center justify-center min-h-[80vh] p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">
        <button onClick={() => router.back()} className="group flex items-center text-black hover:text-[#096CF6] transition-colors duration-200 mb-6">
             <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-colors duration-200"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          <span className="ml-2 text-base font-medium transition-colors duration-200">Kembali</span>
        </button>

        <div className="rounded-2xl p-4 flex justify-center">
          <Image src="/AuthAwal.svg" alt="SpeakBuddy Mascot" width={320} height={200} className="w-full h-auto" />
        </div>

        <h2 className="text-xl font-bold mt-6 text-black">Selamat datang di SpeakBuddy!</h2>
        <p className="text-gray-600 mt-2">Teman terbaik si Kecil untuk belajar berbicara dengan cara yang interaktif dan menyenangkan.</p>

        <div className="mt-6 space-y-3">
          <Link href="/auth/login" className="block w-full text-center bg-[#096CF6] text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700">Masuk</Link>
          <Link href="/auth/register" className="block w-full text-center border border-blue-200 text-[#096CF6] px-4 py-3 rounded-xl font-semibold bg-blue-50 hover:bg-blue-100">Saya Pengguna Baru, Daftar!</Link>
        </div>
      </div>
    </div>
  );
}