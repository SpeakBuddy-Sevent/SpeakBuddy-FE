'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useLogin from '@/hooks/useLogin';

export default function Login() {
  const router = useRouter();
  const { login, loading, error } = useLogin();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="bg-[#096CF6] flex items-center justify-center min-h-[80vh] p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">
        
        <div className="flex items-center mb-2">
          <button 
            onClick={() => router.push('/auth')} 
            className="group flex items-center text-black hover:text-[#096CF6] transition-colors duration-200 mb-6"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="ml-2 text-base font-medium">Kembali</span>
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-black">Login</h2>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Email Anda"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-900 text-sm font-semibold mb-2">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Kata Sandi"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                aria-pressed={showPassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12zm11-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 font-medium text-base mb-4"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>

        </form>

        <p className="text-gray-600 text-xs text-center">
          Dengan masuk, kamu menyetujui Kebijakan Privasi & Syarat SpeakBuddy
        </p>
      </div>
    </div>
  );
}
