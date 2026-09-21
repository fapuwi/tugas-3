//1. Ambil elemen HTML yang dibutuhkan dan di simpan di variabel
const btntema = document.querySelector ('#btnTogleTema');
const bodyHalaman =document.querySelector('body');

//2. Beri perintah saat tombol diklik (Event listener)
btntema.addEventListener('click', function() {
    //togle akan menambahclass 'light-mode' jika belum ada,
    // dan menghapusnya jika sudah ada
    bodyHalaman.classList.toggle('light-mode'); 

    //Opsi tambahan: Ubah teks ikon di dalam tombol
    if (bodyHalaman.classList.contains('light-mode')) {
        btntema.textContent = '🌙 Mode Gelap';
    } else {
        btntema.textContent = '☀️ Mode Terang';
    }
});    

//Pastikatombol 'Kirim Pesan' di HTML mu punya id="btnKontak"ya!
//Jika belum,tambahkan id="btnKontak" di HTMLtag <a> pada btn-contact.
const btnBukaModal = document.querySelector('#btnKontak')
const elemenModal = document.querySelector('#modalKontak')
const btnTutupModal = document.querySelector('#btnTutupModal');

//Event saat tombol Kirim Pesan ditekan
btnBukaModal.addEventListener('click', function(Event) {
    Event.preventDefault(); //Mencegah link pindah halaman
    elemenModal.classList.add('show'); //Tambahkan class.show
});

//Event saat tombol Tutup diekan
btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show'); //Hapus class .show
});

alert("Message Sent!");
let username ="David";
let age =17;
