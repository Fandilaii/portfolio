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
    title: 'Fandi Lai — Senior Product Designer (Fintech & Perbankan Digital)',
    description:
      'Fandi Lai, Senior Product Designer dengan pengalaman 7+ tahun di fintech, perbankan digital, dan e-commerce, siap relokasi ke Eropa. Menaikkan pengguna terverifikasi 248% di KoinWorks dan membawa aplikasi perbankan dari 3.2 ke 4.5 bintang.',
  },
  nav: { work: 'Karya', resume: 'Riwayat', about: 'Tentang', contact: 'Kontak', allWork: 'Semua karya', email: 'Email', home: 'Beranda' },
  hero: {
    available: 'Terbuka untuk peluang',
    remote: 'Siap relokasi (Eropa)',
    roleLines: ['Senior Product Designer', 'fintech & perbankan digital'],
    introBefore: 'Saya membuat ',
    introHighlight: 'urusan uang yang rumit',
    introAfter: ' terasa sederhana di layar ponsel. Riset, alur, prototipe — dan angkanya di akhir.',
    cta: 'Lihat karya',
    shippedAt: 'Pernah membangun produk di',
  },
  work: { eyebrow: 'Karya pilihan', heading: ['Enam taruhan,', 'dari dekat'], idx: '01 — KASUS', readCase: 'Baca kasus' },
  about: { eyebrow: 'Siapa di baliknya', heading: ['Satu siklus penuh,', 'dari riset ke angka'], idx: '02 — TENTANG' },
  index: {
    eyebrow: 'Semua peran, terbaru di atas',
    heading: ['Seluruh', 'perjalanan'],
    idx: '03 — RIWAYAT',
    now: 'Sekarang',
    readCase: 'Baca studi kasus →',
    education: 'Pendidikan',
  },
  side: { eyebrow: 'Di luar jam kerja', heading: ['Proyek', 'sampingan'], idx: '04 — MAIN', cta: 'Mainkan panduannya' },
  footer: {
    eyebrow: 'Punya masalah rumit di layar kecil?',
    cta: ['Mari', 'bicara.'],
    ctaAria: 'Mari bicara — kirim email ke Fandi Lai',
    email: 'Email', linkedin: 'LinkedIn', phone: 'Telepon', basedIn: 'Berbasis di', relocation: 'Siap relokasi ke Eropa, atau remote',
    backToTop: 'Kembali ke atas ↑',
    built: 'Dirancang & dibangun sendiri',
  },
  caseStudy: {
    back: '← Semua karya',
    role: 'Peran', timeline: 'Periode', scope: 'Lingkup',
    problem: '01 — Masalahnya', approach: '02 — Pendekatannya',
    shipped: '03 — Yang saya kerjakan', impact: '04 — Dampaknya',
    screens: "Layar aslinya",
    boards: "Proses dan sebelum/sesudah",
    next: 'Kasus berikutnya',
  },
}

