import "./App.css";
import { mahasiswa, mahasiswaList, produkList } from "./data";

function TheoriApp() {
  const { nama, nim, jurusan, semester, ipk } = mahasiswa;
  const [mahasiswaPertama, mahasiswaKedua] = mahasiswaList;

  // filter() untuk Menyaring Produk
  const produkTerjangkau = produkList.filter(
    (product) => product.price < 1000000
  );

  const produkTersedia = produkList.filter(
    (product) => product.stock > 0
  );

  // find() untuk Mencari Produk
  const produkPilihan = produkList.find(
    (product) => product.id === 2
  );

  // reduce() untuk Menghitung Total
  const totalNilaiProduk = produkList.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  const totalStok = produkList.reduce(
    (total, product) => total + product.stock,
    0
  );


  return (
    <div className="container">
      {/* object destructuring */}
      <h1>Data Mahasiswa</h1>
      <section className="profile">
        <p><strong>Nama:</strong> {nama}</p>
        <p><strong>NIM:</strong> {nim}</p>
        <p><strong>Jurusan:</strong> {jurusan}</p>
        <p><strong>Semester:</strong> {semester}</p>
        <p><strong>IPK:</strong> {ipk}</p>
      </section>

      {/* array destructuring */}
      <h2>Data Awal</h2>
      <p>{mahasiswaPertama.nama}</p>
      <p>{mahasiswaKedua.nama}</p>
      <p>Jumlah produk: {produkList.length}</p>

      {/* map() untuk Menampilkan Daftar Produk */}
      <section>
        <h2>Daftar Produk</h2>
        <ul>
          {produkList.map((product) => (
            <li key={product.id}>
              {product.name} — Rp{product.price.toLocaleString("id-ID")}
            </li>
          ))}
        </ul>
      </section>

      {/* filter() untuk Menyaring Produk */}
      <section>
        <h2>Produk Terjangkau</h2>
        <ul>
          {produkTerjangkau.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </section>

      {/* find() untuk Mencari Produk */}
      <section>
        <h2>Produk Pilihan</h2>
        <p>{produkPilihan?.name ?? "Produk tidak ditemukan"}</p>
      </section>

      {/* reduce() untuk Menghitung Total */}
      <section>
        <h2>Ringkasan Produk</h2>
        <p>Total stok: {totalStok} unit</p>
        <p>
          Nilai persediaan: Rp{totalNilaiProduk.toLocaleString("id-ID")}
        </p>
      </section>
    </div>

  );
}

export default TheoriApp;