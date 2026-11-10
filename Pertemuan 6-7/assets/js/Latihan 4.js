// Memastikan DOM telah selesai dimuat seluruhnya
document.addEventListener('DOMContentLoaded', () => {

    // --- SELEKSI ELEMEN DOM ---
    const registrationForm = document.getElementById('registration-form');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const charCounter = document.getElementById('char-counter');
    const alertBox = document.getElementById('alert-box');
    const titleText = document.getElementById('title-text');

    // --- EVENT HANDLING 1: Event 'keyup' pada Input Password ---
    passwordInput.addEventListener('keyup', () => {
        const passwordValue = passwordInput.value;
        const length = passwordValue.length;

        // Manipulasi DOM 1: Ubah Teks counter karakter
        charCounter.innerText = `Panjang password: ${length} karakter`;

        // Manipulasi DOM 2: Ubah Style warna teks indikator
        if (length === 0) {
            charCounter.style.color = '#777';
        } else if (length < 8) {
            charCounter.style.color = '#d9534f'; // Warna merah jika < 8
        } else {
            charCounter.style.color = '#5cb85c'; // Warna hijau jika >= 8
        }
    });

    // --- EVENT HANDLING 2: Event 'submit' pada Form ---
    registrationForm.addEventListener('submit', (event) => {
        // Mencegah form reload halaman secara default
        event.preventDefault();

        // Ambil nilai input dan hapus whitespace ekstra
        const nameVal = fullNameInput.value.trim();
        const emailVal = emailInput.value.trim();
        const passVal = passwordInput.value.trim();

        // RegEx untuk validasi alamat email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // --- LOGIKA VALIDASI FORM ---
        // 1. Validasi Nama Tidak Boleh Kosong
        if (nameVal === '') {
            showAlert('Nama lengkap tidak boleh kosong!', 'error');
            return;
        }

        // 2. Validasi Email Valid
        if (!emailRegex.test(emailVal)) {
            showAlert('Format email tidak valid!', 'error');
            return;
        }

        // 3. Validasi Password Minimal 8 Karakter
        if (passVal.length < 8) {
            showAlert('Password harus memiliki minimal 8 karakter!', 'error');
            return;
        }

        // --- JIKA SELURUH VALIDASI SUKSES ---
        // Manipulasi DOM: Ubah Judul & tampilkan notifikasi sukses
        titleText.innerText = `Selamat Datang, ${nameVal}!`;
        titleText.style.color = '#28a745';

        showAlert('Pendaftaran berhasil dilakukan!', 'success');

        // Reset isi form
        registrationForm.reset();
        charCounter.innerText = 'Panjang password: 0 karakter';
        charCounter.style.color = '#777';
    });

    /**
     * Helper Function: Menampilkan Alert Pesan
     * @param {string} message - Pesan yang ditampilkan
     * @param {string} type - 'error' atau 'success'
     */
    function showAlert(message, type) {
        // Manipulasi DOM Teks & Style Alert
        alertBox.innerText = message;
        alertBox.className = `alert ${type}`; // Mengubah class CSS
    }
});