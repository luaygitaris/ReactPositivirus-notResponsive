// import React from "react";
import style from "../css/team.module.css";
import John from "../assets/team/Picture.png";
import ContentTeam from "./ContentTeam";


const Team = () => {
  const dataTeam = [
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
    {
      img: John,
      nama: "John Smith",
      jabatan: "CEO and Founder",
    },
  ];
  return (
    <section className={style.team}>
      <div className={style.teamJdl}>
        <h2>Our Working Process</h2>
        <p>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <div className={style.container}>
        {dataTeam.map((item) => {
          return (
            <ContentTeam
              key={item.id}
              img={item.img}
              nama={item.nama}
              jabatan={item.jabatan}
            ></ContentTeam>
          );
        })}
      </div>
      <div className={style.containerButton}>
        <button className={style.button}>
          <a href="">See all team</a>
        </button>
      </div>
    </section>
  );
};

export default Team;
