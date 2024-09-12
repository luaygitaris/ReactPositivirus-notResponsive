import style from '../css/cta.module.css'

const Cta = () => {
  return (
    <section className={style.CTA}>
      <div className={style.CTACard}>
        <div className={style.CTACardText}>
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <a href="">Get your free proposal</a>
        </div>
        <img src="src/img/gambar/Illustration (6).png" alt="" />
      </div>
    </section>
  );
};

export default Cta;
