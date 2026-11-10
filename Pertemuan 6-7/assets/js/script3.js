const tombolDark = document.getElementById("btnDark");
tombolDark.addEventListener("click", function() {
// Toggle class "dark" pada <body>
document.body.classList.toggle("dark");
// Ubah teks tombol sesuai mode aktif
const isDark = document.body.classList.contains("dark");
tombolDark.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
console.log("Mode saat ini:", isDark ? "Dark" : "Light");
});