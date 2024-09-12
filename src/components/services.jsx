// import React from "react";
import style from "../css/services.module.css";

const Services = () => {
  return (
    <>
      <section className={style.services}>
        <div className={style.jdlServices}>
          <h2>Services</h2>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className={style.servicesGrid}>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Search engine</h3>
                <h3 className={style.hhijau}>optimization</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img src="src/img/gambar/Illustration (1).png" alt="" />
          </div>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Pay-per-click</h3>
                <h3 className={style.hhijau}>advertising</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img src="src/img/gambar/Illustration (2).png" alt="" />
          </div>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Social Media</h3>
                <h3 className={style.hhijau}>Marketing</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img src="src/img/gambar/Illustration (3).png" alt="" />
          </div>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Email</h3>
                <h3 className={style.hhijau}>Marketing</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img
              src="src/img/gambar/tokyo-sending-messages-from-one-place-to-another 1.png"
              alt=""
            />
          </div>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Conten</h3>
                <h3 className={style.hhijau}>Creation</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img src="src/img/gambar/Illustration (4).png" alt="" />
          </div>
          <div className={style.serGridContent}>
            <div className={style.serGridSatu}>
              <div>
                <h3 className={style.hhijau}>Analytics and</h3>
                <h3 className={style.hhijau}>Tracking</h3>
              </div>
              <div className={style.serGridtmbl}>
                <i>→</i>
                <p>Learn more</p>
              </div>
            </div>
            <img src="src/img/gambar/Illustration (5).png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
