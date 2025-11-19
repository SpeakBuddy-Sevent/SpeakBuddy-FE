// deprecated
"use client";
import React from "react";
import Link from "next/link";
import { HeroKonsul } from "@/app/components/HeroKonsul";

// Chat Card Component dengan hover animation
const ChatCard = ({ name, message, time, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md hover:scale-[1.02] active:scale-[0.9] group"
  >
    <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center text-white font-semibold text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110">
      {name.charAt(0)}
    </div>
    
    <div className="flex-1 min-w-0">
      <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-3 flex-col sm:flex-row">
        <p className="font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </p>
        <span className="text-xs text-gray-500 whitespace-nowrap self-start sm:self-auto">
          {time}
        </span>
      </div>
      
      <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
        {message}
      </p>
      
      {/* Indicator arrow - muncul saat hover */}
      <div className="flex items-center gap-1 mt-2 text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Buka chat</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
);

export default function HomeKonsul() {
  const chatList = [
    {
      id: 1,
      name: "Claudia Intan Permata, A.Md.TW",
      message: "InsyaAllah, Bu. Yang penting konsisten. Banyak anak speech delay yang akhirnya bisa mengejar ketertinggalannya dengan latihan rutin. Kita kerjakan bersama ya 😊",
      time: "10.22"
    },
    {
      id: 2,
      name: "Siti Rahma Dewi, A.Md.TW",
      message: "InsyaAllah, Bu. Yang penting konsisten. Banyak anak speech delay yang akhirnya bisa mengejar ketertinggalannya dengan latihan rutin. Kita kerjakan bersama ya 😊",
      time: "26/09/2025"
    }
  ];

  const handleChatClick = (chatId, name) => {
    alert(`Membuka chat dengan ${name}`);
    // Di implementasi asli, gunakan: router.push(`/chat/${chatId}`)
  };

  return (
    <>
      <HeroKonsul />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 xl:w-72 shrink-0">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-b border-gray-200">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">
                  Konsultasi
                </p>
              </div>
              <nav className="p-2">
                <a
                  href="/konsultasi"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 text-sm sm:text-base group mb-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className="sm:w-5 sm:h-5 transition-transform group-hover:scale-110"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="4">
                      <circle cx="24" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 41c0-8.837 8.059-16 18-16" />
                      <circle cx="34" cy="34" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M33 31v4h4" />
                    </g>
                  </svg>
                  Buat Janji
                </a>
                <a
                  href="/konsultasi/Riwayat-Chat"
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-blue-600 font-medium bg-blue-50 transition-all duration-200 text-sm sm:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="sm:w-5 sm:h-5"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z" />
                      <path strokeLinecap="round" d="M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6" />
                    </g>
                  </svg>
                  Riwayat Chat
                </a>
              </nav>
            </div>
          </aside>

          {/* Konten Utama */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 border-b border-gray-200">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">Chat Terapis</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{chatList.length} percakapan aktif</p>
                </div>
               
              </div>

              <div className="divide-y divide-gray-100">
                {chatList.map((chat) => (
                  <ChatCard
                    key={chat.id}
                    name={chat.name}
                    message={chat.message}
                    time={chat.time}
                    onClick={() => handleChatClick(chat.id, chat.name)}
                  />
                ))}
              </div>

              {/* Empty state jika tidak ada chat */}
              {chatList.length === 0 && (
                <div className="py-12 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Belum ada percakapan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}