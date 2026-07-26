// Bahasa Indonesia.
// Idioms are rewritten, not translated — "the unglamorous middle", "where the
// metric is hiding" and "a wall of red" have no literal equivalent that reads
// naturally. Job titles, tool names and company names stay in English, which is
// standard in Indonesian tech.

export const profile = {
  name: 'Fandi Lai',
  role: 'Senior Product Designer',
  location: 'Jakarta, Indonesia',
  email: 'fandilai46@gmail.com',
  phone: '+62 852-6929-7980',
  linkedin: 'linkedin.com/in/fandilai',
  linkedinUrl: 'https://linkedin.com/in/fandilai',
  intro:
    'Sebagian besar pekerjaan saya ada di fintech, dan bagian tersulitnya jarang soal tampilan — melainkan aturan di baliknya. Kasus pinggiran, kondisi kosong, dan apa yang terjadi ketika uangnya tidak sampai.',
  longIntro:
    'Waktu saya banyak habis di bagian tengah proyek yang tidak terlihat menarik: kondisi yang tidak pernah ditulis di spec, teks error, momen ketika alur bercabang. Di situlah angkanya biasanya bersembunyi.',
  ownership:
    'Saya memegang bagian-bagian yang biasanya dipecah ke beberapa orang: riset pengguna, alur, UI, penulisan UX dalam Bahasa Indonesia, dan handoff Figma yang memang enak dipakai engineer.',
}

export const ui = {
  langName: 'Bahasa Indonesia',
  meta: {
    title: 'Fandi Lai — Senior Product Designer (Fintech & Perbankan Digital), Jakarta',
    description:
      'Fandi Lai, Senior Product Designer di Jakarta dengan pengalaman 7+ tahun di fintech, perbankan digital, dan e-commerce. Menaikkan pengguna terverifikasi 245% di KoinWorks dan membawa aplikasi perbankan dari 3.2 ke 4.5 bintang.',
  },
  nav: { work: 'Karya', resume: 'Riwayat', about: 'Tentang', contact: 'Kontak', allWork: 'Semua karya', email: 'Email', home: 'Beranda' },
  hero: {
    available: 'Terbuka untuk peluang',
    remote: 'Terbuka kerja remote',
    roleLines: ['Senior Product Designer', 'fintech & perbankan digital'],
    introBefore: 'Saya membuat ',
    introHighlight: 'urusan uang yang rumit',
    introAfter: ' terasa sederhana di layar ponsel. Riset, alur, prototipe — dan angkanya di akhir.',
    cta: 'Lihat karya',
    shippedAt: 'Pernah membangun produk di',
  },
  work: { eyebrow: 'Karya pilihan', heading: ['Tiga taruhan', 'yang berhasil'], idx: '01 — KASUS', readCase: 'Baca kasus' },
  about: { eyebrow: 'Siapa di baliknya', heading: ['Satu siklus penuh,', 'dari riset ke angka'], idx: '02 — TENTANG' },
  index: {
    eyebrow: 'Semua peran, terbaru di atas',
    heading: ['Seluruh', 'perjalanan'],
    idx: '03 — RIWAYAT',
    now: 'Sekarang',
    readCase: 'Baca studi kasus →',
    education: 'Pendidikan',
  },
  footer: {
    eyebrow: 'Punya masalah rumit di layar kecil?',
    cta: ['Mari', 'bicara.'],
    ctaAria: 'Mari bicara — kirim email ke Fandi Lai',
    email: 'Email', linkedin: 'LinkedIn', phone: 'Telepon', basedIn: 'Berbasis di',
    backToTop: 'Kembali ke atas ↑',
    built: 'Dirancang & dibangun sendiri',
  },
  caseStudy: {
    back: '← Semua karya',
    role: 'Peran', timeline: 'Periode', scope: 'Lingkup',
    problem: '01 — Masalahnya', approach: '02 — Pendekatannya',
    shipped: '03 — Yang saya kerjakan', impact: '04 — Dampaknya',
    next: 'Kasus berikutnya',
  },
}

export const heroStats = [
  { value: '245%', label: 'Kenaikan pengguna terverifikasi di KoinWorks' },
  { value: '3.2 → 4.5', label: 'Rating app store di Mandiri Taspen', suffix: '★' },
  { value: '7+', label: 'Tahun merancang produk di Indonesia' },
]

