import { tClose } from "../../functions/menuButton";
import { Link } from "react-router-dom";

export default function Sidenav(props) {
  return (
    <div className="side-nav">
      <ul id="side-nav" className="">
        <p className="t-close" id="t-close" onClick={tClose}>
          x
        </p>
        <h3>{props.data?.name}</h3>
        {props.nav?.navigasi?.map((nav, i) => {
          return (
            <li key={i} onClick={tClose}>
              <Link to={nav.path === "home" ? "/" : "/" + nav.path}>
                {nav.path}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
