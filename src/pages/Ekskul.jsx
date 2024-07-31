import Header from "./components/Header";

export default function Ekskul(props) {
  const header = props.ekskul.header;
  const ekskul = props.ekskul.all;
  ekskul?.map((ekskull) => console.log(ekskull));
  return (
    <div className="ekskul">
      <Header data={header} />
      <h1>Ekskul</h1>
      <div className="cont-card">
        {ekskul?.map((ekskull) => {
          return (
            <div className="card">
              <div className="card-top">
                <div className="thumb">
                  <img src={ekskull.src} alt={ekskull.title} />
                </div>
                <h2 className="title">{ekskull.title}</h2>
              </div>
              <div className="card-btm">
                <p className="desc">{ekskull.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
