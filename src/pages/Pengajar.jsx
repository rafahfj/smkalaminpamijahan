import Header from "./components/Header";

export default function Pengajar(props) {
  const header = props.pengajar.header;
  const pengajar = props.pengajar;
  return (
    <>
      <Header data={header} />
      <h1>Pengajar</h1>
    </>
  );
}
