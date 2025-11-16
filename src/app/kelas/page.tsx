'use client';

import { useState } from 'react';
import { BookOpen, CheckCircle, Volume2, Music } from 'lucide-react';
import DocIconSvg from '@/components/kelas/doc_icon_svg';
import { levelData, Level } from '@/data/data_level';
import {useStartExercise} from '@/hooks/useStartExercise';

const levelButtons: Array<{ id: Level; label: string }> = [
  { id: 'awal', label: 'Tahap Awal' },
  { id: 'dasar', label: 'Tahap Dasar' },
  { id: 'menengah', label: 'Tahap Menengah' },
  { id: 'lanjut', label: 'Tahap Lanjut' }
];

export default function Home() {
  const [activeLevel, setActiveLevel] = useState<Level>('dasar');
  const current = levelData[activeLevel];
  const { startExercise, loading } = useStartExercise();
  const IconComponent = current.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Alert Banner */}
      <div className="bg-emerald-100 border-l-4 border-emerald-500 p-4 mx-4 mt-4 rounded-lg">
        <h3 className="font-semibold text-emerald-900 mb-1">Sebelum mulai latihan, yuk ikuti Tes Awal dulu.</h3>
        <p className="text-sm text-emerald-800 mb-3">Dengan tes ini, SpeakBuddy bisa menyesuaikan level latihan yang paling cocok untuk Si Kecil.</p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
          Ayo Mulai
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-2 sticky top-4">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Kategori Latihan
              </h3>
              {levelButtons.map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveLevel(btn.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
                    activeLevel === btn.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">
                    {btn.id === 'awal' && DocIconSvg()}
                    {btn.id === 'dasar' && DocIconSvg()}
                    {btn.id === 'menengah' && DocIconSvg()}
                    {btn.id === 'lanjut' && DocIconSvg()}
                  </span>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${current.color} text-white`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{current.title}</h1>
                  <p className="text-gray-600">{current.description}</p>
                </div>
              </div>

              <div className={`${current.bgColor} rounded-lg p-4 md:p-6 mb-8 border-l-4 border-blue-500`}>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-blue-600" />
                  Informasi:
                </h3>
                <p className="text-gray-700 leading-relaxed">{current.info}</p>
              </div>

              {/* Materials Section */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-blue-600" />
                  Daftar Materi:
                </h3>
                <ul className="space-y-2">
                  {current.materials.map((material, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Hasil yang Diharapkan:
                </h3>
                <ul className="space-y-2">
                  {current.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
              onClick={() => startExercise(activeLevel)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                {loading ? "Loading..." : "Mulai Latihan Yuk"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
