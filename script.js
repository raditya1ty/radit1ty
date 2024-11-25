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