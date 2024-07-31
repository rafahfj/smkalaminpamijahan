import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Jurusan from "./pages/Jurusan";
import Ekskul from "./pages/Ekskul";
import Pengajar from "./pages/Pengajar";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import NoPage from "./pages/NoPage";
import { Component } from "react";
import { ScrollToTop } from "./functions/useScroll";

class App extends Component {
  state = {
    layout: {},
    home: {},
    sejarah: {},
    jurusan: {},
    ekskul: {},
    pengajar: {},
    nopage: {},
  };

  componentDidMount() {
    fetch("./db/allDB.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({
          home: res.home,
          sejarah: res.sejarah,
          jurusan: res.jurusan,
          ekskul: res.ekskul,
          pengajar: res.pengajar,
          layout: res.layout,
          nopage: res.nopage,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home home={this.state.home} />} />
                <Route
                  path="/sejarah"
                  element={<Sejarah sejarah={this.state.sejarah} />}
                />
                <Route
                  path="/jurusan"
                  element={<Jurusan jurusan={this.state.jurusan} />}
                />
                <Route
                  path="/ekskul"
                  element={<Ekskul ekskul={this.state.ekskul} />}
                />
                <Route
                  path="/pengajar"
                  element={<Pengajar pengajar={this.state.pengajar} />}
                />
                <Route path="/galeri" element={<Galeri />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route
                  path="*"
                  element={<NoPage nopage={this.state.nopage} />}
                />
              </Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
