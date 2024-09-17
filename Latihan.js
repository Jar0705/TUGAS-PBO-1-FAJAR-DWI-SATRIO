// Mendefinisikan Kelas
class Mobil {
    constructor(jenis, warnamobi) {
        this.jenis = jenis;
        this.warnamobil = warnamobil;
    }

    // Metode
    jalan() {
        console.log(`${this.jenis} berwarna ${this.warnamobil} sedang berjalan.`);
    }
}

// Pewarisan
class MobilBalap extends Mobil {
    constructor(jenis, warnamobil, supercar) {
        super(jenis, warnamobil); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    jalan() {
        console.log(`${this.jenis} balap berwarna ${this.warnamobil} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const mobilcepat1 = new mobilcepat1('Toyota', 'merah');
mobil1.jalan(); // Output: Toyota berwarna merah sedang berjalan.

const mobilBalapcepat1 = new mobilBalapcepat1('Ferrari', 'hitam', 350);
mobilBalapcepat1.jalan(); // Output: Ferrari balap berwarna hitam berjalan dengan kecepatan maksimal 350 km/jam.

