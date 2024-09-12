// import React from 'react'
import style from "../css/testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bubble from "../assets/testimonial/Bubble.png";
// import TestimonialContent from "./testimonialContent";

const Testimonial = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={style.testi}>
      <div className={style.testiJdl}>
        <h2>Testimonials</h2>
        <p>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className={style.container}>
        <Slider {...settings}>
          <div className={style.content}>
            <div className={style.img}>
              <img src={bubble} alt="" />
            </div>
            <p className={style.icon}>
              We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence.
            </p>
            <div className={style.nama}>
              <p className={style.green}>Luay Bachtiar</p>
              <p>CEO and Founder</p>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.img}>
              <img src={bubble} alt="" />
            </div>
            <p className={style.icon}>
              We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence.
            </p>
            <div className={style.nama}>
              <p className={style.green}>Luay Bachtiar</p>
              <p>CEO and Founder</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