export const heroStats = [
  { value: '248%', label: 'Kenaikan pengguna terverifikasi di KoinWorks' },
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
    slug: 'koinworks-registration',
    index: '01',
    company: 'KoinWorks',
    title: 'Alur registrasi yang menaikkan pengguna terverifikasi 248%',
    tagline: 'Field lebih sedikit, validasi real-time, dan penurunan 20% pada tingkat berhenti di tengah jalan.',
    role: 'Product Designer, Platform',
    timeline: 'Mar 2022 – Jun 2025',
    scope: ['Registrasi', 'Desain form', 'Produk baru 0→1', 'Sistem voucher', 'Kolaborasi UX research'],
    accentMetric: { value: '+248%', label: 'Pengguna terverifikasi' },
    cover: {"src": "/work/koinworks/kyc-account-type.png", "alt": "Layar pilihan tipe akun KoinWorks"},
    problem:
      'KoinWorks adalah platform pinjaman dan edukasi finansial, dan registrasinya bocor. Form-nya meminta terlalu banyak, terlalu awal, dan memvalidasi terlalu telat — orang baru kena error di ujung, lalu pergi.',
    approach:
      'Saya mendesain ulang alur registrasi di sekitar validasi real-time dan field yang lebih sedikit — menangkap kesalahan tepat saat terjadi, dan membuang semua yang sebenarnya tidak dibutuhkan untuk mendapatkan akun terverifikasi.',
    solutions: [
      {"head": "KYC yang bisa diselesaikan", "body": "Riset menemukan tiga kegagalan: review yang gagal tanpa alasan, liveness yang error, dan foto KTP buram. Saya memecah KYC jadi lima langkah yang terlihat, memberi tahu syarat tiap pengecekan sebelum mulai, dan menjelaskan kenapa data yang diatur regulasi diminta."},
      { head: 'Validasi sambil mengetik', body: 'Error muncul langsung di field-nya, tepat saat terjadi — bukan tumpukan peringatan merah saat submit. Pengguna selalu tahu dirinya masih di jalur yang benar.' },
      { head: 'Memangkas jumlah field', body: 'Saya menyisakan hanya yang benar-benar dibutuhkan untuk verifikasi dan menunda sisanya, sehingga jarak dari "mulai" ke "terverifikasi" jadi jauh lebih pendek.' },
      { head: 'Produk dari konsep ke rilis', body: 'Saya juga membawa KoinBill (pembayaran tagihan) dan KoinLearn (edukasi finansial) dari konsep sampai rilis, lewat riset, prototyping, dan usability testing — retensi naik 15%.' },
      { head: 'Voucher yang menarik orang kembali', body: 'Saya merancang sistem voucher dan promosi yang mendorong kenaikan 30% pada transaksi berulang, bekerja erat dengan UX research untuk persona dan wawancara stakeholder.' },
    ],
    screens: [
      {"src": "/work/koinworks/kyc-account-type.png", "alt": "Layar pilihan tipe akun", "caption": "Satu pilihan di awal: investasi atau pinjaman usaha. Tiap kartu menjelaskan isinya sebelum pengguna memilih."},
      {"src": "/work/koinworks/kyc-phone.png", "alt": "Input nomor HP dengan kode referral", "caption": "Nomor HP dulu. Kolom referral langsung mengonfirmasi hadiahnya begitu kodenya valid."},
      {"src": "/work/koinworks/kyc-otp.png", "alt": "Input OTP lewat WhatsApp", "caption": "OTP lewat WhatsApp, dengan SMS sebagai cadangan. Bar 5 langkah menunjukkan sisa prosesnya."},
      {"src": "/work/koinworks/kyc-password.png", "alt": "Pembuatan kata sandi dengan aturan langsung", "caption": "Aturan kata sandi tercentang saat mengetik, jadi tidak ada error yang baru muncul saat submit."},
      {"src": "/work/koinworks/kyc-ektp.png", "alt": "Instruksi foto e-KTP", "caption": "Sebelum foto KTP: tiga tips sederhana yang mencegah penolakan karena KTP buram, plus catatan OJK soal alasan datanya diminta."},
      {"src": "/work/koinworks/home-final.png", "alt": "Homepage personal yang baru", "caption": "Homepage personal dibangun ulang di sekitar produk investasi, setelah KoinWorks fokus dari super-app ke investasi."},
    ],
    impact: [
      { value: '+248%', label: 'Pengguna terverifikasi' },
      {"value": "+78%", "label": "Transaksi pertama"},
      { value: '−20%', label: 'Berhenti di tengah jalan' },
      { value: '+15%', label: 'Retensi (KoinBill / KoinLearn)' },
      { value: '+30%', label: 'Transaksi berulang (voucher)' },
    ],
    closing:
      'Angka registrasi ini yang pertama saya tunjukkan — satu perubahan terfokus pada satu form, dan bagian atas funnel bergerak lebih jauh dibanding redesign mana pun yang saya kerjakan setelahnya.',
  },
  {
    slug: 'finku-fingpt',
    index: '02',
    company: 'Finku',
    title: 'FinGPT & onboarding 4 layar',
    tagline: 'Fitur AI yang membaca e-statement bank — dan onboarding yang berhenti bertanya terlalu banyak.',
    role: 'Senior Product Designer',
    timeline: 'Feb 2026 – Sekarang',
    scope: ['Desain fitur AI', 'Onboarding', 'Sistem asinkron', 'Copy Bahasa Indonesia', 'Handoff Figma'],
    accentMetric: { value: '20 → 4', label: 'Layar onboarding' },
    cover: { src: '/work/finku-fingpt/chat-answer.png', alt: "FinGPT menjawab pertanyaan pengeluaran, lalu bertanya apakah jawabannya sudah cukup" },
    problem:
      "Finku adalah aplikasi keuangan pribadi, dan saya satu-satunya product designer di sana, bekerja bersama satu researcher — saya memegang alur, UI, copy Bahasa Indonesia, dan handoff. Ada dua masalah yang menumpuk: onboarding sudah membengkak jadi 20+ layar percakapan sebelum pengguna merasakan manfaat apa pun, dan pengguna tidak punya cara cepat untuk tahu ke mana sebenarnya uang mereka pergi. Dan AI yang membicarakan uangmu harus layak dipercaya: tidak boleh menebak, macet, atau membuatmu buntu.",
    approach:
      "Saya memangkas onboarding jadi 4 layar dengan memisahkan secara tegas mana yang benar-benar dibutuhkan di awal dan mana yang bisa dipelajari belakangan. Lalu saya merancang FinGPT — fitur AI yang membaca e-statement bank dan memunculkan insight pengeluaran — supaya manfaatnya terasa tanpa pengguna harus mencatat sendiri. Saya merancang semua kondisi FinGPT, bukan hanya alur idealnya: apa yang ia katakan sebelum datanya cukup, saat ia salah paham, dan saat sistem gagal.",
    solutions: [
      { head: 'Upload asinkron, tiga kondisi', body: 'Membaca e-statement butuh waktu, jadi saya membuat kartu mengambang di beranda dengan tiga kondisi (mengunggah, memproses, siap) plus push notification saat selesai — pengguna cukup melempar file lalu lanjut beraktivitas, bukan menatap loading.' },
      { head: "Saran dari apa yang ia lihat", body: "FinGPT membuka percakapan dengan saran berdasarkan pola transaksimu. Kalau ia melihat rencana liburan, ia menawarkan budget perjalanan, simulasi biaya, atau dana darurat yang perlu disiapkan. Tidak ada yang dihadapkan ke kolom teks kosong." },
      { head: "Insight menunggu data yang cukup", body: "Insight AI terbuka setelah 15 transaksi tercatat. Sebelum itu, kartunya memberi tahu berapa transaksi lagi yang dibutuhkan dan menawarkan FinGPT untuk mencatatnya, bukan menebak dari data yang terlalu sedikit." },
      { head: "Tidak pernah buntu", body: "Saat FinGPT tidak paham input, ia menunjukkan format beserta contohnya. Saat permintaan gagal, tombol coba lagi ada di gelembung yang sama. Setiap jawaban diakhiri pertanyaan: sudah cukup, atau mau konsultasi lebih lanjut?" },
      { head: 'Kategori yang ada aturannya', body: 'Sistem kategori kustom memungkinkan pengguna membuat sub-kategori di bawah kategori yang sudah ada — dengan penolakan duplikat, batas 30 kategori, dan pembersihan budget otomatis saat kategori dihapus, supaya fleksibilitasnya tidak berubah jadi berantakan.' },
      { head: 'Bahasa yang sama untuk alignment', body: 'Saya memperkenalkan format Problem → Approach → Solution → Vision → Next Steps untuk presentasi ke stakeholder. Sekarang formatnya jadi standar di rapat alignment.' },
    ],
    screens: [
      { src: '/work/finku-fingpt/chat-answer.png', alt: "Jawaban FinGPT membandingkan pengeluaran bulanan", caption: "Jawaban dengan angka nyata, lalu pertanyaan: \"Sudah cukup, atau mau konsultasi lebih lanjut?\"" },
      { src: '/work/finku-fingpt/suggested-prompts.png', alt: "Saran prompt FinGPT", caption: "Saran prompt berdasarkan apa yang FinGPT lihat, di sini rencana liburan." },
      { src: '/work/finku-fingpt/unrecognized.png', alt: "FinGPT menangani input yang tidak dikenali", caption: "Input yang tidak terbaca dibalas dengan format dan contoh, bukan pesan error." },
      { src: '/work/finku-fingpt/retry.png', alt: "Error FinGPT dengan tombol coba lagi", caption: "Permintaan yang gagal tetap menjaga percakapan dan menawarkan coba lagi satu ketuk." },
      { src: '/work/finku-fingpt/insights-feed.png', alt: "Daftar transaksi dengan ringkasan finansial AI", caption: "Ringkasan AI di atas daftar transaksi, plus pengingat transaksi yang belum terkategori." },
      { src: '/work/finku-fingpt/insights-threshold.png', alt: "Kondisi kosong insight AI sebelum 15 transaksi", caption: "Di bawah 15 transaksi, insight menjelaskan apa yang dibutuhkan, bukan menebak." },
    ],
    impact: [
      { value: '20 → 4', label: 'Layar onboarding sebelum pengguna merasakan manfaat' },
      { value: "15", label: "Transaksi sebelum insight AI muncul" },
      { value: '30', label: 'Batas kategori, dengan pembersihan budget otomatis' },
    ],
    closing:
      'Yang ini masih berjalan, jadi saya belum mau mengklaim hasil. Onboarding-nya sudah live dan saya sedang mengukur time-on-task — keputusan desain belum selesai sampai angkanya bergerak.',
  },
  {
    slug: 'finku-q2-logging',
    index: '03',
    company: 'Finku',
    title: "Multi-mata uang, dan empat cara mencatat transaksi",
    tagline: "Membuka aplikasi yang tadinya hanya Rupiah ke mata uang dan negara lain, dan membuat pencatatan jadi bagian yang mudah.",
    role: "Senior Product Designer",
    timeline: "Q2 2026",
    scope: ["Multi-mata uang", "Registrasi global", "Upload dokumen & OCR", "iOS Shortcuts", "Edge case"],
    accentMetric: { value: '20', label: "Mata uang didukung" },
    cover: { src: '/work/finku-q2/logging-currency.png', alt: "Input manual Finku dalam dolar AS, dengan nilai Rupiah di bawah nominal" },
    problem:
      "Finku dibangun untuk satu negara dan satu mata uang: saldo Rupiah, nomor HP Indonesia. Orang yang berpenghasilan, menabung, atau bepergian dengan mata uang lain tidak punya tempat untuk mencatat uang itu. Pencatatan juga jadi beban, karena setiap transaksi yang diketik manual adalah satu alasan lagi untuk berhenti mencatat.",
    approach:
      "Saya menjadikan mata uang sebagai properti tiap akun keuangan, bukan pengaturan global, sehingga pengguna bisa memegang IDR dan USD berdampingan dan tetap melihat satu gambaran utuh. Untuk pencatatan, saya mengumpulkan semua jalur input ke satu layar Upload dan merancang tahap review yang menangkap kesalahan sebelum apa pun tersimpan.",
    solutions: [
      { head: "Mata uang per akun", body: "Pengguna memilih mata uang saat setup dan per akun setelahnya, dari daftar 20 mata uang yang bisa dicari. Mencatat dalam mata uang asing langsung menampilkan nilai Rupiah di bawah nominal, jadi tidak perlu menghitung sendiri. Kode negara global membuka pendaftaran untuk nomor di luar Indonesia." },
      { head: "Satu layar, empat jalan masuk", body: "Upload e-statement dari bank mana saja, scan struk, pilih screenshot dari galeri, atau tempel transaksi dari mana saja dan biarkan FinGPT yang mencatat." },
      { head: "Review sebelum menyimpan", body: "Transaksi hasil baca dikelompokkan per tanggal dan sudah tercentang. Baris tanpa tanggal terdeteksi diberi tanda, dan transaksi yang kemungkinan dobel (tanggal, nominal, dan akun sama) tidak tercentang dengan catatan untuk dicek ulang." },
      { head: "Mencatat tanpa membuka aplikasi", body: "Panduan setup iOS Shortcuts memungkinkan pengguna mencatat dari notifikasi, Apple Pay, atau screenshot dengan Triple Tap atau Action Button." },
    ],
    screens: [
      { src: '/work/finku-q2/logging-currency.png', alt: "Input transaksi manual dalam USD", caption: "Input manual dalam dolar AS, dengan nilai Rupiah di bawah nominal." },
      { src: '/work/finku-q2/currency-picker.png', alt: "Daftar pemilih mata uang", caption: "Pemilih mata uang yang bisa dicari: bendera, kode, dan simbol di tiap baris." },
      { src: '/work/finku-q2/upload-hub.png', alt: "Layar Upload dengan empat opsi pencatatan", caption: "Semua jalur pencatatan di satu layar, dengan tempel sebagai yang terbaru." },
      { src: '/work/finku-q2/review.png', alt: "Layar review transaksi setelah upload e-statement", caption: "Tahap review: dikelompokkan per tanggal, tanggal tak terdeteksi dan transaksi dobel diberi tanda. (Nama contoh dihapus.)" },
      { src: '/work/finku-q2/shortcut.png', alt: "Panduan setup iOS Shortcut", caption: "Panduan setup mencatat lewat Triple Tap iOS atau Action Button." },
    ],
    impact: [
      { value: "20", label: "Mata uang di pemilih" },
      { value: "4", label: "Cara mencatat dari satu layar" },
    ],
    closing:
      "Belum ada angka peluncuran di sini. Yang sedang saya pantau: porsi transaksi yang dicatat lewat upload dibanding diketik, dan berapa banyak pengguna yang menambah mata uang kedua.",
  },
  {
    slug: "office-coffee",
    index: "04",
    company: "Office Coffee",
    title: "Pesan dari meja, dan POS yang mudah dijalankan staf",
    tagline: "Office Coffee: pemesanan lewat QR untuk tamu dan POS tablet untuk kasir, dirancang sebagai satu sistem.",
    role: "Product Designer (freelance)",
    timeline: "Apr 2026 – Jul 2026",
    scope: ["Pemesanan QR", "POS", "Tablet", "Pembayaran QRIS", "Membership", "Manajemen shift"],
    accentMetric: {"value": "0", "label": "Aplikasi atau akun yang perlu dibuat untuk memesan"},
    cover: {"src": "/work/office-coffee/qr-menu.png", "alt": "Menu QR Office Coffee di ponsel"},
    problem: "Office Coffee adalah kedai kopi yang semua pesanannya lewat kasir. Di jam sibuk tamu mengantre untuk memesan, staf mengurus pesanan, pembayaran dan membership di alat yang berbeda, dan menutup shift berarti mencocokkan uang tunai dengan catatan. Briefnya dua produk: tamu memesan dan membayar dari meja, dan staf menjalankan kasir dari satu tablet.",
    approach: "Saya merancang kedua sisi selama tiga bulan sebagai satu sistem, sehingga pesanan dari meja dan pesanan di kasir berakhir di tempat yang sama. Di sisi tamu saya memetakan semua jalur dari scan QR meja sampai pesanan sampai ke bar, termasuk yang gagal. Di sisi staf saya menelusuri satu hari penuh: login, memilih outlet dan mode, membuka shift, menerima pesanan, dan mencocokkan kas di akhir.",
    solutions: [
      {"head": "Scan, pesan, bayar, tanpa aplikasi", "body": "QR di setiap meja membuka menu web dengan nomor meja yang sudah terisi. Tamu memilih menu, menambah catatan dan membayar dengan QRIS tanpa memasang aplikasi atau membuat akun."},
      {"head": "Semua kondisi dirancang, bukan hanya jalur lancar", "body": "Pembayaran gagal, sesi habis, outlet tutup, tanpa jaringan, pencarian kosong dan loading masing-masing punya layar, jadi tamu tidak pernah berhenti di halaman kosong."},
      {"head": "Satu tablet, dua mode", "body": "Setelah login, staf memilih mode kasir atau guest checkout. Perangkat yang sama bisa menjalankan kasir atau menjadi kios pesan sendiri untuk tamu yang datang langsung."},
      {"head": "Kasir yang dibuat untuk cepat", "body": "Menu favorit, library menu dan keypad menu custom hanya berjarak satu ketukan. Dine in atau take away dipilih per pesanan, dan open bill menjaga meja tetap bisa memesan sampai membayar."},
      {"head": "Membership di kasir", "body": "Staf mencari member lewat email dan harga langsung berganti ke harga member, dengan tier Silver, Gold dan Diamond, dan membership bisa dijual dari layar yang sama."},
      {"head": "Shift yang mudah ditutup", "body": "Staf membuka shift dengan modal awal, mencatat kas masuk dan keluar, dan akhir shift membandingkan kas seharusnya dengan kas terhitung untuk QRIS, tunai dan kartu."},
    ],
    screens: [
      {"src": "/work/office-coffee/qr-menu.png", "alt": "Menu QR", "caption": "Menu dibuka dari QR meja, nomor meja sudah terisi."},
      {"src": "/work/office-coffee/qr-detail.png", "alt": "Detail menu", "caption": "Detail menu dengan pilihan ukuran, gula dan es."},
      {"src": "/work/office-coffee/qr-cart.png", "alt": "Keranjang", "caption": "Keranjang dengan catatan per item, siap dibayar."},
      {"src": "/work/office-coffee/qr-qris.png", "alt": "Pembayaran QRIS", "caption": "Pembayaran QRIS dengan hitung mundur dan total tagihan."},
      {"src": "/work/office-coffee/qr-order-received.png", "alt": "Pesanan diterima", "caption": "Pesanan diterima: nomor pesanan dan langkah berikutnya."},
    ],
    boards: [
      {"src": "/work/office-coffee/board-edge-states.png", "alt": "Kondisi error dan edge case untuk tamu", "caption": "Kondisi yang ditemui tamu saat ada masalah: loading, pencarian kosong, tanpa koneksi, outlet tutup, pembayaran gagal dan sesi habis."},
      {"src": "/work/office-coffee/pos-main.png", "alt": "Layar kasir POS", "caption": "Layar kasir: favorit, library dan menu custom, dengan harga member."},
      {"src": "/work/office-coffee/pos-mode.png", "alt": "Pilih mode", "caption": "Memilih mode setelah login: kasir atau guest checkout."},
      {"src": "/work/office-coffee/pos-open-bill.png", "alt": "Open bill", "caption": "Open bill, agar meja bisa terus memesan dan membayar sekali."},
      {"src": "/work/office-coffee/pos-shift.png", "alt": "Dashboard shift", "caption": "Dashboard shift dengan penjualan per metode bayar dan pencocokan kas."},
    ],
    impact: [
      {"value": "2", "label": "Produk dalam satu sistem: pemesanan tamu dan POS staf"},
      {"value": "3", "label": "Cara bayar di kasir: QRIS, tunai dan kartu"},
      {"value": "10+", "label": "Kondisi error dan edge case untuk tamu"},
    ],
    closing: "Desain selesai dan diserahkan pada Juli 2026. Yang pertama ingin saya ukur adalah porsi pesanan dari meja di jam sibuk, dan berapa lama waktu menutup shift.",
  },
  {
    slug: "goers-discovery",
    index: "05",
    company: "Goers",
    title: "Membantu orang menemukan event yang tidak mereka cari",
    tagline: "Audit dan redesign discovery di Goers: homepage, kategori, eksplorasi, dan pencarian.",
    role: "Senior Product Designer",
    timeline: "Jun 2025 – Jan 2026",
    scope: ["UX audit", "Benchmark kompetitor", "Homepage", "Pencarian", "Arsitektur informasi", "Mobile web"],
    accentMetric: {"value": "4", "label": "Masalah discovery diperbaiki"},
    cover: {"src": "/work/goers/search-landing.png", "alt": "Pencarian Goers yang didesain ulang dengan pencarian terakhir dan populer"},
    problem: "Goers menjual tiket konser, olahraga, tempat wisata, dan event komunitas, dan kreator bisa membuat event sendiri. Sebagian besar pengunjung datang dengan tujuan yang sudah jelas. Targetnya adalah discovery organik: orang menemukan event yang tidak mereka cari. Homepage-nya justru menghambat. Kategori dan lokasi tersembunyi di burger menu, semua section memakai kartu yang sama, artikel terlihat seperti event, dan tanggal tidak muncul di daftar.",
    approach: "Saya mulai dari UX audit di tiga tempat discovery terjadi (homepage, eksplorasi event, pencarian) dan membandingkan dengan Tiket.com, Loket, dan Eventbrite. Daftar masalah yang panjang mengerucut jadi empat: sedikit pintu masuk ke discovery, tidak ada personalisasi, hierarki antar jenis konten lemah, dan daftar kurasi yang tidak menonjol. Tiap perubahan di redesign menjawab salah satunya.",
    solutions: [
      {"head": "Kategori dan lokasi di depan", "body": "Daftar kategori keluar dari burger menu ke homepage, di samping pemilih lokasi. Lokasi paling penting untuk event offline, jadi sekarang menyaring semua yang ada di bawahnya."},
      {"head": "Lebih banyak jalan ke semua event", "body": "Link eksplorasi di top bar dan tombol \"jelajahi semua\" di bawah daftar harian membuka satu halaman eksplorasi, diatur ke seluruh Indonesia supaya orang melihat di luar kotanya."},
      {"head": "Alasan untuk kembali tiap hari", "body": "Homepage dibuka dengan event per tanggal: tiga teratas hari ini, dengan yang habis atau lewat digeser ke bawah. Tanggal dan jam tampil di setiap kartu."},
      {"head": "Kartu yang sesuai isinya", "body": "Trending dan tempat wisata punya section berwarna dan bentuk kartu sendiri. Tempat wisata memakai gambar besar, event menampilkan tanggal, lokasi, dan harga."},
      {"head": "Pencarian sebagai halaman", "body": "Pencarian menjadi halaman penuh dengan pencarian terakhir dan populer, filter, dan event trending. Hasil kosong menawarkan event terkait dari kategori yang sama."},
      {"head": "Onboarding dua pertanyaan", "body": "Satu layar opsional menanyakan lokasi dan minat. Jawabannya mempersonalisasi homepage, bahkan untuk tamu."},
    ],
    screens: [
      {"src": "/work/goers/search-landing.png", "alt": "Halaman pencarian dengan pencarian terakhir dan populer", "caption": "Halaman pencarian: pencarian terakhir, populer, dan event trending."},
      {"src": "/work/goers/search-result.png", "alt": "Hasil pencarian sebuah musikal", "caption": "Kartu hasil dengan tanggal, lokasi, harga, dan sisa tiket."},
      {"src": "/work/goers/search-not-found.png", "alt": "Hasil pencarian kosong dengan event terkait", "caption": "Tidak ketemu bukan jalan buntu: event terkait dari kategori yang sama."},
      {"src": "/work/goers/explore.png", "alt": "Halaman jelajahi semua event", "caption": "Jelajahi semua event, diatur ke seluruh Indonesia, dengan tanda untuk yang sudah habis."},
    ],
    boards: [
      {"src": "/work/goers/board-home-top.png", "alt": "Bagian atas homepage sebelum dan sesudah", "caption": "Bagian atas homepage, sebelum dan sesudah: link eksplorasi, lokasi, dan kategori."},
      {"src": "/work/goers/board-event-list.png", "alt": "Daftar event di homepage sebelum dan sesudah", "caption": "Daftar event, sebelum dan sesudah: event per tanggal, trending, dan tempat wisata punya bentuk masing-masing."},
      {"src": "/work/goers/board-explore.png", "alt": "Halaman eksplorasi sebelum dan sesudah", "caption": "Halaman eksplorasi, sebelum dan sesudah."},
    ],
    impact: [
      {"value": "4", "label": "Masalah discovery, masing-masing dengan solusinya"},
      {"value": "3", "label": "Kompetitor dibandingkan"},
      {"value": "2", "label": "Pintu masuk baru ke semua event"},
    ],
    closing: "Redesign-nya sudah live di goersapp.com. Saya memimpin pengerjaan homepage, menyederhanakan perjalanan pembelian dari hulu ke hilir, dan menjalankan sendiri usability testing-nya.",
  },
  {
    slug: "mandiri-taspen",
    cover: {"src": "/work/mandiri-taspen/cover-home.png", "alt": "Layar beranda Movin' dengan ikon layanan besar berlabel"},
    index: "06",
    company: "Mandiri Taspen",
    title: "Membangun ulang aplikasi bank untuk pensiunan",
    tagline: "Movin’ by Mandiri Taspen: dari aplikasi 3.2★ jadi 4.5★, dirancang untuk pengguna usia 55 tahun ke atas.",
    role: "Senior Product Designer (kontrak)",
    timeline: "Jul 2023 – Apr 2024",
    scope: ["Digital banking", "Desain untuk lansia", "Usability testing", "Onboarding", "Panduan ilustrasi", "Sistem visual"],
    accentMetric: {"value": "3.2 → 4.5", "label": "Rating app store", "suffix": "★"},
    problem: "Bank Mandiri Taspen melayani pensiunan PNS, TNI, dan Polri. Sebagian besar penggunanya berusia di atas 55 tahun dan 88% memakai Android. Aplikasi lamanya, Mantap Mobile, mentok di 3.2 bintang: teksnya kecil, ikonnya tidak jelas, formulirnya panjang, dan tidak ada konfirmasi bahwa sebuah aksi berhasil. Saat pengujian, pengguna meminta orang lain ikut melihat layarnya.",
    approach: "Saya salah satu desainer dalam redesign dan rebrand penuh menjadi Movin’, dari registrasi sampai semua fitur. Kami menguji aplikasi lama, mewawancarai pensiunan dengan pertanyaan yang sengaja dibuat sederhana, lalu memetakan apa yang mereka katakan, lakukan, pikirkan, dan rasakan. Hasilnya enam temuan, dan tiap temuan mendapat jawaban spesifik di desain.",
    solutions: [
      {"head": "Onboarding sebagai tugas pertama", "body": "Pengguna baru tidak tahu harus mulai dari mana. Onboarding menjadi misi pertama yang dipandu dan menunjukkan fungsi aplikasinya, dengan coach mark di fitur penting."},
      {"head": "Konfirmasi setelah tiap aksi", "body": "Pengguna ragu apakah ketukannya berhasil. Kini setiap tugas yang selesai dijawab dengan toast atau interaksi kecil, jadi tidak ada yang perlu menebak."},
      {"head": "Ikon yang menjelaskan fungsinya", "body": "Pengguna bilang semua tombol terlihat sama. Saya menggambar ulang set ikonnya sesuai konteks dan memberi label yang terbaca di tiap ikon."},
      {"head": "Formulir panjang, dipecah", "body": "Registrasi menjadi wizard dengan indikator langkah, jadi pengguna selalu tahu berapa langkah lagi dan kenapa tiap data diminta."},
      {"head": "Satu bahasa visual", "body": "Panduan ilustrasi dan spesifikasi micro-interaction menjaga 50+ layar tetap konsisten. Di perbankan, konsistensi itu dibaca sebagai rasa aman."},
    ],
    boards: [
      {"src": "/work/mandiri-taspen/board-previous.png", "alt": "Aplikasi Mantap Mobile sebelumnya", "caption": "Sebelum: Mantap Mobile. Tile padat, label kecil, promosi di atas tugas."},
      {"src": "/work/mandiri-taspen/board-empathy-map.png", "alt": "Empathy map dari wawancara pensiunan", "caption": "Empathy map dari wawancara. \"Saya takut salah pencet dan uang saya hilang.\""},
      {"src": "/work/mandiri-taspen/board-lofi.png", "alt": "Wireframe low-fidelity untuk welcome, home, dan transfer", "caption": "Alur low-fidelity untuk welcome, home, dan transfer, diuji sebelum desain visual."},
      {"src": "/work/mandiri-taspen/board-final.png", "alt": "Layar final Movin'", "caption": "Desain final: huruf lebih besar, ikon berlabel, satu aksi jelas per layar."},
    ],
    impact: [
      {"value": "3.2 → 4.5", "label": "Rating app store", "suffix": "★"},
      {"value": "50+", "label": "Layar dalam satu sistem"},
      {"value": "6", "label": "Temuan riset, masing-masing dengan jawaban desain"},
    ],
    closing: "Desainnya selesai dua bulan lebih cepat dari rencana satu tahun. Brief-nya adalah kepercayaan, dan rating bintang jadi papan skornya.",
  },
]

