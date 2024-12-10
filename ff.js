document.getElementById('topUpForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let diamond = document.getElementById('diamond').value;
    let payment = document.getElementById('payment').value;

    // Menampilkan pesan saat order sedang diproses
    document.getElementById('responseMessage').classList.remove('hidden');

    // Kirim data ke server untuk membuat transaksi Midtrans
    fetch('create_transaction.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            diamond: diamond,
            payment: payment
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Memanggil Midtrans Snap UI untuk pembayaran
            snap.pay(data.snap_token, {
                onSuccess: function(result) {
                    console.log('Payment Success:', result);
                    alert('Pembayaran berhasil!');
                    sendOrderToTelegram(username, diamond, payment, 'Success');
                },
                onPending: function(result) {
                    console.log('Payment Pending:', result);
                    alert('Pembayaran tertunda. Silakan cek status pembayaran.');
                    sendOrderToTelegram(username, diamond, payment, 'Pending');
                },
                onError: function(result) {
                    console.log('Payment Error:', result);
                    alert('Pembayaran gagal. Coba lagi!');
                    sendOrderToTelegram(username, diamond, payment, 'Failed');
                }
            });
        } else {
            alert('Gagal membuat transaksi!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
});

// Fungsi untuk mengirimkan notifikasi order ke Telegram
function sendOrderToTelegram(username, diamond, payment, status) {
    let botToken = '7872789935:AAEetVYQAwPfzuwB6NXjmKgYjKM0zT7DnEA'; // Ganti dengan token bot Anda
    let chatID = '-4761466267'; // Ganti dengan chat ID Anda

    let message = `Order baru diterima:\n`;
    message += `Nama Pengguna: ${username}\n`;
    message += `Jumlah Diamond: ${diamond}\n`;
    message += `Metode Pembayaran: ${payment}\n`;
    message += `Status Pembayaran: ${status}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${encodeURIComponent(message)}`)
        .then(response => response.json())
        .then(data => {
            console.log('Telegram Response:', data);
        })
        .catch(error => {
            console.error('Error sending to Telegram:', error);
        });
}
