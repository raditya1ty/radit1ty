// Fungsi untuk membuka sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main-content").style.marginLeft = "250px";
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
}

// Mengambil elemen audio dari HTML
const audio = document.getElementById("audio");

// Fungsi untuk memainkan audio
function playAudio() {
    audio.play();
}

// Fungsi untuk menghentikan (pause) audio
function pauseAudio() {
    audio.pause();
}

