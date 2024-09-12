// import React from "react";
import style from "../css/process.module.css";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const Process = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEmpat, setIsOpenEmpat] = useState(false);
  const [iOpen, seIsOpen] = useState(false);
  const [sOpen, sIsOpen] = useState(false);
  const [Open, IsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenuempat = () => {
    setIsOpenEmpat(!isOpenEmpat);
  };
  const toggleMenusatu = () => {
    seIsOpen(!iOpen);
  };
  const toggleMenutiga = () => {
    sIsOpen(!sOpen);
  };
  const toggleMenudua = () => {
        IsOpen(!Open);
  };

  return (
    <section className={style.Ow}>
      <div className={style.OwJdl}>
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className={style.Owcontainer}>
        <div className={style.Owcontent}>
          <div className={style.Owcontentjdl}>
            <div>
              <h1>01</h1>
              <h3>Consultation</h3>
            </div>
            <div className={style.icon} onClick={toggleMenudua}>
              <CiCirclePlus />
            </div>
          </div>
          <div
            className={Open ? style.Owcontentisi.active : style.Owcontentisi}
          >
            <hr />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={style.Owcontent}>
          <div className={style.Owcontentjdl}>
            <div>
              <h1>02</h1>
              <h3>Research and Strategy Development</h3>
            </div>
            <div className={style.icon} onClick={toggleMenu}>
              <CiCirclePlus />
            </div>
          </div>
          <div
            className={isOpen ? style.Owcontentisi.active : style.Owcontentisi}
          >
            <hr />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={style.Owcontent}>
          <div className={style.Owcontentjdl}>
            <div>
              <h1>03</h1>
              <h3>Implementation</h3>
            </div>
            <div className={style.icon} onClick={toggleMenusatu}>
              <CiCirclePlus />
            </div>
          </div>
          <div
            className={iOpen ? style.Owcontentisi.active : style.Owcontentisi}
          >
            <hr />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={style.Owcontent}>
          <div className={style.Owcontentjdl}>
            <div>
              <h1>04</h1>
              <h3>Monitoring and Optimization</h3>
            </div>
            <div className={style.icon} onClick={toggleMenutiga}>
              <CiCirclePlus />
            </div>
          </div>
          <div
            className={sOpen ? style.Owcontentisi.active : style.Owcontentisi}
          >
            <hr />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={style.Owcontent}>
          <div className={style.Owcontentjdl}>
            <div>
              <h1>05</h1>
              <h3>Reporting and Communication</h3>
            </div>
            <div className={style.icon} onClick={toggleMenuempat}>
              <CiCirclePlus />
            </div>
          </div>
          <div
            className={isOpenEmpat ? style.Owcontentisi.active : style.Owcontentisi}
          >
            <hr />
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
