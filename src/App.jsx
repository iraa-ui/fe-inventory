import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Peminjaman from "./pages/Peminjaman";
import Pengembalian from "./pages/Pengembalian";


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/peminjaman" element={<Peminjaman />} />
        <Route path="/pengembalian" element={<Pengembalian />} />
      </Routes>
    </Router>
  );
}

export default App;
