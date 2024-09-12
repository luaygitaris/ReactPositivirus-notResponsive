// import React from "react";
import style from "../css/contact.module.css";
// import illustration from "../assets/contact/imgform.png";

const Contact = () => {
  return (
    <section className={style.contact}>
      <div className={style.contactJdl}>
        <h2>Contact Us</h2>
        <p>Connect with Us: Lets Discuss Your Digital Marketing Needs</p>
      </div>
      <div className={style.form}>
        <form action="">
          <div className={style.container}>
            <div className={style.radio}>
              <input type="radio" name="notif" id="semua" />
              <label htmlFor="semua">Say Hi</label>
            </div>
            <div className={style.radio}>
              <input type="radio" name="notif" id="get" />
              <label htmlFor="get">Get a Quote</label>
            </div>
          </div>
          <div className={style.contain}>
            <div className={style.section}>
              <label htmlFor="first-name">Name</label>
              <input
                type="text"
                id="first-name"
                className={style.input}
                placeholder="Name"
              />
            </div>
            <div className={style.section}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={style.input}
                placeholder="Email"
              />
            </div>
            <div className={style.section}>
              <label htmlFor="massage">Message</label>
              <textarea
                name="massage"
                id="massage"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <div className={style.button}>
            <button>Send Message</button>
          </div>
          {/* <img src={illustration} alt="" /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
