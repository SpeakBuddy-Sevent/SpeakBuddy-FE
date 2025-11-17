'use client';
import { useState } from 'react';
import Login from "../../components/Login";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-blue-600 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center mb-8">
          <button className="text-gray-800">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="ml-4 text-lg font-medium text-black">Kembali</span>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-black">Login</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-900 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="ayulestari@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-900 text-sm font-semibold mb-2"
            >
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Masukkan Kata Sandi"
                autoComplete="current-password"
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

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Ingat Saya
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lupa Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 focus:outline-none font-medium text-base mb-4"
          >
            Masuk
          </button>

          <p className="text-gray-600 text-xs text-center">
            Dengan masuk, kamu menyetujui Kebijakan Privasi dan Syarat & Ketentuan SpeakBuddy
          </p>
        </form>
      </div>
    </div>
  );
}