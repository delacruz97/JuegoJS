import React from "react";
import style from "./PrincipalPage.module.css";
/* import img from "../Assets/javascript.jpg"; */
import PrincipalButtons from "../PrincipalButton";

const PrincipalPage = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titulo}>JAVASCRIPT PLAY</h1>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.I5XOh9o_kbTNsXnsIc53aAHaHa%26pid%3DApi&f=1"
          width="30%"
          alt="imagen"
          className={style.image}
        />
      </div>
      <PrincipalButtons />
    </>
  );
};

export default PrincipalPage;
