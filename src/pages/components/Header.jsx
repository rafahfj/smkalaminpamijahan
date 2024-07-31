export default function Header(props) {
  return (
    <header>
      <div className="hero" style={props.data?.style}>
        <div className="overlay">
          <div className="logo-name">
            <img
              src={props?.data?.logo}
              alt={props?.data?.alt}
              title={props?.data?.alt}
            />
            <h1 className="schl-name">{props?.data?.name}</h1>
            <h2 className="loc-name">{props?.data?.from}</h2>
            <p className="motto">{props?.data?.motto} </p>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </div>
    </header>
  );
}
