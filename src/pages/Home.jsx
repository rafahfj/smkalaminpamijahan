import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import { sNavClose } from "../functions/menuButton";

export default function Home(props) {
  const [isClick, setIsClick] = useState(-1);

  const handleClickFaq = (i) => () => {
    setIsClick(i === isClick ? -1 : i);
  };

  const header = props.home.header;
  const home = props.home;

  return (
    <Fragment>
      <Header data={header} />
      <main onClick={sNavClose}>
        {home.sect?.map((sect) => {
          return (
            <Fragment key={sect.href}>
              <section key={sect.href} className={sect.id} id="sect-2">
                <img src={sect.thumb} alt="" />
                <h2>{sect.title}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sect.text,
                  }}
                ></p>
                <a href={"/" + sect.href}>selengkapnya mengenai {sect.href}</a>
              </section>
              <div className={sect.div}></div>
            </Fragment>
          );
        })}
        <section className="sect gallery">
          <h2>GALERI</h2>
          <div className="cont-gallery">
            {home.galeri?.map((foto) => {
              return (
                <div key={foto.id} className="card">
                  <img src={foto.src} alt={foto.alt} title={foto.alt} />
                </div>
              );
            })}
          </div>
          <a href="/galeri">see more</a>
        </section>
        <div className="gradient-top"></div>
        <section className="sect faqs">
          <h2>FAQ</h2>
          <div className="cont-faqs">
            {home.faqs?.map((faq, i) => {
              return (
                <div
                  key={i}
                  onClick={handleClickFaq(i)}
                  className={
                    i === isClick ? "faq faq--expanded" : "faq faq--unexpanded"
                  }
                >
                  <div>
                    <p className="question">{faq.question}</p>
                  </div>
                  <div className="d-answer">
                    <p
                      className="answer"
                      dangerouslySetInnerHTML={{
                        __html: faq.answer,
                      }}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="gradient-bottom"></div>
      </main>
    </Fragment>
  );
}
