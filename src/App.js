import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Jurusan from "./pages/Jurusan";
import Ekskul from "./pages/Ekskul";
import Pengajar from "./pages/Pengajar";
import Galeri from "./pages/Galeri";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/sejarah" element={<Sejarah />} />
              <Route path="/jurusan" element={<Jurusan />} />
              <Route path="/ekskul" element={<Ekskul />} />
              <Route path="/pengajar" element={<Pengajar />} />
              <Route path="/galeri" element={<Galeri />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
