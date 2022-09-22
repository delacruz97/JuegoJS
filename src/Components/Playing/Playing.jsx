import React, { useState, useEffect } from "react";
import style from "./Playing.module.css";
import { Preguntas } from "../Helpers/BD";

const Playing = () => {
  const [aleatorio, setAleatorio] = useState(Math.round(Math.random() * 15)); //con "Match.round" dedondeo mi resultado

  const [vidas, setVidas] = useState(5);
  const [puntuacion, setPuntuacion] = useState(0);
  const [time, setTime] = useState(20);

  const [clase, setClase] = useState([
    style.javascript,
    /*  style.cultura,
    style.arte,
    style.deportes,
    style.viajes, */
  ]);
  const [gameOver, setGameOver] = useState(null);
  /* contador */
  useEffect(() => {
    let cuentaAtras = setInterval(() => {
      time > 0
        ? setTime(time - 1)
        : setGameOver((window.location.href = "/gameover"));
    }, 1000);

    return () => clearInterval(cuentaAtras);
  }, [time, puntuacion]);

  const bien = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance("RESPUESTA CORRECTA"));
    setAleatorio(Math.round(Math.random() * 15));
    setPuntuacion(puntuacion + 1);

    setTime(20);
  };
  const mal = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance("RESPUESTA INCORRECTA"));
    setAleatorio(Math.round(Math.random() * 15));
    setVidas(
      vidas > 1 ? vidas - 1 : setGameOver((window.location.href = "/gameover"))
    );
    setTime(24);
  };

  return (
    <>
      {Preguntas.map((pregunta) =>
        pregunta.id === aleatorio ? (
          <>
            <div className={style.countContainer}>
              <h2 key={pregunta.id}>Time:{time}</h2>
              <h2>Points:{puntuacion}</h2>
              <h2>Life:{vidas}</h2>
            </div>
            <div className={style.imgContainer}>
              <div
                className={
                  pregunta.estilos === "javascript"
                    ? clase[0]
                    : /* : pregunta.estilos === "css"
                    ? clase[1]
                    : pregunta.estilos === "html"
                    ? clase[2]
                    : pregunta.estilos === "react"
                    ? clase[3] */
                      clase[1]
                }
              ></div>
            </div>
            <div className={style.preguntaContainer}>
              <h3>{pregunta.pregunta}</h3>
            </div>

            <div className={style.buttonContainer}>
              <button
                className={style.boton}
                onClick={pregunta.respuesta1 === pregunta.solucion ? bien : mal}
              >
                {[pregunta.respuesta1]}
              </button>
              <button
                className={style.boton}
                onClick={pregunta.respuesta2 === pregunta.solucion ? bien : mal}
              >
                {[pregunta.respuesta2]}
              </button>
              <button
                className={style.boton}
                onClick={pregunta.respuesta3 === pregunta.solucion ? bien : mal}
              >
                {[pregunta.respuesta3]}
              </button>
            </div>
          </>
        ) : null
      )}
    </>
  );
};

export default Playing;
