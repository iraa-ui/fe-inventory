import React from "react";
import "../styles/Peminjaman.css"; 
import logo from "../logo/logo.png";
function Pengembalian() {
  return (
    <div className="layout">
    
      <aside className="sidebar">
         <img src={logo} alt="Logo" className="brand-logo" />
        <nav className="sidebar-menu">
          <a href="#" className="menu-item">📦 Inventory</a>
          <a href="#" className="menu-item">📦 Peminjaman</a>
          <a href="#" className="menu-item active">📦 Pengembalian</a>
        </nav>
      </aside>

      <main className="main-content">
        <div className="peminjaman-container">
          <h2 className="peminjaman-title">Pengembalian</h2>
          <p className="peminjaman-subtitle">Form Pengembalian</p>

          <form className="peminjaman-form">
            <div className="form-group">
              <label>Tanggal Pengembalian</label>
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
              <label>Kondisi Barang</label>
              <input type="text" placeholder="Baik / Rusak / Hilang" />
            </div>

            <div className="form-group">
              <label>Keterangan</label>
              <input type="text" />
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn-submit">Kirim</button>
              <button type="reset" className="btn-reset">Reset</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Pengembalian;
