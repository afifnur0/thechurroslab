# 📖 Panduan Setup Sistem Order Otomatis - The Churros Lab

## 🎯 Fitur yang Akan Anda Dapatkan:
- ✅ Form order di website
- ✅ Data otomatis tersimpan di Google Sheets
- ✅ WhatsApp otomatis terkirim ke pelanggan
- ✅ Notifikasi ke owner (opsional)
- ✅ 100% GRATIS (kecuali WhatsApp API)

---

## 📋 Langkah 1: Setup Google Sheets

1. **Buka Google Sheets** di browser: https://sheets.google.com
2. **Buat spreadsheet baru** dengan nama: `The Churros Lab - Orders`
3. **Buat header** di baris pertama (A1 sampai I1):
   ```
   Timestamp | Nama Pelanggan | No. WhatsApp | Menu | Jumlah | Metode | Alamat | Catatan | Status
   ```
4. **Simpan URL Google Sheets** ini untuk nanti

---

## 📋 Langkah 2: Setup Google Apps Script

1. Di Google Sheets yang sudah dibuat, klik menu **Extensions** → **Apps Script**
2. **Hapus semua kode** yang ada di editor
3. **Copy semua kode** dari file `google-apps-script.js`
4. **Paste** ke Apps Script editor
5. **Simpan** dengan nama project: `Churros Lab Order System`
6. Klik **Deploy** → **New deployment**
7. Pilih type: **Web app**
8. Isi konfigurasi:
   - **Description:** Churros Lab Order API
   - **Execute as:** Me
   - **Who has access:** Anyone
9. Klik **Deploy**
10. **Copy URL deployment** yang muncul (contoh: `https://script.google.com/macros/s/AKfycbxxx.../exec`)
11. **SIMPAN URL INI** - akan dipakai di website

---

## 📋 Langkah 3: Daftar Fonnte (WhatsApp API)

### Opsi A: Fonnte (Rekomendasi - Indonesia)

1. **Daftar** di https://fonnte.com
2. **Verifikasi akun** via email
3. **Connect WhatsApp** Anda:
   - Scan QR Code dengan WhatsApp
   - Tunggu sampai status "Connected"
4. **Dapatkan API Key**:
   - Masuk ke dashboard
   - Klik menu **API**
   - Copy **Token/API Key** Anda
5. **Paste API Key** ke file `google-apps-script.js` baris 9:
   ```javascript
   const FONNTE_API_KEY = 'PASTE_API_KEY_DISINI';
   ```

**Harga Fonnte:**
- Paket Starter: Rp 50.000/bulan (500 pesan)
- Paket Basic: Rp 100.000/bulan (1500 pesan)
- Paket Pro: Rp 200.000/bulan (4000 pesan)

### Opsi B: Wablas (Alternatif)

1. Daftar di https://wablas.com
2. Ikuti langkah yang sama seperti Fonnte
3. Ganti kode di `google-apps-script.js` untuk Wablas API

---

## 📋 Langkah 4: Update Website

1. **Buka file** `index.html`
2. **Cari baris** sekitar line 2038 (bagian `// Create WhatsApp URL`)
3. **Ganti semua kode** dari baris 2007 sampai 2079 dengan kode baru yang sudah saya siapkan

**ATAU** saya bisa langsung update file `index.html` untuk Anda sekarang!

---

## 📋 Langkah 5: Update Apps Script dengan API Key

1. Kembali ke **Google Apps Script**
2. **Ganti** `FONNTE_API_KEY` dengan API key Anda
3. **Ganti** nomor owner di function `notifyOwner()` (baris 102)
4. **Simpan** (Ctrl+S)
5. **Deploy ulang**:
   - Klik **Deploy** → **Manage deployments**
   - Klik icon ⚙️ (gear) → **Edit**
   - Ubah **Version** ke "New version"
   - Klik **Deploy**

---

## 📋 Langkah 6: Test System

1. **Buka website** Anda
2. **Isi form order** dengan data test
3. **Submit form**
4. **Cek:**
   - ✅ Google Sheets: Data masuk?
   - ✅ WhatsApp pelanggan: Pesan terkirim?
   - ✅ WhatsApp owner: Notifikasi masuk? (jika aktifkan)

---

## 🔧 Troubleshooting

### ❌ Error: "Script function not found"
- Pastikan sudah deploy ulang setelah update kode
- Cek nama function di Apps Script

### ❌ WhatsApp tidak terkirim
- Cek API Key Fonnte sudah benar
- Cek saldo/kuota Fonnte masih ada
- Cek WhatsApp masih connected di Fonnte dashboard
- Cek format nomor: harus 62xxx (tanpa +)

### ❌ Data tidak masuk ke Google Sheets
- Cek URL deployment sudah benar di website
- Cek permission Apps Script: "Anyone" bisa akses
- Lihat log error di Apps Script: View → Logs

### ❌ CORS Error di browser
- Normal! Data tetap terkirim ke backend
- Bisa diabaikan atau tambahkan CORS handling di Apps Script

---

## 📊 Cara Lihat Data Pesanan

1. **Buka Google Sheets** yang sudah dibuat
2. Semua pesanan akan muncul otomatis dengan:
   - Timestamp
   - Data pelanggan lengkap
   - Status pesanan
3. Anda bisa:
   - Filter berdasarkan tanggal
   - Export ke Excel
   - Buat grafik/chart
   - Buat pivot table untuk analytics

---

## 💰 Estimasi Biaya

| Item | Biaya |
|------|-------|
| Google Sheets | **GRATIS** |
| Google Apps Script | **GRATIS** |
| Hosting Website | **GRATIS** (jika pakai Vercel/Netlify) |
| WhatsApp API (Fonnte) | Rp 50.000 - 200.000/bulan |
| **TOTAL** | **Rp 50.000 - 200.000/bulan** |

---

## 🚀 Fitur Tambahan (Opsional)

### 1. Notifikasi ke Owner
Uncomment baris di `google-apps-script.js`:
```javascript
// Tambahkan di function doPost, setelah sendWhatsApp:
notifyOwner(data);
```

### 2. Auto-reply dengan Gambar
Upgrade paket Fonnte dan tambahkan parameter `url` di API

### 3. Email Notification
Tambahkan `MailApp.sendEmail()` di Apps Script

### 4. Dashboard Analytics
Buat Google Data Studio connected ke Sheets

---

## 📞 Support

Jika ada masalah:
1. Cek **Logs** di Google Apps Script
2. Cek **Status** WhatsApp di Fonnte dashboard
3. Test API Fonnte via Postman/curl dulu

---

## ✅ Checklist Setup

- [ ] Google Sheets dibuat dengan header yang benar
- [ ] Google Apps Script sudah di-deploy
- [ ] URL deployment sudah dicopy
- [ ] Fonnte sudah daftar dan WhatsApp connected
- [ ] API Key Fonnte sudah di-paste ke script
- [ ] Website sudah diupdate dengan URL deployment
- [ ] Test order berhasil
- [ ] WhatsApp terkirim otomatis
- [ ] Data masuk ke Google Sheets

---

**Selamat! Sistem order otomatis Anda sudah siap! 🎉**