export const shippedAt = ['Finku', 'Goers', 'KoinWorks', 'Mandiri Taspen', 'Disney+ Hotstar', 'Member.id']

export const tickerItems = [
  'Desain Produk', 'End-to-end', 'Fintech', 'Riset Pengguna', 'Design System',
  'Prototyping', 'Penulisan UX (Bahasa Indonesia)', 'Usability Testing', 'Desain Interaksi',
]

export const caseStudies = [
  {
    slug: 'finku-fingpt',
    index: '01',
    company: 'Finku',
    title: 'FinGPT & onboarding 4 layar',
    tagline: 'Fitur AI yang membaca e-statement bank — dan onboarding yang berhenti bertanya terlalu banyak.',
    role: 'Senior Product Designer',
    timeline: 'Feb 2026 – Sekarang',
    scope: ['Desain fitur AI', 'Onboarding', 'Sistem asinkron', 'Copy Bahasa Indonesia', 'Handoff Figma'],
    accentMetric: { value: '20 → 4', label: 'Layar onboarding' },
    problem:
      'Finku adalah aplikasi keuangan pribadi, dan saya satu-satunya product designer di sana, bekerja bersama satu researcher — saya memegang alur, UI, copy Bahasa Indonesia, dan handoff. Ada dua masalah yang menumpuk: onboarding sudah membengkak jadi 20+ layar percakapan sebelum pengguna merasakan manfaat apa pun, dan pengguna tidak punya cara cepat untuk tahu ke mana sebenarnya uang mereka pergi.',
    approach:
      'Saya memangkas onboarding jadi 4 layar dengan memisahkan secara tegas mana yang benar-benar dibutuhkan di awal dan mana yang bisa dipelajari belakangan. Lalu saya merancang FinGPT — fitur AI yang membaca e-statement bank dan memunculkan insight pengeluaran — supaya manfaatnya terasa tanpa pengguna harus mencatat sendiri.',
    solutions: [
      { head: 'Upload asinkron, tiga kondisi', body: 'Membaca e-statement butuh waktu, jadi saya membuat kartu mengambang di beranda dengan tiga kondisi (mengunggah, memproses, siap) plus push notification saat selesai — pengguna cukup melempar file lalu lanjut beraktivitas, bukan menatap loading.' },
      { head: 'Chatroom yang membaca uangmu', body: 'FinGPT menyampaikan insight lewat model interaksi chatroom, jadi bertanya "ke mana uang saya bulan lalu?" terasa seperti mengobrol, bukan membaca laporan.' },
      { head: 'Kategori yang ada aturannya', body: 'Sistem kategori kustom memungkinkan pengguna membuat sub-kategori di bawah kategori yang sudah ada — dengan penolakan duplikat, batas 30 kategori, dan pembersihan budget otomatis saat kategori dihapus, supaya fleksibilitasnya tidak berubah jadi berantakan.' },
      { head: 'Bahasa yang sama untuk alignment', body: 'Saya memperkenalkan format Problem → Approach → Solution → Vision → Next Steps untuk presentasi ke stakeholder. Sekarang formatnya jadi standar di rapat alignment.' },
    ],
    impact: [
      { value: '20 → 4', label: 'Layar onboarding sebelum pengguna merasakan manfaat' },
      { value: '3', label: 'Kondisi upload, supaya proses baca file tidak menghambat pengguna' },
      { value: '30', label: 'Batas kategori, dengan pembersihan budget otomatis' },
    ],
    closing:
      'Yang ini masih berjalan, jadi saya belum mau mengklaim hasil. Onboarding-nya sudah live dan saya sedang mengukur time-on-task — keputusan desain belum selesai sampai angkanya bergerak.',
  },
  {
    slug: 'koinworks-registration',
    index: '02',
    company: 'KoinWorks',
    title: 'Alur registrasi yang menaikkan pengguna terverifikasi 245%',
    tagline: 'Field lebih sedikit, validasi real-time, dan penurunan 20% pada tingkat berhenti di tengah jalan.',
    role: 'Product Designer, Platform',
    timeline: 'Mar 2022 – Jun 2025',
    scope: ['Registrasi', 'Desain form', 'Produk baru 0→1', 'Sistem voucher', 'Kolaborasi UX research'],
    accentMetric: { value: '+245%', label: 'Pengguna terverifikasi' },
    problem:
      'KoinWorks adalah platform pinjaman dan edukasi finansial, dan registrasinya bocor. Form-nya meminta terlalu banyak, terlalu awal, dan memvalidasi terlalu telat — orang baru kena error di ujung, lalu pergi.',
    approach:
      'Saya mendesain ulang alur registrasi di sekitar validasi real-time dan field yang lebih sedikit — menangkap kesalahan tepat saat terjadi, dan membuang semua yang sebenarnya tidak dibutuhkan untuk mendapatkan akun terverifikasi.',
    solutions: [
      { head: 'Validasi sambil mengetik', body: 'Error muncul langsung di field-nya, tepat saat terjadi — bukan tumpukan peringatan merah saat submit. Pengguna selalu tahu dirinya masih di jalur yang benar.' },
      { head: 'Memangkas jumlah field', body: 'Saya menyisakan hanya yang benar-benar dibutuhkan untuk verifikasi dan menunda sisanya, sehingga jarak dari "mulai" ke "terverifikasi" jadi jauh lebih pendek.' },
      { head: 'Produk dari konsep ke rilis', body: 'Saya juga membawa KoinBill (pembayaran tagihan) dan KoinLearn (edukasi finansial) dari konsep sampai rilis, lewat riset, prototyping, dan usability testing — retensi naik 15%.' },
      { head: 'Voucher yang menarik orang kembali', body: 'Saya merancang sistem voucher dan promosi yang mendorong kenaikan 30% pada transaksi berulang, bekerja erat dengan UX research untuk persona dan wawancara stakeholder.' },
    ],
    impact: [
      { value: '+245%', label: 'Pengguna terverifikasi' },
      { value: '−20%', label: 'Berhenti di tengah jalan' },
      { value: '+15%', label: 'Retensi (KoinBill / KoinLearn)' },
      { value: '+30%', label: 'Transaksi berulang (voucher)' },
    ],
    closing:
      'Angka registrasi ini yang pertama saya tunjukkan — satu perubahan terfokus pada satu form, dan bagian atas funnel bergerak lebih jauh dibanding redesign mana pun yang saya kerjakan setelahnya.',
  },
  {
    slug: 'mandiri-taspen',
    index: '03',
    company: 'Mandiri Taspen',
    title: 'Membangun ulang digital banking untuk usaha kecil',
    tagline: 'Dari aplikasi 3.2★ jadi 4.5★ — dan satu sistem visual untuk 50+ layar.',
    role: 'Senior Product Designer (kontrak)',
    timeline: 'Jul 2023 – Apr 2024',
    scope: ['Digital banking', 'E-wallet & tagihan', 'Panduan ilustrasi', 'Micro-interaction', 'Sistem visual'],
    accentMetric: { value: '3.2 → 4.5', label: 'Rating app store', suffix: '★' },
    problem:
      'Pengalaman digital banking untuk pengguna usaha kecil mentok di 3.2 bintang. Fungsi utamanya — top-up e-wallet, tagihan, pengelolaan akun — sebenarnya sudah ada semua, tapi pengalamannya terasa tidak konsisten dan sulit dipercaya.',
    approach:
      'Saya membangun ulang pengalamannya untuk pengguna UMKM dari hulu ke hilir, lalu membuat jaringan penghubungnya — panduan ilustrasi dan spesifikasi micro-interaction — yang membuat 50+ layar terasa seperti satu produk, bukan lima puluh produk berbeda.',
    solutions: [
      { head: 'Fungsi utama, dibangun ulang', body: 'Top-up e-wallet, tagihan, dan pengelolaan akun didesain ulang mengikuti apa yang benar-benar dilakukan pemilik usaha kecil setiap hari — urusan uang yang harus cepat dan tidak boleh ambigu.' },
      { head: 'Satu bahasa visual', body: 'Saya membuat panduan ilustrasi dan spesifikasi micro-interaction yang menyatukan tampilan di 50+ layar, sehingga aplikasinya berhenti terasa seperti dikerjakan banyak tangan berbeda.' },
      { head: 'Kepercayaan lewat detail', body: 'Di perbankan, detail kecil dibaca sebagai rasa aman. Motion dan ilustrasi yang konsisten bekerja diam-diam: ratingnya naik dari 3.2 ke 4.5 bintang.' },
    ],
    impact: [
      { value: '3.2 → 4.5', label: 'Rating app store', suffix: '★' },
      { value: '50+', label: 'Layar dalam satu sistem' },
    ],
    closing: 'Proyek kontrak yang brief-nya adalah kepercayaan — dan rating bintang jadi papan skornya.',
  },
]

