import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";
import logo from "../logo/logo.png";

function Home() {
  const location = useLocation();

  const [rows, setRows] = useState([
    {
      item: "Laptop",
      category: "Elektronik",
      total: 10,
      dipinjam: 2,
      stock: 8,
    },
    {
      item: "Proyektor",
      category: "Elektronik",
      total: 5,
      dipinjam: 1,
      stock: 4,
    },
    {
      item: "Meja",
      category: "Furniture",
      total: 20,
      dipinjam: 5,
      stock: 15,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Modal states
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [newProduct, setNewProduct] = useState({
    item: "",
    category: "",
    total: 0,
    dipinjam: 0,
    stock: 0,
  });

  // Tambah data baru
  const handleAddProduct = () => {
    if (!newProduct.item || !newProduct.category || newProduct.total <= 0) return;
    setRows([...rows, newProduct]);
    resetForm();
  };

  // Edit data
  const handleEditProduct = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setNewProduct(rows[index]); // isi form dengan data lama
    setShowForm(true);
  };

  // Simpan hasil edit
  const handleUpdateProduct = () => {
    const updatedRows = [...rows];
    updatedRows[editIndex] = newProduct;
    setRows(updatedRows);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setNewProduct({
      item: "",
      category: "",
      total: 0,
      dipinjam: 0,
      stock: 0,
    });
    setShowForm(false);
    setIsEditing(false);
    setEditIndex(null);
  };

  // Filter + Search
  const filteredRows = rows.filter((r) => {
    const matchSearch = r.item.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || r.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar" style={{ fontFamily: '"Segoe UI", Arial, sans-serif' }}>
        <img src={logo} alt="Logo" className="brand-logo" />
        <nav className="sidebar-menu">
          <Link className={`menu-item${location.pathname === "/" ? " active" : ""}`} to="/">
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

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="title">Inventory</h1>
            <p className="subtitle">({rows.length} inventory)</p>
          </div>
          <div className="topbar-actions">
            <button className="btn primary" onClick={() => setShowForm(true)}>
              <span className="plus">+</span> Add Product
            </button>
          </div>
        </header>

        {/* Search & Filter */}
        <div className="controls">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search"
              placeholder="Search for inventory"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="control-right">
            <button className="btn outline" onClick={() => setFilter("All")}>
              All
            </button>
            <button className="btn outline" onClick={() => setFilter("Elektronik")}>
              Elektronik
            </button>
            <button className="btn outline" onClick={() => setFilter("Furniture")}>
              Furniture
            </button>
          </div>
        </div>

        {/* Table */}
        <section className="table">
          <div className="thead">
            <div className="th item">Item</div>
            <div className="th category">Category</div>
            <div className="th num">Total</div>
            <div className="th num">Di Pinjam</div>
            <div className="th num">Stock</div>
            <div className="th action">Action</div>
          </div>

          <div className="tbody">
            {filteredRows.map((r, i) => (
              <div className="tr" key={i}>
                <div className="td item">
                  <span className="avatar" />
                  <span className="item-name">{r.item}</span>
                </div>
                <div className="td category">{r.category}</div>
                <div className="td num">{r.total}</div>
                <div className="td num">{r.dipinjam}</div>
                <div className="td num">{r.stock}</div>
                <div className="td action">
                  <button className="btn outline" onClick={() => handleEditProduct(i)}>
                    ✏️ Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Add/Edit */}
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
              <input
                placeholder="Item Name"
                value={newProduct.item}
                onChange={(e) => setNewProduct({ ...newProduct, item: e.target.value })}
              />

              <select
  className="input"
  value={newProduct.category}
  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
>
  <option value="">-- Pilih Category --</option>
  <option value="Elektronik">Elektronik</option>
  <option value="Furniture">Furniture</option>
</select>

              <input
                type="number"
                placeholder="Total"
                value={newProduct.total}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    total: Number(e.target.value),
                    stock: Number(e.target.value) - newProduct.dipinjam,
                  })
                }
              />

              <div className="modal-actions">
                <button className="btn outline" onClick={resetForm}>
                  Cancel
                </button>
                {isEditing ? (
                  <button className="btn primary" onClick={handleUpdateProduct}>
                    Update
                  </button>
                ) : (
                  <button className="btn primary" onClick={handleAddProduct}>
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <footer className="pagination">
          <div className="rows">
            <label>Show</label>
            <select>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span>row</span>
          </div>

          <div className="pager">
            <button className="btn outline">Previous</button>
            <button className="btn success">Next</button>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;
