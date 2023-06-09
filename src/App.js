import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
// import Contact from "./pages/Contact";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Menu from "./pages/Menu";
// import Footer from "./components/Footer";
import AddCart from "./pages/addCart";
import Book from "./pages/book";
import Add from "./pages/add";
import Update from "./pages/update";
import "././pages/css/book.css"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<AddCart />} />
        <Route path="/book" element={<Book />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      {/* <Footer/>  */}
    </Router>
  );
}

export default App;
