import style from "../css/company.module.css";
import logo1 from "../img/logo/Company logo (1).png";

const Company = () => {
  return (
    <section>
      <marquee direction="left">
        <div className={style.companyLogo}>
          <div>
            <img src={logo1} alt="" />
            <img src="src/img/logo/Company logo (2).png" alt="" />
            <img src="src/img/logo/Company logo (3).png" alt="" />
          </div>
          <div className={style.companyTwo}>
            <img src="src/img/logo/Company logo (4).png" alt="" />
            <img src="src/img/logo/Company logo (5).png" alt="" />
            <img src="src/img/logo/Company logo.png" alt="" />
          </div>
        </div>
      </marquee>
    </section>
  );
};

export default Company;
