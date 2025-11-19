import DocIconSvg from "@/components/latihan-bicara/doc_icon_svg";

export type Level = 'awal' | 'dasar' | 'menengah' | 'lanjut';

export const levelData: Record<Level, LevelData> = {
  awal: {
    title: 'Tahap Awal',
    description: 'Untuk pemula yang baru mengenal kosa kata dasar',
    info: 'Pada tahap ini, anak diajak untuk mengenali dan meniru berbagai bunyi dasar sebagai fondasi kemampuan berbicara. Fokus latihan mencakup vokal, konsonan sederhana, dan suara-suara yang mudah diikuti. Tahap ini dirancang untuk membantu anak membangun keberanian mengeluarkan suara serta melatih koordinasi lidah, mulut, dan napas.',
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
    info: 'Pada tahap dasar, anak mulai diperkenalkan dengan kosakata sehari-hari yang mudah dikenali. Latihan difokuskan pada menyebutkan kata benda, kata kerja sederhana, serta objek yang familiar. Tujuannya adalah membangun pengucapan yang lebih jelas dan membantu anak menghubungkan kata dengan makna.',
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
    info: 'Pada tahap menengah, anak mulai belajar menyusun kata menjadi kalimat sederhana. Latihan membantu anak mengembangkan kemampuan berbahasa yang lebih terstruktur, seperti menyebutkan kebutuhan, menjawab pertanyaan pendek, dan mengulangi kalimat yang diberikan. Ini menjadi jembatan penting menuju komunikasi yang lebih lancar.',
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