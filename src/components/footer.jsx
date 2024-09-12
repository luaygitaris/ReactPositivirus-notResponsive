// import React from 'react'
import style from "../css/footer.module.css";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../assets/footer/icon (1).png";

const Footer = () => {
  return (
    <footer>
      <div className={style.atas}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
          <h3>Positivus</h3>
        </div>
        <div className={style.listNav}>
          <div className={style.ulNav}>
            <ul>
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
        </div>
        <div className={style.containericon}>
          <div className={style.icon}>
            <FaLinkedinIn />
          </div>
          <div className={style.icon}>
            <FaFacebookF />
          </div>
          <div className={style.icon}>
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className={style.tengah}>
        <div className={style.contact}>
          <div>
            <p>Contact Us:</p>
          </div>
          <div>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className={style.form}>
          <form action="">
            <input className={style.input} type="email" placeholder="Email" />
          </form>
          <div>
            <button>Subscribe to news</button>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.bawah}>
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
