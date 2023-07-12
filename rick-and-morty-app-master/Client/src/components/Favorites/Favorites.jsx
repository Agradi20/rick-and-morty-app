import React from "react"
import style from "./Favorites.module.css"
import { connect } from "react-redux";
import Card from "../Cards/Card";

const Favorites = ({myFavorites}) => {
    console.log(myFavorites);
    return <div className={style.favorito}>{myFavorites.map((pj) => {
        return ( <Card 
            key = {pj.id} 
            id = {pj.id}
            name = {pj.name} 
            species = {pj.species}  
            gender = {pj.gender} 
            image = {pj.image} 
            status = {pj.status} 
            origin = {pj.origin.name}
             /> 
                )
        })}</div>
    }



export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites 
    };
}

export default connect(mapStateToProps, null)(Favorites);