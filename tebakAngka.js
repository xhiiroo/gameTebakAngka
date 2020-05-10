// Setting nama variable
var p, cpu;
var start = 'Masukkan angka dari 1-10';
var error = 'Mohon hanya memasukkan angka 1-10 saja! \nkesempatanmu tinggal ';
var tooHigh = 'Terlalu Tinggi! Ayo kesempatanmu tinggal ';
var tooLow = 'Terlalu Rendah! Ayo kesempatanmu tinggal ';
var win = 'Benar! :D Angka yang dicari adalah ';
var lose = 'Maaf anda gagal :( \nNilai yang dicari adalah ';
var finish = 'Thanks for playing :) \nRefresh halaman ini untuk kembali bermain';

// Menangkap pilihan program/CPU
cpu = Math.floor(Math.random() * 11); // <-- Library JS untuk membangkitkan bilangan random

// Game dimulai
var chance = 3;
var salah = 1;
var sisa = chance - salah;

alert('Anda punya ' + chance + ' kesempatan! \nTebak angka dari 1-10');

while (chance > 0) {
    // User memasukkan angka 1-10
    p = prompt(start);

    // Jika user menang dalam sekali putaran
    if (p == cpu) {
        alert(win + cpu);
        chance = 0;
    } // Jika nilai user lebih tinggi dari program
    else if (p > cpu) {
        // Jika chance tinggal 1, user kalah
        if (chance == 1) {
            alert(lose + cpu);
        } else {
            // Jika chance masih > 1
            alert(tooHigh + sisa-- + ' kali lagi');
        }
    } // Jika nilai user lebih rendah dari program
    else if (p < cpu) {
        // Jika kesempatan tinggal 1, user kalah
        if (chance == 1) {
            alert(lose + cpu);
        } else {
            // Jika kesempatan masih > 1
            alert(tooLow + sisa-- + ' kali lagi');
        }
    } //Jika pilihan user bukan bilangan 1-10
    else {
        if (chance == 1) {
            alert('Maaf kesempatan anda habis, kami tidak menemukan angka 1-10');
        } else {
            alert(error + sisa-- + ' kali lagi');
        }
    }

    // Jika pilihan user tidak sama dengan program, jumlah chance dipotong 1 sampai hasilnya sama
    chance--;
}

// Game berakhir (jika chance = 0, looping selesai)
alert(finish);