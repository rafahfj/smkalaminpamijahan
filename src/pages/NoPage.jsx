export default function NoPage(props) {
  return (
    <>
      <div className="no-page">
        <h1>{props.nopage.text}</h1>
        <h2>{props.nopage.text2}</h2>
      </div>
    </>
  );
}
