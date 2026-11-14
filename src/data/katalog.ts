import hitam24 from '../assets/kaos-hitam-24s.png';
import abu24 from '../assets/kaos-abu-24s.png';
import putih24 from '../assets/kaos-putih-24s.png';
import hitam30 from '../assets/kaos-hitam-30s.png';
import abu30 from '../assets/kaos-abu-30s.png';
import putih30 from '../assets/kaos-putih-30s.png';
import { SHOPEE_24S, SHOPEE_30S } from './produk';

// Daftar warna. Warna baru cukup ditambah di sini.
export const warna = {
  hitam: { nama: 'Hitam solid', hex: '#1A1A1A' },
  abu: { nama: 'Abu tua', hex: '#4A4D52' },
  putih: { nama: 'Putih bersih', hex: '#FDFDFD' },
} satisfies Record<string, { nama: string; hex: string }>;
export type WarnaId = keyof typeof warna;

// Daftar kategori. Kategori baru cukup ditambah di sini.
export const kategori = {
  kaos: 'Kaos',
  kemeja: 'Kemeja',
  jaket: 'Jaket',
  sweater: 'Sweater',
  celana: 'Celana',
} as const;
export type KategoriId = keyof typeof kategori;

export interface Varian {
  warna: WarnaId;
  gambar: ImageMetadata; // foto produk untuk warna ini
}

export interface Produk {
  id: string;
  nama: string;
  kategori: KategoriId;
  bahan: string;
  potongan: string;
  ukuran: string;
  deskripsi: string;
  varian: Varian[]; // varian pertama tampil lebih dulu
  link: string; // link produk di Shopee
  harga?: string; // opsional, contoh: 'Rp 69.000'
}

export const produk: Produk[] = [
  {
    id: 'kaos-polos-24s',
    nama: 'Kaos Polos O-Neck 24s',
    kategori: 'kaos',
    bahan: 'Cotton Combed 24s',
    potongan: 'regular fit',
    ukuran: 'XS sampai 5XL',
    deskripsi: 'Lebih tebal dan berstruktur, jatuh rapi di badan.',
    varian: [
      { warna: 'hitam', gambar: hitam24 },
      { warna: 'abu', gambar: abu24 },
      { warna: 'putih', gambar: putih24 },
    ],
    link: SHOPEE_24S,
  },
  {
    id: 'kaos-polos-30s',
    nama: 'Kaos Polos O-Neck 30s',
    kategori: 'kaos',
    bahan: 'Cotton Combed 30s',
    potongan: 'regular fit',
    ukuran: 'XS sampai 5XL',
    deskripsi: 'Lebih ringan dan sejuk, nyaman untuk cuaca hangat.',
    varian: [
      { warna: 'hitam', gambar: hitam30 },
      { warna: 'abu', gambar: abu30 },
      { warna: 'putih', gambar: putih30 },
    ],
    link: SHOPEE_30S,
  },
];

// Kategori yang sedang disiapkan. Kosongkan ([]) kalau tidak mau ditampilkan.
export const segera: string[] = ['Kemeja', 'Jaket', 'Sweater', 'Celana'];