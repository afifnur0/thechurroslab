# 🍩 The Churros Lab - Sistem Order Otomatis

## 🎯 Fitur Utama

✅ **Form Order di Website** - Pelanggan isi form langsung di website  
✅ **WhatsApp Otomatis** - Sistem langsung kirim konfirmasi ke pelanggan  
✅ **Database Google Sheets** - Semua pesanan tersimpan otomatis  
✅ **Notifikasi Owner** - Owner dapat notifikasi setiap ada pesanan baru  
✅ **100% Gratis** - Kecuali biaya WhatsApp API (mulai Rp 50rb/bulan)

---

## 📁 File-file Penting

| File | Deskripsi |
|------|-----------|
| `index.html` | Website utama dengan form order |
| `google-apps-script.js` | Backend script untuk Google Apps Script |
| `SETUP-GUIDE.md` | **Panduan lengkap setup sistem** ⭐ |
| `README-ORDER-SYSTEM.md` | File ini (overview) |

---

## 🚀 Quick Start

### 1️⃣ Baca Panduan Setup
Buka file **`SETUP-GUIDE.md`** dan ikuti langkah demi langkah.

### 2️⃣ Yang Perlu Disiapkan
- [ ] Akun Google (untuk Google Sheets & Apps Script)
- [ ] Akun Fonnte (untuk WhatsApp API) - https://fonnte.com
- [ ] 15-30 menit waktu setup

### 3️⃣ Langkah Singkat
1. Buat Google Sheets
2. Deploy Google Apps Script
3. Daftar Fonnte & dapatkan API Key
4. Update `index.html` dengan URL Google Script
5. Test & Go Live! 🎉

---

## 💰 Biaya

| Item | Harga |
|------|-------|
| Google Sheets | **GRATIS** ✅ |
| Google Apps Script | **GRATIS** ✅ |
| Website Hosting | **GRATIS** ✅ (Vercel/Netlify) |
| WhatsApp API (Fonnte) | Rp 50.000/bulan 💵 |
| **TOTAL** | **Rp 50.000/bulan** |

**Paket Fonnte:**
- Starter: Rp 50.000 (500 pesan/bulan)
- Basic: Rp 100.000 (1500 pesan/bulan)
- Pro: Rp 200.000 (4000 pesan/bulan)

---

## 🔄 Alur Kerja Sistem

```
┌─────────────────┐
│  Pelanggan isi  │
│  form di web    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Data dikirim   │
│  ke Google      │
│  Apps Script    │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│  Simpan ke      │  │  Kirim WhatsApp │
│  Google Sheets  │  │  ke Pelanggan   │
└─────────────────┘  └─────────────────┘
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│  Owner bisa     │  │  Pelanggan      │
│  lihat data     │  │  terima pesan   │
│  di Sheets      │  │  konfirmasi     │
└─────────────────┘  └─────────────────┘
```

---

## 📱 Contoh Pesan WhatsApp yang Dikirim

```
Halo *John Doe*! 👋

Terima kasih sudah memesan di *The Churros Lab*! 🍩✨

📋 *Detail Pesanan Anda:*
━━━━━━━━━━━━━━━━
🍩 Menu: Classic Gold - Rp 35.000
📦 Jumlah: 2
🚚 Metode: Delivery
📍 Alamat: Jl. Contoh No. 123, Jakarta
━━━━━━━━━━━━━━━━

⏳ Pesanan Anda sedang kami proses.
Tim kami akan segera menghubungi Anda untuk konfirmasi pembayaran dan pengiriman.

Terima kasih! 🙏
*The Churros Lab Team*
```

---

## 📊 Data yang Tersimpan di Google Sheets

| Kolom | Contoh Data |
|-------|-------------|
| Timestamp | 04/11/2025 12:45:30 |
| Nama Pelanggan | John Doe |
| No. WhatsApp | 628123456789 |
| Menu | Classic Gold - Rp 35.000 |
| Jumlah | 2 |
| Metode | Delivery |
| Alamat | Jl. Contoh No. 123 |
| Catatan | Tolong tambah saus ekstra |
| Status | Pending |

---

## 🔧 Konfigurasi yang Perlu Diganti

### Di file `google-apps-script.js`:
```javascript
// Baris 9: Ganti dengan API Key Fonnte Anda
const FONNTE_API_KEY = 'GANTI_DENGAN_API_KEY_FONNTE_ANDA';

// Baris 102: Ganti dengan nomor WhatsApp owner
const ownerPhone = '6285173264426';
```

### Di file `index.html`:
```javascript
// Baris 1988: Ganti dengan URL Google Apps Script Anda
const GOOGLE_SCRIPT_URL = 'GANTI_DENGAN_URL_GOOGLE_APPS_SCRIPT_ANDA';
```

---

## ❓ FAQ

### Q: Apakah bisa pakai WhatsApp Business?
**A:** Ya! Fonnte support WhatsApp Business dan WhatsApp biasa.

### Q: Berapa lama setup?
**A:** 15-30 menit jika ikuti panduan dengan benar.

### Q: Apakah data aman?
**A:** Ya, data tersimpan di Google Sheets pribadi Anda. Hanya Anda yang bisa akses.

### Q: Bisa custom pesan WhatsApp?
**A:** Bisa! Edit function `createCustomerMessage()` di `google-apps-script.js`

### Q: Bisa kirim gambar di WhatsApp?
**A:** Bisa! Upgrade paket Fonnte dan tambahkan parameter `url` di API.

### Q: Bisa export data ke Excel?
**A:** Bisa! Google Sheets bisa export ke Excel (.xlsx) kapan saja.

---

## 📞 Support

Jika ada pertanyaan atau masalah:

1. **Baca SETUP-GUIDE.md** terlebih dahulu
2. **Cek Logs** di Google Apps Script (View → Logs)
3. **Test API Fonnte** via dashboard mereka
4. **Cek Status WhatsApp** di Fonnte dashboard

---

## 🎉 Selamat Mencoba!

Sistem ini sudah digunakan oleh banyak bisnis kecil dan menengah di Indonesia.  
Simple, murah, dan efektif! 

**Happy Selling! 🍩✨**

---

*Last updated: November 2025*