export const workIndex = [
  { role: 'Senior Product Designer', company: 'Finku', dates: 'Feb 2026 – Sekarang', current: true, slug: 'finku-fingpt',
    note: 'Satu-satunya product designer di aplikasi keuangan pribadi. Merancang FinGPT (insight e-statement berbasis AI), memangkas onboarding dari 20+ layar jadi 4, dan merilis sistem kategori kustom dengan penolakan duplikat serta pembersihan budget otomatis.' },
  { role: 'Senior Product Designer', company: 'Goers', dates: 'Jun 2025 – Jan 2026',
    note: 'Memimpin redesign homepage untuk kemudahan menemukan konten; menyederhanakan perjalanan pembelian dari hulu ke hilir dan menjalankan sendiri seluruh usability testing.' },
  { role: 'Product Designer, Platform', company: 'KoinWorks', dates: 'Mar 2022 – Jun 2025', slug: 'koinworks-registration',
    note: 'Mendesain ulang registrasi dengan validasi real-time — pengguna terverifikasi naik 245%, tingkat berhenti turun 20%. Membawa KoinBill dan KoinLearn dari konsep ke rilis; voucher mendorong kenaikan 30% transaksi berulang.' },
  { role: 'Senior Product Designer (kontrak)', company: 'Mandiri Taspen', dates: 'Jul 2023 – Apr 2024', slug: 'mandiri-taspen',
    note: 'Proyek kontrak, berjalan bersamaan dengan KoinWorks. Membangun ulang digital banking untuk pengguna usaha kecil — top-up e-wallet, tagihan, pengelolaan akun. Rating aplikasi naik dari 3.2★ ke 4.5★ di 50+ layar.' },
  { role: 'Senior UI/UX Designer', company: 'Member.id', dates: 'Mar 2021 – Feb 2022',
    note: 'Membangun design system bersama untuk CMS Disney+ Hotstar dan aplikasi loyalti Plataan — waktu handoff turun 40%. Skor usability naik 25%.' },
  { role: 'Senior Product Designer', company: 'isiruma', dates: 'Apr 2020 – Feb 2021',
    note: 'Memimpin tim lintas fungsi untuk merilis marketplace furnitur online. Pendapatan naik 54%, click-through iklan naik 35%.' },
  { role: 'UI/UX Designer', company: 'Member.id', dates: 'Mar 2019 – Apr 2020',
    note: 'Membangun fondasi design system untuk converter point, loyalti hotel, dan tools internal. Menyiapkan proses usability testing dan design QA pertama di tim.' },
  { role: 'Jr. UI/UX Designer', company: 'Dusdusan.com', dates: 'Sep 2018 – Feb 2019',
    note: 'Pekerjaan pertama. Merancang antarmuka web dan aplikasi mobile-first, bekerja langsung dengan PM untuk scoping dan alur. Belajarnya cepat.' },
]

export const skills = [
  { group: 'Desain', items: ['Desain produk (end-to-end)', 'Riset pengguna', 'Prototyping', 'Usability testing', 'Design system', 'Desain interaksi', 'Arsitektur informasi', 'Penulisan UX (Bahasa Indonesia)'] },
  { group: 'Tools', items: ['Figma', 'FigJam', 'ProtoPie', 'Maze', 'Mixpanel', 'Amplitude', 'Google Analytics', 'Notion', 'Jira'] },
  { group: 'Growth', items: ['Optimasi konversi', 'Metrik retensi', 'A/B testing', 'Alignment stakeholder'] },
  { group: 'Industri', items: ['Fintech', 'Perbankan digital', 'Event & hiburan', 'SaaS', 'E-commerce'] },
]

export const education = {
  degree: 'S1 Ilmu Komputer',
  school: 'Universitas Bina Nusantara',
  years: '2014 – 2018',
  note: 'HCI, Algoritma',
}
