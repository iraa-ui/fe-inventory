import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../logo/logo.png";

function Home() {
  const [rows, setRows] = useState([
    { item: "Laptop", category: "Elektronik", total: 10, dipinjam: 2, stock: 8, keterangan: "Untuk pinjaman kerja" },
    { item: "Proyektor", category: "Elektronik", total: 5, dipinjam: 1, stock: 4, keterangan: "Digunakan saat presentasi" },
    { item: "Meja", category: "Furniture", total: 20, dipinjam: 5, stock: 15, keterangan: "Untuk ruang rapat" },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    item: "",
    category: "",
    total: 0,
    dipinjam: 0,
    stock: 0,
    keterangan: "", // field baru
  });

  const handleAddProduct = () => {
    setRows([...rows, newProduct]);
    setNewProduct({
      item: "",
      category: "",
      total: 0,
      dipinjam: 0,
      stock: 0,
      keterangan: "", // reset juga
    });
    setShowForm(false);
  };

  const filteredRows = rows.filter((r) => {
    const matchSearch = r.item.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || r.category === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="status-dot" />
          <img src={logo} alt="Logo" className="brand-logo" />
        </div>

        <nav className="menu">
          <Link className="menu-item active" to="/">Inventory</Link>
          <Link className="menu-item" to="/peminjaman">Peminjaman</Link>
          <Link className="menu-item" to="/pengembalian">Pengembalian</Link>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="title">Inventory</h1>
            <p className="subtitle">({rows.length} inventory)</p>
          </div>
          <div className="topbar-actions">
            <button className="btn ghost">User</button>
            <button className="btn primary" onClick={() => setShowForm(true)}>
              <span className="plus">+</span> Add Product
            </button>
          </div>
        </header>

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

        <section className="table">
          <div className="thead">
            <div className="th item">Item</div>
            <div className="th category">Category</div>
            <div className="th num">Total</div>
            <div className="th num">Di Pinjam</div>
            <div className="th num">Stock</div>
            <div className="th keterangan">Keterangan</div> 
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
                <div className="td keterangan">{r.keterangan}</div> 
                <div className="td action">⋯</div>
              </div>
            ))}
          </div>
        </section>

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <h2>Add Product</h2>
              <input
                placeholder="Item Name"
                value={newProduct.item}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, item: e.target.value })
                }
              />
              <input
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Total"
                value={newProduct.total}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    total: Number(e.target.value),
                    stock: Number(e.target.value),
                  })
                }
              />
              <input
                placeholder="Keterangan"
                value={newProduct.keterangan}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, keterangan: e.target.value })
                }
              />

              <div className="modal-actions">
                <button className="btn outline" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <button className="btn primary" onClick={handleAddProduct}>
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

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
