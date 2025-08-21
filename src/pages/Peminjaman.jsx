import React from "react";
import "../styles/main-layout.css";
import logo from "../logo/logo.png";
import { Link } from "react-router-dom";

function Peminjaman() {
  return (
    <div className="layout">
   
      <aside className="sidebar">
        <img src={logo} alt="Logo" className="brand-logo" />
        <nav className="sidebar-menu">
  <Link
    className={`menu-item${location.pathname === "/" ? " active" : ""}`}
    to="/"
  >
    Inventory
  </Link>
  <Link
    className={`menu-item${location.pathname === "/peminjaman" ? " active" : ""}`}
    to="/peminjaman"
  >
    Peminjaman
  </Link>
  <Link
    className={`menu-item${location.pathname === "/pengembalian" ? " active" : ""}`}
    to="/pengembalian"
  >
    Pengembalian
  </Link>
</nav>
      </aside>

      <main className="main-content">
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
      </main>
    </div>
  );
}

export default Peminjaman;
