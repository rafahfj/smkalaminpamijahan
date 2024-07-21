import React, { Component, Fragment } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      allData: {},
      isClick: -1,
    };
    // this.getDB = this.getDB.bind(this);
  }

  getDB = () => {
    fetch("./db/allDB.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({
          allData: res.home,
        });
      });
  };

  componentDidMount() {
    this.getDB();
  }
  handleClick = (i) => () => {
    this.setState({
      isClick: i === this.state.isClick ? -1 : i,
    });
  };
  render() {
    return (
      <Fragment>
        <main>
          {this.state.allData.sect?.map((sect) => {
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
                  <a href={"/" + sect.href}>
                    selengkapnya mengenai {sect.href}
                  </a>
                </section>
                <div className={sect.div}></div>
              </Fragment>
            );
          })}
          <section className="sect gallery">
            <h2>GALERI</h2>
            <div className="cont-gallery">
              {this.state.allData.galeri?.map((foto) => {
                return (
                  <div key={foto.id} className="card">
                    <img
                      key={foto.id}
                      src={foto.src}
                      alt={foto.alt}
                      title={foto.alt}
                    />
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
              {this.state.allData.faqs?.map((faq, i) => {
                return (
                  <div
                    key={i}
                    onClick={this.handleClick(i)}
                    className={
                      i === this.state.isClick
                        ? "faq faq--expanded"
                        : "faq faq--unexpanded"
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
}

export default Home;
