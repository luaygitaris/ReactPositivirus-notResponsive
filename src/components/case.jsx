import style from "../css/case.module.css";

const Case = () => {
  return (
    <section className={style.case}>
      <div className={style.caseJdl}>
        <h2>Case Studies</h2>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className={style.casegrid}>
        <div className={style.cagrid}>
          <div className={style.cagridcont}>
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="">
              <p>Learn more</p>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <span></span>
        </div>
        <div className={style.cagrid}>
          <div className={style.cagridcont}>
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a href="">
              <p>Learn more</p>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <span></span>
        </div>
        <div className={style.cagrid}>
          <div className={style.cagridcont}>
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a href="">
              <p>Learn more</p>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
