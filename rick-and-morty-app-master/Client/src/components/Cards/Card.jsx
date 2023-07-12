import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card(props) {
   
   const [isFav, setIsFav] = useState(false);

   const {myFavorites} = props;

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props)
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
}        {props.onClose ? <button onClick={() => props.onClose(props.id)} className={style.boton}>X</button> : null}
         
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
      removeFav: (id) => dispatch(removeFav(id))
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
