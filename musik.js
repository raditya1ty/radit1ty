function loadVideo() {
    const url = document.getElementById('youtubeUrl').value;
    const videoContainer = document.getElementById('videoContainer');
  
    // Validasi URL YouTube
    const youtubeRegex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+|(?:v|e(?:mbed)?)\/(\S+))|(?:youtu\.be\/(\S+)))/;
  
    if (youtubeRegex.test(url)) {
      const videoId = url.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      
      if (videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId[1]}?autoplay=1`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;  // Menambahkan dukungan fullscreen
        iframe.title = "YouTube Video";
  
        // Bersihkan kontainer video sebelum menambahkan iframe baru
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
      } else {
        alert("Tidak dapat mengambil ID video dari URL yang diberikan.");
      }
    } else {
      alert("Masukkan URL YouTube yang valid.");
    }
  }
  






  function loadContent() {
    const url = document.getElementById('contentUrl').value;
    const contentContainer = document.getElementById('contentContainer');
  
    // Validasi URL
    const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
  
    if (urlRegex.test(url)) {
      // Jika URL adalah gambar (misalnya URL gambar PNG, JPG, GIF, dsb.)
      if (url.match(/\.(jpeg|jpg|gif|png)$/)) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Gambar yang dimuat";
        
        // Bersihkan kontainer konten sebelum menambahkan gambar baru
        contentContainer.innerHTML = '';
        contentContainer.appendChild(img);
      }
      // Jika URL adalah halaman YouTube (atau tipe lainnya)
      else if (url.match(/youtu\.be|youtube\.com/)) {
        contentContainer.innerHTML = "<p>Ini adalah video YouTube. Masukkan URL video yang sesuai untuk memutar video.</p>";
      }
      // URL tidak dikenali, tampilkan pesan default
      else {
        contentContainer.innerHTML = `<p>Konten tidak dapat ditemukan untuk URL: ${url}</p>`;
      }
    } else {
      alert("Masukkan URL yang valid.");
    }
  }
  