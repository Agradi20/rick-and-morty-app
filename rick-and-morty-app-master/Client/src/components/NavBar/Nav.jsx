import React from "react";
import SearchBar from "./SearchBar";
import style from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
       <div className={style.divv}>
         <div className={style.texto}>
            <NavLink to="/favorites">FAVS ❤️</NavLink>
         <NavLink to="/about">ABOUT</NavLink>
         <NavLink to="/home">HOME</NavLink>
         </div>
          <SearchBar className={style.divSearch} onSearch = {props.onSearch}/>
       </div>
    );
 }