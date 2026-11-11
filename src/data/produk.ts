import hitam24 from '../assets/kaos-hitam-24s.png';
import abu24 from '../assets/kaos-abu-24s.png';
import putih24 from '../assets/kaos-putih-24s.png';
import hitam30 from '../assets/kaos-hitam-30s.png';
import abu30 from '../assets/kaos-abu-30s.png';
import putih30 from '../assets/kaos-putih-30s.png';

export const SHOPEE_24S = 'https://s.shopee.co.id/9pflv9y7V9';
export const SHOPEE_30S = 'https://s.shopee.co.id/5LDMYxk5C8';

export type Bahan = '24s' | '30s';

export interface Produk {
  bahan: Bahan;
  warna: string;
  swatch: string; // kelas Tailwind
  nama: string;
  deskripsi: string;
  gambar: ImageMetadata;
  link: string;
  // Isi harga kalau mau ditampilkan, mis. 'Rp 69.000'. Kosong = tombol saja.
  harga?: string;
}

export const produk: Produk[] = [
  { bahan: '24s', warna: 'Hitam Solid', swatch: 'bg-swatch-black', nama: 'Kaos Polos 24s — Hitam', deskripsi: 'Lebih tebal dan berstruktur, jatuh rapi di badan.', gambar: hitam24, link: SHOPEE_24S },
  { bahan: '24s', warna: 'Abu Tua', swatch: 'bg-swatch-charcoal', nama: 'Kaos Polos 24s — Abu Tua', deskripsi: 'Warna netral yang kalem dan mudah dipadukan.', gambar: abu24, link: SHOPEE_24S },
  { bahan: '24s', warna: 'Putih Bersih', swatch: 'bg-swatch-white', nama: 'Kaos Polos 24s — Putih', deskripsi: 'Putih bersih untuk harian, kerja santai, atau layering.', gambar: putih24, link: SHOPEE_24S },
  { bahan: '30s', warna: 'Hitam Solid', swatch: 'bg-swatch-black', nama: 'Kaos Polos 30s — Hitam', deskripsi: 'Lebih ringan dan adem, nyaman untuk cuaca hangat.', gambar: hitam30, link: SHOPEE_30S },
  { bahan: '30s', warna: 'Abu Tua', swatch: 'bg-swatch-charcoal', nama: 'Kaos Polos 30s — Abu Tua', deskripsi: 'Ringan dan breathable untuk aktivitas seharian.', gambar: abu30, link: SHOPEE_30S },
  { bahan: '30s', warna: 'Putih Bersih', swatch: 'bg-swatch-white', nama: 'Kaos Polos 30s — Putih', deskripsi: 'Tipis dan sejuk, sirkulasi udara lebih lega.', gambar: putih30, link: SHOPEE_30S },
];

// PERIKSA: angka ukuran ini berasal dari desain Stitch, cocokkan dengan size chart supplier.
export const ukuran = [
  { size: 'XS', dada: 45, panjang: 65, lengan: 19, berat: '40 - 48 kg', tinggi: '150 - 160 cm' },
  { size: 'S', dada: 48, panjang: 68, lengan: 20, berat: '48 - 56 kg', tinggi: '158 - 165 cm' },
  { size: 'M', dada: 50, panjang: 70, lengan: 21, berat: '56 - 65 kg', tinggi: '165 - 172 cm' },
  { size: 'L', dada: 53, panjang: 72, lengan: 22, berat: '65 - 75 kg', tinggi: '170 - 178 cm' },
  { size: 'XL', dada: 56, panjang: 74, lengan: 23, berat: '75 - 85 kg', tinggi: '175 - 182 cm' },
  { size: '2XL', dada: 59, panjang: 76, lengan: 24, berat: '85 - 95 kg', tinggi: '175 - 185 cm' },
  { size: '3XL', dada: 62, panjang: 78, lengan: 25, berat: '95 - 105 kg', tinggi: '175 - 190 cm' },
  { size: '4XL', dada: 65, panjang: 80, lengan: 26, berat: '105 - 118 kg', tinggi: '175 - 190 cm' },
  { size: '5XL', dada: 68, panjang: 82, lengan: 27, berat: '118 - 130 kg', tinggi: '175 - 192 cm' },
];
