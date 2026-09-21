import "./App.css";
import { mahasiswaList, produkList} from "./data";

function PraktikumApp() {

    // p2. Filter Mahasiswa
    const mahasiswaTeknik = mahasiswaList.filter(
        (mahasiswa) => mahasiswa.jurusan === "Teknik Informatika"
    );

    // p3. Cari Mahasiswa
    const cariNimMahasisa = mahasiswaList.find(
        (mahasiswa) => mahasiswa.nim === "3312511065"
    );

    //  p4. Hitung Rata-Rata IPK
    const rataRataIpkMahasiswa = mahasiswaList.reduce(
        (total, mahasiswa) => total + mahasiswa.ipk,
        0
    ) / mahasiswaList.length;

    // p5. Produk Diskon
    const produkDiskon = {
    ...produkList[0],
    price: produkList[0].price * 0.9,
    };

    return (
        <div className="container">
            <h1>Daftar Mahasiswa</h1>
            <ul>
                {mahasiswaList.map((mahasiswa) => (
                    <li key={mahasiswa.id}>{mahasiswa.nama} - {mahasiswa.nim} - {mahasiswa.jurusan} - {mahasiswa.ipk} - {mahasiswa.semester}</li>
                ))}
            </ul>

            <h1>Filter Mahasiswa</h1>
            <p>{mahasiswaTeknik.map((m) => m.nama).join(", ")}</p>

            <h1>Find Mahasiswa</h1>
            <p>{cariNimMahasisa?.nama ?? "Mahasiswa tidak ditemukan"}({cariNimMahasisa?.nim ?? "NIM tidak ditemukan"})</p>

            <h1>Rata-rata IPK Mahasiswa</h1>
            <p>{rataRataIpkMahasiswa.toFixed(2)}</p>

            <h1>Produk Diskon</h1>
            <p>{produkDiskon.name} - Rp{produkDiskon.price.toLocaleString("id-ID")}</p>
        </div>
    )
}

export default PraktikumApp;