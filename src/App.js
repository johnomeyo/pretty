import "./App.css";
import { Navbar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Search } from "./pages/search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
