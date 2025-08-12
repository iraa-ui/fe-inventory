import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo/logo.png";
import "../styles/Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    item: "",
    category: "",
    total: 0,
    dipinjam: 0,
  });
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "total" || name === "dipinjam" ? Number(value) : value,
    }));
  };

  const handleAddOrEditProduct = (e) => {
    e.preventDefault();
    const { item, category, total, dipinjam } = form;

    if (!item.trim() || !category.trim()) {
      return alert("Isi nama & kategori dulu!");
    }

    const stock = Math.max(total - dipinjam, 0);
    const newProduct = { item, category, total, dipinjam, stock };

    if (editIndex !== null) {
    
      const updatedData = [...data];
      updatedData[editIndex] = newProduct;
      setData(updatedData);
      setEditIndex(null);
    } else {
     
      setData((prev) => [...prev, newProduct]);
    }

    setForm({ item: "", category: "", total: 0, dipinjam: 0 });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (index) => {
    setForm(data[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const filteredData = data.filter((row) =>
    row.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <ul>
          <li className="inventory">Inventory</li>
          <li>Peminjaman</li>
          <li>Pengembalian</li>
        </ul>
      </div>

      <div className="content">
        <div className="header">
          <div>
            <h1>Inventory</h1>
            <p className="text-muted">({filteredData.length} inventory)</p>
          </div>
          <button className="btn-add" onClick={() => setShowForm((prev) => !prev)}>
            {showForm ? "Tutup Form" : "+ Tambah Produk"}
          </button>
        </div>

        {showForm && (
          <div className="form-card">
            <h5>{editIndex !== null ? "Edit Produk" : "Form Tambah Produk"}</h5>
            <form onSubmit={handleAddOrEditProduct}>
              <div className="form-row">
                <input
                  type="text"
                  name="item"
                  placeholder="Nama Produk"
                  value={form.item}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Kategori"
                  value={form.category}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="total"
                  min="0"
                  placeholder="Total"
                  value={form.total}
                  onChange={handleChange}
                  className="input-sm"
                />
                <input
                  type="number"
                  name="dipinjam"
                  min="0"
                  placeholder="Dipinjam"
                  value={form.dipinjam}
                  onChange={handleChange}
                  className="input-sm"
                />
                <button type="submit" className="btn-submit">
                  {editIndex !== null ? "Update" : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        )}

        <input
          type="text"
          className="search-input"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-card">
          <table className="table">
            <thead>
              <tr>
                <th>ITEM</th>
                <th>CATEGORY</th>
                <th>TOTAL</th>
                <th>DIPINJAM</th>
                <th>STOCK</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.item}</td>
                    <td>{row.category}</td>
                    <td>{row.total}</td>
                    <td>{row.dipinjam}</td>
                    <td>{row.stock}</td>
                    <td>
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(idx)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(idx)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-muted">
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
