// ============================================
// GOOGLE APPS SCRIPT - The Churros Lab
// ============================================
// File ini untuk di-paste ke Google Apps Script
// Tutorial lengkap ada di file SETUP-GUIDE.md

// KONFIGURASI - GANTI DENGAN API KEY ANDA
const FONNTE_API_KEY = 'GANTI_DENGAN_API_KEY_FONNTE_ANDA'; // Dapatkan di https://fonnte.com

// Function untuk menerima data dari form website
function doPost(e) {
  try {
    // Parse data dari form
    const data = JSON.parse(e.postData.contents);
    
    // Ambil Google Sheet aktif
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Format nomor WhatsApp
    let phoneNumber = data.phoneNumber.trim();
    if (phoneNumber.startsWith('0')) {
      phoneNumber = '62' + phoneNumber.substring(1);
    } else if (!phoneNumber.startsWith('62')) {
      phoneNumber = '62' + phoneNumber;
    }
    
    // Simpan data ke Google Sheet
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.customerName,
      phoneNumber,
      data.menuItem,
      data.quantity,
      data.deliveryMethod,
      data.address || '-',
      data.notes || '-',
      'Pending' // Status
    ]);
    
    // Kirim WhatsApp otomatis ke pelanggan
    const message = createCustomerMessage(data);
    const whatsappResult = sendWhatsApp(phoneNumber, message);
    
    // Return response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Pesanan berhasil disimpan dan WhatsApp terkirim!',
      whatsappStatus: whatsappResult
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'Terjadi kesalahan: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Function untuk test (bisa dihapus setelah berhasil)
function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script berjalan dengan baik!');
}

// Function untuk membuat pesan ke pelanggan
function createCustomerMessage(data) {
  let message = `Halo *${data.customerName}*! 👋\n\n`;
  message += `Terima kasih sudah memesan di *The Churros Lab*! 🍩✨\n\n`;
  message += `📋 *Detail Pesanan Anda:*\n`;
  message += `━━━━━━━━━━━━━━━━\n`;
  message += `🍩 Menu: ${data.menuItem}\n`;
  message += `📦 Jumlah: ${data.quantity}\n`;
  message += `🚚 Metode: ${data.deliveryMethod}\n`;
  
  if (data.address && data.address.trim()) {
    message += `📍 Alamat: ${data.address}\n`;
  }
  
  if (data.notes && data.notes.trim()) {
    message += `📝 Catatan: ${data.notes}\n`;
  }
  
  message += `━━━━━━━━━━━━━━━━\n\n`;
  message += `⏳ Pesanan Anda sedang kami proses.\n`;
  message += `Tim kami akan segera menghubungi Anda untuk konfirmasi pembayaran dan pengiriman.\n\n`;
  message += `Terima kasih! 🙏\n`;
  message += `*The Churros Lab Team*`;
  
  return message;
}

// Function untuk kirim WhatsApp via Fonnte API
function sendWhatsApp(phoneNumber, message) {
  try {
    const url = 'https://api.fonnte.com/send';
    
    const payload = {
      'target': phoneNumber,
      'message': message,
      'countryCode': '62'
    };
    
    const options = {
      'method': 'post',
      'headers': {
        'Authorization': FONNTE_API_KEY
      },
      'payload': payload,
      'muteHttpExceptions': true
    };
    
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    
    Logger.log('WhatsApp Response: ' + JSON.stringify(result));
    
    return result;
    
  } catch (error) {
    Logger.log('Error sending WhatsApp: ' + error.toString());
    return { success: false, error: error.toString() };
  }
}

// Function untuk kirim notifikasi ke owner (opsional)
function notifyOwner(data) {
  const ownerPhone = '6285173264426'; // Ganti dengan nomor owner
  
  let message = `🎉 *PESANAN BARU - The Churros Lab* 🎉\n\n`;
  message += `👤 *Nama:* ${data.customerName}\n`;
  message += `📱 *No. WhatsApp:* ${data.phoneNumber}\n`;
  message += `🍩 *Menu:* ${data.menuItem}\n`;
  message += `📦 *Jumlah:* ${data.quantity}\n`;
  message += `🚚 *Metode:* ${data.deliveryMethod}\n`;
  
  if (data.address && data.address.trim()) {
    message += `📍 *Alamat:* ${data.address}\n`;
  }
  
  if (data.notes && data.notes.trim()) {
    message += `📝 *Catatan:* ${data.notes}\n`;
  }
  
  message += `\n⏰ *Waktu Order:* ${new Date().toLocaleString('id-ID')}\n`;
  message += `\n_Cek Google Sheet untuk detail lengkap_`;
  
  sendWhatsApp(ownerPhone, message);
}
