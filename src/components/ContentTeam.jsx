// import React from 'react'
import style from '../css/team.module.css'
import { FaLinkedinIn } from "react-icons/fa";

const ContentTeam = (props) => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.name}>
          <img src={props.img} alt="" />
          <div>
            <h4>{props.nama}</h4>
            <p>{props.jabatan}</p>
          </div>
          <div className={style.icon}>
            <FaLinkedinIn />
          </div>
        </div>
        <hr />
        <div>
          <p>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentTeam
