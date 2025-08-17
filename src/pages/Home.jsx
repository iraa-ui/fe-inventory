import React from 'react';
import '../styles/home.css';
import logo from '../logo/logo.png';

function Home() {
  const rows = [
    
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="status-dot" />
          <img src={logo} alt="Logo" className="brand-logo" />
         
        </div>

        <nav className="menu">
          <a className="menu-item active" href="#inventory">Inventory</a>
          <a className="menu-item" href="#peminjaman">Peminjaman</a>
          <a className="menu-item" href="#pengembalian">Pengembalian</a>
        </nav>
      </aside>

     
      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="title">Inventory</h1>
            <p className="subtitle">(2747 inventory)</p>
          </div>
          <div className="topbar-actions">
            <button className="btn ghost">User</button>
            <button className="btn primary">
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
            />
          </div>

          <div className="control-right">
            <button className="btn outline">Filter ▾</button>
            <button className="btn outline">Category ▾</button>
          </div>
        </div>

       
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
            {rows.map((r, i) => (
              <div className="tr" key={i}>
                <div className="td item">
                  <span className="avatar" />
                  <span className="item-name">{r.item}</span>
                </div>
                <div className="td category">{r.category}</div>
                <div className="td num">{r.total}</div>
                <div className="td num">{r.dipinjam}</div>
                <div className="td num">{r.stock}</div>
                <div className="td action">⋯</div>
              </div>
            ))}
          </div>
        </section>

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
