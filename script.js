document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman untuk reload

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana (username: admin, password: 1234)
    if (username === 'admin' && password === 'Raditzto') {
        // Redirect ke halaman dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Username atau password salah!');
    }
});
