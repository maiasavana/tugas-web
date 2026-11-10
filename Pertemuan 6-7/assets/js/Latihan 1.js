// 1. Buat array warna
const warna = ['white', 'lightblue', 'yellow'];

// 2. Simpan index warna aktif
let indexWarna = 0;

// Ambil elemen tombol dari DOM
const btnUbahWarna = document.getElementById('btnUbahWarna');

// Tambahkan event listener saat tombol diklik
btnUbahWarna.addEventListener('click', function() {
    // 3. Setiap klik, tambah index
    indexWarna = (indexWarna + 1) % warna.length;

    // 4. Terapkan warna ke background
    document.body.style.backgroundColor = warna[indexWarna];
});