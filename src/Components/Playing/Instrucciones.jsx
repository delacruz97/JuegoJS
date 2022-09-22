import React from "react";
import "./instrucciones.css";
import { Link } from "react-router-dom";
const Instrucciones = () => {
  return (
    <>
      <div className="center">
        <h3>
          El jugador tiene 20 segundos y 5 vidas, para demostrar su mayor
          cantidad de preguntas correctas, en caso que pierda sus vidas o caso
          contrario que se quede sin tiempo, perdera el juego.
        </h3>
      </div>
      <Link to="/">Volver</Link>
    </>
  );
};

export default Instrucciones;
