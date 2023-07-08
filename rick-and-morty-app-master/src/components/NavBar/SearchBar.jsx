import React, { useState } from "react";
import style from "./Searchbar.module.css"

export default function SearchBar(props) {
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div className={style.divSearch}>
         <input value={id} onChange={handleChange} type='search' placeholder="Busca un personaje..." />
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
