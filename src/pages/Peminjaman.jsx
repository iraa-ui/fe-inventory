import React from "react";
import "../styles/Peminjaman.css"; // file css terpisah

function Peminjaman() {
  return (
    <div className="peminjaman-container">
      <h2 className="peminjaman-title">Peminjaman</h2>
      <p className="peminjaman-subtitle">Form Peminjaman</p>

      <form className="peminjaman-form">
        <div className="form-group">
          <label>Tanggal Peminjaman</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Nama</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Jabatan / Unit</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Barang</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Jumlah</label>
          <input type="number" />
        </div>

        <div className="form-group">
          <label>Keterangan</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Tanggal Pengembalian</label>
          <input type="date" />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-submit">Kirim</button>
          <button type="reset" className="btn-reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Peminjaman;
