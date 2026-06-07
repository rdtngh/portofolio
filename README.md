# Personal Portfolio Website

## Deskripsi Project

Project ini adalah website portofolio pribadi yang dibuat menggunakan HTML, CSS, dan JavaScript murni tanpa framework. Website menampilkan profil, kemampuan teknis, project, pengalaman, dan kontak. Tujuan utama adalah membuat portofolio yang lebih profesional dan siap untuk fase deployment.

## Tujuan Project

- Membuat website portofolio pribadi yang dapat diakses oleh orang lain
- Mempelajari dasar HTML, CSS, dan JavaScript dengan struktur yang lebih rapi
- Memahami struktur website statis untuk kebutuhan deployment
- Menyiapkan project agar siap di-deploy ke layanan hosting
- Menjadi dokumentasi project pribadi yang mudah dikembangkan

## Fitur Website

- Hero section dengan foto profil
- Navbar sticky dan responsive
- About section profesional dengan highlight
- Skills section dalam bentuk badge
- Projects section dengan card lebih informatif
- Experience section untuk riwayat project akademik
- Contact section yang jelas dan mudah dibaca
- Smooth scrolling antar section
- Responsive design untuk desktop, tablet, dan mobile
- Dark mode sederhana dengan preferensi pengguna
- Animasi ringan saat scroll

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Struktur Folder

```
portfolio/
├── assets/
│   ├── cv/
│   │   └── CV_Raditya_Alrasyid_Nugroho.pdf
│   └── images/
│       ├── profile.jpg
│       ├── foodsaver.png
│       ├── stress-system.png
│       ├── diabetes-analysis.png
│       └── tap-id.png
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` untuk struktur utama halaman dan konten.
- `style.css` untuk tampilan, layout, warna, responsif, dan tema.
- `script.js` untuk interaksi seperti smooth scrolling, dark mode, dan menu mobile.
- `README.md` untuk dokumentasi project.

## Penjelasan Tiap Section Website

- Home: Hero section dengan foto profil, nama, deskripsi, dan tombol aksi.
- About: Profil singkat dan highlight kemampuan.
- Skills: Daftar skill dalam bentuk badge.
- Projects: Kartu project dengan gambar, deskripsi, badge teknologi, dan tombol GitHub/Demo.
- Experience: Ringkasan project akademik dalam bentuk card.
- Contact: Informasi kontak dengan format yang rapi.

## Daftar Project yang Ditampilkan

1. FoodSaver
   - Aplikasi mobile untuk membantu pengguna mencatat bahan makanan, memantau tanggal kedaluwarsa, dan mengurangi risiko makanan terbuang.
   - Teknologi: Kotlin, Compose Multiplatform, Mobile App
2. Sistem Prediksi Stres Mahasiswa
   - Sistem berbasis Neuro-Fuzzy/ANFIS untuk memprediksi tingkat stres mahasiswa berdasarkan beberapa faktor input dan menampilkan hasil melalui antarmuka Streamlit.
   - Teknologi: Python, Streamlit, ANFIS, Fuzzy Logic
3. Analisis Risiko Diabetes
   - Project data mining untuk menganalisis pengaruh preprocessing data terhadap hasil klasifikasi risiko diabetes.
   - Teknologi: Python, Data Mining, Preprocessing, Classification
4. TAP-ID
   - Konsep platform kartu nama digital berbasis NFC yang terintegrasi dengan dashboard real-time untuk kebutuhan smart networking profesional.
   - Teknologi: Web Concept, NFC, Dashboard, Business Technology
5. Tokokita Testing Project
   - Project pengujian perangkat lunak pada aplikasi toko sederhana yang mencakup unit testing, UI testing, API testing, dan performance testing.
   - Teknologi: Python, Pytest, Selenium, Flask API, Locust

## Cara Menjalankan Project Secara Lokal

1. Clone repository
2. Masuk ke folder project
3. Buka file `index.html` di browser
4. Atau gunakan Live Server di Visual Studio Code

Contoh perintah:

```bash
git clone <link-repository>
cd portfolio
```

## Cara Mengganti Foto Profil

1. Simpan foto baru di `assets/images/profile.jpg`.
2. Pastikan nama file sama dengan `profile.jpg`.
3. Refresh browser untuk melihat perubahan.

## Cara Mengganti CV

1. Ganti file `assets/cv/CV_Raditya_Alrasyid_Nugroho.pdf` dengan versi CV terbaru.
2. Pastikan nama file tetap sama agar tombol Download CV berfungsi.

## Cara Mengganti Link GitHub/Demo Project

1. Buka file `index.html`.
2. Temukan bagian project yang ingin diedit.
3. Ganti nilai `href` pada tombol GitHub atau Demo dengan URL yang benar.

## Rencana Deployment

Project ini sudah disiapkan agar dapat di-deploy ke layanan berikut:

- GitHub Pages
- Vercel
- Netlify

## Rencana Pengembangan Berikutnya

- Menambahkan foto profil asli
- Menambahkan tombol download CV dengan file asli
- Menghubungkan project dengan link GitHub dan demo nyata
- Menambahkan animasi sederhana yang lebih kaya
- Membuat mode gelap/terang yang lebih lengkap
- Memperbaiki tampilan mobile dan tablet
- Menyiapkan deployment di GitHub Pages atau Vercel

## Identitas Pembuat

- Nama: Raditya Alrasyid Nugroho
- Status: Mahasiswa Informatika ITERA
- Minat: Web Development, Mobile Development, Data Mining, Software Testing, dan Artificial Intelligence

## Status Project

Saat ini website berada pada fase kedua pengembangan: memperbaiki tampilan, menambahkan section baru, meningkatkan responsif, dan menyiapkan struktur agar lebih siap untuk deployment.
