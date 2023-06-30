import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props, "props");
   return (
      <div className={style.fondo}>
         <button onClick={() => props.onClose(props.id)} className={style.boton}>X</button>
         <Link className="style.link" to={`/Detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <h2>{props.status}</h2>
         <img className={style.foto} src={props.image} alt='Rick-foto'/>
      </div>
   );
}
