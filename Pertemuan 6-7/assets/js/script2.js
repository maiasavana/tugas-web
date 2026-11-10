function validasiForm() {
// Ambil nilai dari form
let nama = document.getElementById("nama").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
// Reset pesan error
document.getElementById("errorNama").textContent = "";
document.getElementById("errorEmail").textContent = "";
document.getElementById("errorPassword").textContent = "";
let valid = true;
// Validasi Nama
if (nama === "") {
document.getElementById("errorNama").textContent
= "* Nama harus diisi";
valid = false;
}
// Validasi Email (cek format dengan regex)
const formatEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (email === "") {
document.getElementById("errorEmail").textContent
= "* Email harus diisi";
valid = false;
} else if (!formatEmail.test(email)) {
document.getElementById("errorEmail").textContent
= "* Format email tidak valid";
valid = false;
}
// Validasi Password
if (password.length < 8) {
document.getElementById("errorPassword").textContent
= "* Password minimal 8 karakter";
valid = false;
}
if (valid) {
alert("Pendaftaran berhasil! Selamat datang, " + nama);
}
return valid;
}