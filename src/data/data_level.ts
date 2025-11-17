import DocIconSvg from "@/components/latihan-bicara/doc_icon_svg";

export type Level = 'awal' | 'dasar' | 'menengah' | 'lanjut';

export const levelData: Record<Level, LevelData> = {
  awal: {
    title: 'Tahap Awal',
    description: 'Untuk pemula yang baru mengenal kosa kata dasar',
    info: 'Pada tahap ini, anak akan diajak untuk mengenali dan meninirukan suara-suara yang mudah didengar. Tahap ini dirancang untuk membangun kepercayaan diri dan kemampuan mendengar kalimat yang berhubungan dengan pengalaman sehari-hari.',
    materials: [
      'Vokal dasar (A-I-U-E-O)',
      'Konsonan sederhana (M, B, P, S, K)',
      'Suara hewan (moo, meow, baa, woof)',
      'Bunyi onomatope (ding, tik, pop)'
    ],
    outcomes: [
      'Anak berani mengeluarkan suara',
      'Anak mampu menirukan 5-10 bunyi sederhana',
      'Meningkatkan kontrol mulut & artikulasi awal',
      'Anak mulai responsif ketika didengarkan bunyi'
    ],
    icon: DocIconSvg,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  dasar: {
    title: 'Tahap Dasar',
    description: 'Untuk mereka yang sudah menguasai bunyi dasar',
    info: 'Tahap ini fokus pada pengembangan kemampuan berbicara dengan suku kata sederhana dan pola vokal-konsonan yang konsisten. Anak akan belajar menggabungkan suara untuk membentuk kata-kata.',
    materials: [
      'Suku kata sederhana (ma, ba, pa, ta)',
      'Kata dua suku (mama, papa, bapak)',
      'Nada intonasi dasar',
      'Pola speech yang mudah diulang'
    ],
    outcomes: [
      'Anak bisa mengucapkan 10-20 kata sederhana',
      'Peningkatan kejelasan bicara',
      'Anak mulai memahami hubungan kata-aksi',
      'Confidence dalam berkomunikasi sederhana'
    ],
    icon: DocIconSvg,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50'
  },
  menengah: {
    title: 'Tahap Menengah',
    description: 'Untuk mereka yang sudah siap ke level yang lebih kompleks',
    info: 'Fase ini mengembangkan kemampuan berbicara dengan kalimat pendek dan frasa. Anak akan belajar mengekspresikan kebutuhan dan perasaan dengan lebih jelas.',
    materials: [
      'Frasa dua kata (mama makan, papa tidur)',
      'Nada dan intonasi yang lebih variatif',
      'Kata sifat dasar dan kata kerja sederhana',
      'Pola percakapan sosial dasar'
    ],
    outcomes: [
      'Anak bisa membuat kalimat 2-3 kata',
      'Peningkatan vocabulary 30-50 kata',
      'Anak dapat mengekspresikan kebutuhan dasar',
      'Pemahaman perintah sederhana meningkat'
    ],
    icon: DocIconSvg,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  lanjut: {
    title: 'Tahap Lanjut',
    description: 'Untuk mereka yang siap menghadapi tantangan percakapan kompleks',
    info: 'Tahap advanced ini fokus pada pengembangan kemampuan percakapan dua arah, storytelling, dan ekspresi emosi yang lebih kompleks. Persiapan menuju komunikasi sosial yang lebih matang.',
    materials: [
      'Kalimat lengkap dengan subjek dan predikat',
      'Pertanyaan terbuka dan jawaban terstruktur',
      'Penceritaan cerita sederhana (3-5 kalimat)',
      'Ekspresi emosi dan preferensi personal'
    ],
    outcomes: [
      'Anak dapat berbicara dalam kalimat lengkap',
      'Mampu berpartisipasi dalam percakapan dua arah',
      'Vocabulary mencapai 100+ kata',
      'Pemahaman konteks dan nuansa bahasa meningkat'
    ],
    icon: DocIconSvg,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50'
  }
};