function addSeparate() {
  const svgTop = document.querySelectorAll("#svg-top");
  svgTop.forEach((e) => {
    e.innerHTML = `<defs>
                     <linearGradient id="t-grad" x1="50%" y1="100%" x2="50%" y2="0%" >
                           <stop offset="0%" style="stop-color:#ffee98;stop-opacity:1.00" />
                           <stop offset="98%" style="stop-color:rgb(255,255,255);stop-opacity:1.00" />
                     </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#t-grad)"/>`;
  });
  const svgBottom = document.querySelectorAll("#svg-bottom");
  svgBottom.forEach((e) => {
    e.innerHTML = `<defs>
                     <linearGradient id="b-grad" x1="50%" y1="100%" x2="50%" y2="0%" >
                           <stop offset="2%" style="stop-color:rgb(255,255,255);stop-opacity:1.00" />
                           <stop offset="100%" style="stop-color:#ffee98;stop-opacity:1.00" />
                     </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#b-grad)"/>`;
  });
}
addSeparate();

function sizingRes() {
  const parentNav = document.querySelector(".parentNav");
  if (window.innerWidth >= 820) {
    if (parentNav.firstElementChild.classList?.contains("menu-toggle")) {
      document.querySelector(".menu-toggle").remove();
      parentNav.innerHTML = `<ul id="nav-right" class="nav-right">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="sejarah.html">Sejarah</a></li>
                                <li><a href="jurusan.html">Jurusan</a></li>
                                <li><a href="ekskul.html">Ekskul</a></li>
                                <li><a href="pengajar.html">Pengajar</a></li>
                                <li><a href="galeri.html">Gallery</a></li>
                                <li><a href="contact.html">Contact</a></li>
                              </ul>`;
    }
  } else if (window.innerWidth <= 819) {
    parentNav.innerHTML = `<div class="menu-toggle" onclick="menuToggle()">
                              <input type="checkbox" id="menu-toggle" />
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>`;
  }
}

sizingRes();
window.onresize = () => {
  return sizingRes();
};
// function addFaq() {
//   fetch("../database/faq.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((faqs) => {
//       console.log(faqs);
//       faqs.allFaqs.forEach((faq) => {
//         console.log(faq);
//       });
//     });
// }
// addFaq();
