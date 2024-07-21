import { Component } from "react";
import MediaQuery from "react-responsive";
import { Outlet, Link } from "react-router-dom";

export default class Layout extends Component {

  render() {
    const menuToggle = () => {
      document.querySelector(".side-nav ul").classList.add("slide");
      document.querySelector(".t-close").classList.add("slide");
    };

    const tClose = () => {
      document.querySelector(".side-nav ul").classList.remove("slide");
      document.querySelector(".t-close").classList.remove("slide");
    };

    return (
      <>
        <div className="nav-fixed">
          <ul>
            <li className="mini-logo">
              <img src="./images/icon/logo-yhma.png" alt="" />
              <p>SMK AL AMIN</p>
            </li>
            <li className="parentNav">
              <MediaQuery maxWidth={819}>
                <div className="menu-toggle" onClick={menuToggle}>
                  <input type="checkbox" id="menu-toggle" />
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </MediaQuery>
              <MediaQuery minWidth={820}>
                <ul id="nav-right" className="nav-right">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/sejarah">Sejarah</Link>
                  </li>
                  <li>
                    <Link to="/jurusan">Jurusan</Link>
                  </li>
                  <li>
                    <Link to="/ekskul">Ekskul</Link>
                  </li>
                  <li>
                    <Link to="/pengajar">Pengajar</Link>
                  </li>
                  <li>
                    <Link to="/galeri">Galeri</Link>
                  </li>
                  <li>
                    <Link to="/contact">Kontak</Link>
                  </li>
                </ul>
              </MediaQuery>
            </li>
          </ul>
        </div>
        <div className="side-nav">
          <ul id="side-nav" className="">
            <p className="t-close" id="t-close" onClick={tClose}>
              x
            </p>
            <h3>SMK AL AMIN</h3>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sejarah">Sejarah</Link>
            </li>
            <li>
              <Link to="/jurusan">Jurusan</Link>
            </li>
            <li>
              <Link to="/ekskul">Ekskul</Link>
            </li>
            <li>
              <Link to="/pengajar">Pengajar</Link>
            </li>
            <li>
              <Link to="/galeri">Galeri</Link>
            </li>
            <li>
              <Link to="/contact">Kontak</Link>
            </li>
          </ul>
        </div>

        <header>
          <div className="hero">
            <div className="overlay">
              <div className="logo-name">
                <img
                  src="./images/icon/logo-yhma.png"
                  alt="Logo Yayasan Haji Muhamad Amin"
                  title="Logo Yayasan Haji Muhamad Amin"
                />
                <h1 className="schl-name">SMK AL AMIN</h1>
                <h2 className="loc-name">PAMIJAHAN BOGOR</h2>
                <p className="motto">
                  Luruskan niat bersihkan hati satukan langkah maju sukses
                  menuju masyarakat madani bersama Al Amin
                </p>
              </div>
            </div>
            <div className="hero-gradient"></div>
          </div>
        </header>

        <Outlet />
        <footer>
          <section className="foot foot-1">
            <h2>SMK AL AMIN</h2>
            <p>
              Jalan Thamrin no. 1 <br />
              Desa Cibening Kecamatan Pamijahan
              <br />
              Kabupaten Bogor <br />
              16810
            </p>
            <ul>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/smkalamincibening98?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                >
                  <img src="./images/icon/logo/instagram.png" alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100090175191401&mibextid=ZbWKwL"
                  target="_blank"
                >
                  <img src="./images/icon/logo/facebook.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://youtube.com/@smkalamincibeningchannel1032?si=otlpqFhhwGddGfCR"
                  target="_blank"
                >
                  <img src="./images/icon/logo/youtube.png" alt="YouTube" />
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/nG1vXzZxeZZ5r2jQ9">
                  <img src="./images/icon/logo/pin.png" alt="Location" />
                </a>
              </li>
            </ul>
          </section>
          <section className="foot foot-2">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sejarah">Sejarah</Link>
              </li>
              <li>
                <Link to="/jurusan">Jurusan</Link>
              </li>
              <li>
                <Link to="/ekskul">Ekskul</Link>
              </li>
              <li>
                <Link to="/pengajar">Pengajar</Link>
              </li>
              <li>
                <Link to="/galeri">Galeri</Link>
              </li>
              <li>
                <Link to="/contact">Kontak</Link>
              </li>
            </ul>
          </section>
        </footer>
        <div className="cr">
          <p>
            Copyright © 2024 |
            <a href="https://rafahfj.github.io/rafahfajrijuwaeni/">
              Rafah Fajri Juwaeni
            </a>
          </p>
        </div>
      </>
    );
  }
}
