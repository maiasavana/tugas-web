document.getElementById('loginForm').addEventListener('submit', function(event) {
  // Mencegah form dari reload halaman secara default
  event.preventDefault();

  // Ambil nilai input
  const usernameInput = document.getElementById('username').value.trim();
  const passwordInput = document.getElementById('password').value;

  // Ambil elemen penampung pesan error & sukses
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');

  // Reset semua pesan error dan sukses sebelum validasi
  usernameError.textContent = '';
  passwordError.textContent = '';
  successMessage.textContent = '';

  let isValid = true;

  // 1. Validasi Username (tidak boleh kosong)
  if (usernameInput === '') {
    usernameError.textContent = 'Username tidak boleh kosong';
    isValid = false;
  }

  // 2. Validasi Password (minimal 8 karakter)
  if (passwordInput.length < 8) {
    passwordError.textContent = 'Password minimal 8 karakter';
    isValid = false;
  }

  // 3. Jika semua validasi lolos
  if (isValid) {
    successMessage.textContent = 'Login berhasil!';
  }
});