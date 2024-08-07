import React from "react";
export default function Index() {
    const salam = (nama) => `Halo, ${nama}`;
    let nama = "Fadhil Rabbani";

    // Destructuring Array
    const angka = [1, 2, 3];
    const [satu, dua, tiga] = angka;

    // Destructuring Object
    const user = { nama: 'Fadhil Rabbani', age: 17 }

    // Spread Operator pada Array
    const angka2 = [...angka, 4, 5]

    // Spread Operator pada Object
    const user2 = { ...user, status: 'Siswa' }

    // Rest Operator pada Fungsi
    function hitung(...angka) {
        return angka.reduce((acc, curr) => acc + curr, 0)
    }

    // Menggunakan Promises
    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data berhasil diambil");
            }, 2000);
        });
    };

    getData().then(response => console.log(response)); // Output: Data berhasil diambil

    // Menggunakan Async/Await
    const fetchData = async () => {
        try {
            const response = await getData();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData(); // Output: Data berhasil diambil

    // Membuat Class
    class Person {
        constructor(nama, umur) {
            this.nama = nama
            this.umur = umur
        }
        perkenalan() {
            return `Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`;
        }
    }

    const mirza = new Person("Fadhil Rabbani", 17);
    console.log(mirza.perkenalan()); //Output: Halo, nama saya Fadhil Rabbani dan saya berumur 17 tahun.

    // Inheritance
    class Guru extends Person {
        constructor(nama, umur, mapel) {
            super(nama, umur)
            this.mapel = mapel
        }

        mengajar() {
            return `Saya menjadi siswa di mapel ${this.mapel}.`;
        }
    }

    const bapakMirza = new Guru("Fadhil Rabbani", 17, "React JS");
    console.log(bapakMirza.perkenalan()); // Output: Halo, nama saya Mirza dan saya berumur 30 tahun.
    console.log(bapakMirza.mengajar());   // Saya menjadi siswa di mapel React JS.

    return (
        <main className="flex min-h-screen flex-col items-center  p-24">
            <h2 className="text-success">{salam(nama)}</h2>
            <p>{`${satu}, ${dua}, ${tiga}`}</p>
            <p>{user.nama}, {user.age}</p>
            {angka2.map((v) => (
                <p key={v}>{v}</p>
            ))}
            <p>{user2.status}</p>

            <p>{hitung(1, 2, 3, 4)}</p>
        </main>
    )
}