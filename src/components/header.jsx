import style from "../css/header.module.css";
import hero from "../img/Illustration.png";

function Header() {
  return (
    <>
      <header>
        <div className={style.headContent}>
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <a href="" className={style.butHead}>
            Book a consultation
          </a>
        </div>
        <div className={style.headImg}>
          <img src={hero} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
