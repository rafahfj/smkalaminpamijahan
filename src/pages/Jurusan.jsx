import Header from "./components/Header";

export default function Jurusan(props) {
  const header = props.jurusan.header;
  const jurusan = props.jurusan;
  console.log(jurusan);
  return (
    <>
      <Header data={header} />
      <h1>Jurusan</h1>
    </>
  );
}
