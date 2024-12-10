// script.js
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form melakukan submit secara default

    // Ambil data dari formulir
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;

    // Siapkan pesan yang akan dikirim ke Telegram
    const message = `
        Pesanan Baru:
        Nama: ${name}
        Produk: ${product}
        Jumlah: ${quantity}
        No whatsapp: ${address}
    `;

    // URL API Telegram untuk mengirim pesan
    const token = '7793927120:AAG42NY2JC_LFf0oXM_Nbk7Tv7K2MBOidmA'; // Ganti dengan token bot Telegram Anda
    const chatId = '-4761466267'; // Ganti dengan chat ID Anda
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    // Kirim pesan ke bot Telegram
    fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('responseMessage').innerText = 'Pesanan Anda berhasil dikirim!';
        } else {
            document.getElementById('responseMessage').innerText = 'Terjadi kesalahan. Silakan coba lagi.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Terjadi kesalahan. Silakan coba lagi.';
    });

    // Reset form setelah pengiriman
    document.getElementById('orderForm').reset();
});
