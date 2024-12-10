// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Ambil data dari formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Format pesan
    const text = `Nama: ${name}\nno hp: ${email}\nPesan: ${message}`;
  
    // Gantilah <API_TOKEN> dan <CHAT_ID> dengan token bot dan chat ID Telegram Anda
    const botToken = '7872789935:AAEetVYQAwPfzuwB6NXjmKgYjKM0zT7DnEA';
    const chatId = '-4761466267';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
  
    // Kirim pesan ke Telegram menggunakan fetch
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          document.getElementById('responseMessage').textContent = 'Pesan berhasil dikirim!';
          document.getElementById('contactForm').reset();
        } else {
          document.getElementById('responseMessage').textContent = 'Terjadi kesalahan, coba lagi.';
        }
      })
      .catch(error => {
        document.getElementById('responseMessage').textContent = 'Terjadi kesalahan, coba lagi.';
        console.error('Error:', error);
      });
  });