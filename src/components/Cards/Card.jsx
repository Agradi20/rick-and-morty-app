import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { connect } from "react-redux";

function Card(props) {
   console.log(props, "props");

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(props.id));
      } else {
         setIsFav(true);
         dispatch(addFav(props))
      }
   }

   return (
      <div className={style.fondo}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         <button onClick={() => props.onClose(props.id)} className={style.boton}>X</button>
         <Link className={style.link} to={`/Detail/${props.id}`}><h2>{props.name}</h2></Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <h2>{props.status}</h2>
         <Link to={`/src/components/Detail/${props.id}`}>
         <img className={style.foto} src={props.image} alt={props.name}/>
         </Link>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (pj) => dispatch(addFav(pj)),
      removeFav: (pj) => dispatch(removeFav(pj))
   };
};

export default connect(null, mapDispatchToProps)(Card);
