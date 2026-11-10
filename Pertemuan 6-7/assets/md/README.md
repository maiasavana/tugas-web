# Tugas Pemrograman Web - Form Interaktif

Aplikasi web sederhana berupa formulir pendaftaran interaktif yang dibangun menggunakan HTML, CSS, dan JavaScript murni.

## Fitur Utama

1. **Validasi Form**:
   - **Nama**: Memastikan bidang nama tidak kosong.
   - **Email**: Memastikan format email valid menggunakan Regular Expression (Regex).
   - **Password**: Memastikan panjang password minimal 8 karakter.

2. **Event Handling**:
   - **`keyup`**: Menghitung dan menampilkan jumlah karakter password secara real-time saat pengguna mengetik.
   - **`submit`**: Memproses data formulir dan mencegah *page reload*.

3. **Manipulasi DOM**:
   - **Ubah Teks**: Mengubah teks *counter* panjang password dan mengganti judul utama saat registrasi berhasil.
   - **Ubah Style**: Mengubah warna indikator teks password (merah jika < 8 karakter, hijau jika ≥ 8 karakter) serta menampilkan *alert box* sesuai status error/sukses.