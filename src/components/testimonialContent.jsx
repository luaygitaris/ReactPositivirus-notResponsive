// import React from "react";
import style from "../css/testimonial.module.css";
import bubble from "../assets/testimonial/Bubble.png";

const TestimonialContent = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={bubble} alt="" />
        <p className={style.icon}>
          We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence.
        </p>
        <div className={style.nama}>
          <p className={style.green}>Luay Bachtiar</p>
          <p>CEO and Founder</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialContent;
