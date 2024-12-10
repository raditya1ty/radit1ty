function tambahProduk(idProduk) {
    // Kode untuk menambahkan produk ke keranjang
    console.log("Produk dengan ID " + idProduk + " ditambahkan ke keranjang");
   }
   
   // Contoh fungsi hapus produk dari keranjang
   function hapusProduk(idProduk) {
    // Kode untuk menghapus produk dari keranjang
    console.log("Produk dengan ID " + idProduk + " dihapus dari keranjang");
   }
   
   document.querySelector('.tombol-gambar').addEventListener('click', function() {
    alert('Tombol diklik!');
  });
  
  
 
  function tampilanLain() {
    const tampilan = document.getElementById('tampilan-lain');
    tampilan.classList.add('tampil');
    setTimeout(() => {
      tampilan.classList.remove('tampil');
    }, 3000);
  }
  
  // Menambahkan event listener pada tombol
  document.querySelector('.tombol-gambar').addEventListener('click', tampilanLain);
  

  let gambar = document.querySelectorAll('.slider img');
let indeks = 0;

function tampilkanGambar() {
  gambar[indeks].classList.remove('gambar-aktif');
  indeks = (indeks + 1) % gambar.length;
  gambar[indeks].classList.add('gambar-aktif');
}

setInterval(tampilkanGambar, 3000);




// script.js

// Menambahkan event listener untuk mengubah kecepatan scroll teks
const scrollingText = document.querySelector('.scrolling-text');

// Mengubah durasi animasi ketika tombol diklik
function changeSpeed(newSpeed) {
  scrollingText.style.animationDuration = newSpeed + 's';
}

// Contoh penggunaan: Mengubah kecepatan scroll menjadi lebih cepat
changeSpeed(5);  // Menjadikan teks berjalan lebih cepat dalam 5 detik




// script.js
document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
});






// script.js
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const progress = document.getElementById('progress');

// Event listener untuk tombol play
playBtn.addEventListener('click', () => {
  audioPlayer.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

// Event listener untuk tombol pause
pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
});

// Update progress bar ketika audio diputar
audioPlayer.addEventListener('timeupdate', () => {
  const progressValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.value = progressValue;
});

// Update posisi audio saat user mengubah progress bar
progress.addEventListener('input', () => {
  const seekTime = (progress.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTime;
});












