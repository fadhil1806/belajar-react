const data = { 
    nama: ['Sayur asem', 'Ayam goreng', 'Ikan Bakar'] 
}

const listDataMakanan = async (nama) => {
    return `Makanan ini namanya adalah ${nama}`;
}

export default { data, listDataMakanan };
