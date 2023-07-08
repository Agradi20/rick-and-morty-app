import React, { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"



export default function Detail () {
    const { id } = useParams();

    const [character, setCharacter] = useState({})
    

    useEffect(() =>{
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });

   return () => {
    console.log("adios!")
   }


}, [id])
    

    return (
    <div>
        <Link to={`/detail/${id}`}>
        <h3>{character.name && character.name}</h3>
        </Link>
        <h3>{character.status && character.status}</h3>
        <img src={character.image} alt={character.name}/>
        <section>
        <span>{character.species && character.species}</span>
        <span>{character.gender && character.gender}</span>
        <span>{character.origin && character.origin.name}</span>
        </section>
        </div>
    );
}

