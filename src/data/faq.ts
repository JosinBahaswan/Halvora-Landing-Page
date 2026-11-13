export type KategoriId = 'bahan' | 'ukuran' | 'pemesanan' | 'pengiriman';

export interface FaqItem {
  kategori: KategoriId;
  tanya: string;
  jawab: string[]; // satu string = satu paragraf
  poin?: string[];
  tautan?: { teks: string; href: string };
  kata?: string; // kata kunci tambahan untuk pencarian
}

export const kategori = [
  { id: 'all', label: 'Semua Pertanyaan' },
  { id: 'bahan', label: 'Bahan & Kain' },
  { id: 'ukuran', label: 'Ukuran (XS–5XL)' },
  { id: 'pemesanan', label: 'Pemesanan di Shopee' },
  { id: 'pengiriman', label: 'Pengiriman & Retur' },
] as const;

export const faq: FaqItem[] = [
  {
    kategori: 'bahan',
    tanya: 'Apa beda Cotton Combed 24s dan 30s?',
    jawab: [
      'Bedanya ada di ketebalan benang. 24s lebih tebal dan padat, jatuhnya lebih rapi dan berstruktur. 30s lebih halus, jadi kainnya lebih ringan dan terasa lebih adem.',
      'Keduanya sama-sama cotton combed dengan potongan regular fit dan pilihan warna yang sama.',
    ],
    poin: [
      '24s: cocok kalau suka kaos yang lebih tebal dan berisi',
      '30s: cocok untuk cuaca panas dan aktivitas seharian',
    ],
    kata: '24s 30s tebal tipis adem benang ketebalan',
  },
  {
    kategori: 'bahan',
    tanya: 'Apakah kaosnya bisa menyusut setelah dicuci?',
    // ISI kalau supplier mengonfirmasi proses pre-shrunk
    jawab: [
      'Seperti kaos katun pada umumnya, ada kemungkinan sedikit menyusut saat pencucian pertama. Ikuti petunjuk perawatan di bawah dan pilih ukuran sesuai panduan ukuran supaya tetap pas.',
    ],
    kata: 'susut melar luntur cuci',
  },
  {
    kategori: 'bahan',
    tanya: 'Bagaimana cara merawat kaos supaya awet?',
    jawab: ['Supaya warna dan kelembutan kain bertahan lebih lama:'],
    poin: [
      'Cuci dengan air dingin atau suhu ruang, balik kaos sebelum dicuci',
      'Hindari pemutih dan deterjen yang terlalu keras',
      'Jemur di tempat teduh, hindari mesin pengering bersuhu tinggi',
      'Setrika dengan suhu sedang',
    ],
    kata: 'pencucian cuci setrika jemur perawatan',
  },
  {
    kategori: 'ukuran',
    tanya: 'Ukuran apa saja yang tersedia dan bagaimana potongannya?',
    jawab: [
      'Potongannya regular fit: tidak terlalu ketat dan tidak terlalu longgar. Tersedia ukuran XS, S, M, L, XL, 2XL, 3XL, 4XL, dan 5XL.',
      'Toleransi ukuran sekitar ±1–2 cm.',
    ],
    tautan: { teks: 'Lihat panduan ukuran', href: '/#panduan-ukuran' },
    kata: 'size chart regular fit xs xl 2xl 3xl 4xl 5xl ukuran',
  },
  {
    kategori: 'ukuran',
    tanya: 'Bagaimana kalau ukurannya tidak pas?',
    jawab: [
      'Hubungi kami lewat chat toko di Shopee terlebih dahulu, supaya kami bisa bantu cek ukuran dan stok.',
      'Untuk penukaran atau pengembalian, pengajuannya dilakukan lewat Shopee dan mengikuti ketentuan Shopee.',
    ],
    kata: 'kekecilan kebesaran tukar retur pengembalian',
  },
  {
    kategori: 'pemesanan',
    tanya: 'Bagaimana cara memesan?',
    jawab: [],
    poin: [
      'Pilih bahan 24s atau 30s, lalu klik tombol Shopee',
      'Di Shopee, pilih warna dan ukuran',
      'Lanjutkan checkout seperti biasa',
    ],
    kata: 'order beli pesan checkout cara',
  },
  {
    kategori: 'pemesanan',
    tanya: 'Kenapa pembeliannya lewat Shopee?',
    jawab: [
      'Semua pesanan diproses lewat Shopee: dari pembayaran, pengiriman, sampai pengembalian. Metode pembayaran dan pilihan ekspedisi mengikuti yang tersedia di Shopee saat checkout.',
      'Pembayaranmu ditahan oleh Shopee sampai pesananmu selesai.',
    ],
    kata: 'shopee pembayaran ekspedisi voucher ongkir',
  },
  {
    kategori: 'pengiriman',
    tanya: 'Berapa lama pengirimannya?',
    // ISI kalau mau menampilkan jam batas proses pesanan toko
    jawab: [
      'Estimasi tiba ditampilkan di halaman checkout Shopee, tergantung ekspedisi dan alamatmu.',
    ],
    kata: 'lama kirim estimasi ekspedisi resi',
  },
  {
    kategori: 'pengiriman',
    tanya: 'Bagaimana kalau barang cacat atau salah kirim?',
    jawab: [
      'Hubungi kami lewat chat toko di Shopee dan ceritakan masalahnya. Sebaiknya rekam video saat membuka paket sebagai bukti.',
      'Pengajuan pengembalian dilakukan lewat Shopee dan mengikuti ketentuan Shopee.',
    ],
    kata: 'cacat sobek salah warna salah ukuran retur klaim',
  },
];