import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { menuToggle } from "../../functions/menuButton";
import { useEffect, useState } from "react";
import useScroll from "../../functions/useScroll";

export default function Navigation(props) {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);
  return (
    <div className="nav-fixed">
      <ul className={navClassList.join(" ")}>
        <li className="mini-logo">
          <img src={props.data?.logo} alt={props.data?.alt} />
          <p>{props.data?.name}</p>
        </li>
        <li className="parentNav">
          <MediaQuery maxWidth={819}>
            <div className="menu-toggle" onClick={menuToggle}>
              <input type="checkbox" id="menu-toggle" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={820}>
            <ul id="nav-right" className="nav-right">
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
          </MediaQuery>
        </li>
      </ul>
    </div>
  );
}
