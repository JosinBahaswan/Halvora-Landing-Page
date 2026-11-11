# Halvora Landing Page

Astro + Tailwind CSS v4. Halaman statis, checkout lewat Shopee.

## Jalankan
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Yang sering diubah
- `src/data/produk.ts` : link Shopee, produk, harga (opsional), tabel ukuran
- `src/styles/global.css` : warna brand (dari Stich/DESIGN.md)
- `src/assets/` : gambar produk (dioptimalkan otomatis saat build)

## Deploy
Vercel / Netlify / Cloudflare Pages: build command `npm run build`, output `dist`.
Setelah punya domain, isi `site` di `astro.config.mjs` agar canonical & og:image memakai URL penuh.
