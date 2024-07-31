import { Fragment } from "react";
import Header from "./components/Header";

export default function Sejarah(props) {
  const header = props.sejarah.header;
  const sejarah = props.sejarah;

  return (
    <Fragment>
      <Header data={header} />
      <h1>Sejarah</h1>
      <div>
        {sejarah.text?.map((para, i) => {
          return <p key={i}>{para.p}</p>;
        })}
      </div>
    </Fragment>
  );
}
