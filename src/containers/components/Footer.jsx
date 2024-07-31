import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <footer>
        <section className="foot foot-1">
          <h2>{props.data?.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.nav.address }}></p>
          <ul>
            {props.data?.sosmed?.map((sosmed, i) => {
              return (
                <li key={i}>
                  <a rel="noreferrer" href={sosmed.href} target="_blank">
                    <img src={sosmed.logo} alt={sosmed.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="foot foot-2">
          <ul>
            {props.nav?.navigasi?.map((nav, i) => {
              return (
                <li key={i}>
                  <Link to={nav.path === "home" ? "/" : "/" + nav.path}>
                    {nav.path}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </footer>
      <div className="cr">
        <p>
          Copyright © 2024 |
          <a href="https://rafahfajrijuwaeni.vercel.app/">
            Rafah Fajri Juwaeni
          </a>
        </p>
      </div>
    </>
  );
}
