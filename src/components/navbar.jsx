import style from "../css/navbar.module.css";
import Logo from "../img/logo/Icon.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className={style.logo}>
          <img src={Logo} alt="Logo" />
          <h3>Positivus</h3>
        </div>
        <div className={style.listNav}>
          <div>
            <ul className={isOpen ? style.active : style.ulNav}>
              <li>
                <a href=""></a>About Us
              </li>
              <li>
                <a href=""></a>Services
              </li>
              <li>
                <a href=""></a>Use Cases
              </li>
              <li>
                <a href=""></a>Pricing
              </li>
              <li>
                <a href=""></a>Blog
              </li>
            </ul>
          </div>
          <a href="" className={style.butNav}>
            Request a quote
          </a>
        </div>
        <div className={style.icon} onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
