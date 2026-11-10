// Mengambil elemen-elemen DOM berdasarkan ID
const formNama = document.getElementById('formNama');
const namaInput = document.getElementById('namaInput');
const hasilDiv = document.getElementById('hasil');

// Menambahkan event listener untuk penanganan tombol/form submit
formNama.addEventListener('submit', function(event) {
    // Mencegah form melakukan refresh halaman (default behavior)
    event.preventDefault();

    // Mengambil nilai input nama dan menghapus spasi di awal/akhir
    const nama = namaInput.value.trim();

    // Manipulasi DOM: Mengubah isi teks pada elemen #hasil
    if (nama !== '') {
        hasilDiv.textContent = `Halo, ${nama}!`;
    }
});