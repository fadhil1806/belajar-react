// Latihan:
// Buatlah variabel menggunakan let dan const.
// Buat arrow function yang menerima parameter dan mengembalikan nilai.
// Gunakan template literals untuk menggabungkan string dan variabel.
// Praktikkan destructuring pada array dan objek.
// Gunakan spread operator untuk menggabungkan dua array dan dua objek.
// Buat sebuah modul dengan export dan import fungsi di file lain.
// Buat dan gunakan promises, lalu ubah menjadi async/await.

import dataMakanan from "./data"

// Buat class sederhana, lalu kembangkan dengan inheritance.
export default function Latihan1() {
    const nama = 'Fadhil Rabbani'
    const umur = 17
    const introduction = (nama, umur) => {
        return `Halo, nama saya ${nama} dengan umur ${umur}`
    }

    console.log(introduction(nama, umur))


    const fruits = ['manggo', 'banana']
    const userName = ['Rofi', 'Aziz']

    const user = {age: 18, email: 'aziz@gmail.id'}
    const mapel = {nama: 'Math', teacher: 'Pak muiz'}

    // const {userAge, email} = user

    const data = { ...user, ...mapel, fruits: [...fruits], userNames: [...userName] };
    console.log(data)
    console.log(dataMakanan.data)

    async function listMakanan() {
        const promises = dataMakanan.data.nama.map(async (v) => {
            const res = await dataMakanan.listDataMakanan(v);
            console.log(res);
            return res;
        });
    
        // Wait for all promises to resolve
        const results = await Promise.all(promises);
        return results;
    }
    
    listMakanan();

    class Mapel {
        constructor(nama) {
            this.nama = nama
        }
        hasil() {
            return `nama mapel ini adalah ${mapel}`
        }
    }

    class Guru extends Mapel {
        constructor(nama, mapel) {
            super(nama)
            this.mapel = mapel
        }

        mengajar() {
            return `guru mengajar ${this.mapel} dengan nama ${this.nama}`
        }
    }

    const coba = new Guru('Fadhil Rabbani', 'Matematika');
    console.log(coba.hasil()); // Nama mapel ini adalah Fadhil Rabbani
    console.log(coba.mengajar()); // Fadhil Rabbani mengajar Matematika

    return (
        <div>
        </div>
    );
}

