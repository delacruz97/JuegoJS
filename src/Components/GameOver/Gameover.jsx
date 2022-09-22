import React from "react";
import style from "./Gameover.module.css";
import music from "../Assets/gameOver.mp3";
import { Link } from "react-router-dom";

const Gameover = () => {
  return (
    <>
      <div className={style.tit}>GAME OVER</div>
      <div className={style.img}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ov_2eLmdzXQQr_jLzkL3HwAAAA%26pid%3DApi&f=1"
          alt="lilo"
        />
      </div>

      <div className={style.buton}>
        <Link to="/" className={style.butonP}>
          {" "}
          JUGAR NUEVAMENTE
        </Link>
      </div>
      <audio src={music} autoPlay></audio>
    </>
  );
};

export default Gameover;