export const workIndex = [
  { role: 'Senior Product Designer', company: 'Finku', dates: 'Feb 2026 – Sekarang', current: true, slug: 'finku-fingpt',
    note: 'Satu-satunya product designer di aplikasi keuangan pribadi. Merancang FinGPT (asisten AI dan insight otomatis berbasis AI) dan memangkas onboarding dari 20+ layar jadi 4. Memimpin dukungan multi-mata uang, paywall Premium, pencatatan transaksi yang lebih cepat (OCR, iOS Shortcuts), serta MVP Household dan Tracking Days dari brief sampai handoff.' },
  { role: "Product Designer (freelance)", company: 'Office Coffee', dates: "Apr 2026 – Jul 2026", slug: 'office-coffee',
    note: "Proyek freelance untuk kedai kopi. Merancang pemesanan QR dari meja untuk tamu dan POS tablet untuk staf, mencakup pembayaran, open bill, harga member dan pencocokan kas shift." },
  { role: 'Senior Product Designer', company: 'Goers', dates: 'Jun 2025 – Jan 2026', slug: 'goers-discovery',
    note: 'Memimpin redesign homepage untuk kemudahan menemukan konten; menyederhanakan perjalanan pembelian dari hulu ke hilir dan menjalankan sendiri seluruh usability testing.' },
  { role: 'Product Designer, Platform', company: 'KoinWorks', dates: 'Mar 2022 – Jun 2025', slug: 'koinworks-registration',
    note: 'Mendesain ulang registrasi dengan validasi real-time — pengguna terverifikasi naik 248%, tingkat berhenti turun 20%. Membawa KoinBill dan KoinLearn dari konsep ke rilis; voucher mendorong kenaikan 30% transaksi berulang.' },
  { role: 'Senior Product Designer (kontrak)', company: 'Mandiri Taspen', dates: 'Jul 2023 – Apr 2024', slug: 'mandiri-taspen',
    note: 'Proyek kontrak, berjalan bersamaan dengan KoinWorks. Redesign dan rebrand aplikasi bank (Movin’) untuk pensiunan PNS usia 55+, dari registrasi sampai semua fitur. Rating aplikasi naik dari 3.2★ ke 4.5★ di 50+ layar.' },
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

export const sideProjects = [
  {
    href: '/mahjong_101/',
    tag: 'Proyek sampingan',
    meta: 'Panduan interaktif · Bahasa Inggris',
    title: 'Mahjong 101',
    tagline: 'Panduan bergaya game yang mengajarkan mahjong untuk anak usia 7 tahun ke atas. 10 level, kuis, bintang, dan trofi.',
    metric: { value: '10', label: 'Level menuju Mahjong Master' },
  },
]
