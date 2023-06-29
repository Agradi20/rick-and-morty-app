import React from "react";
import SearchBar from "./SearchBar";
import style from "./Nav.module.css"

export default function Nav(props) {
    return (
       <div className={style.divSearch}>
          <SearchBar onSearch = {props.onSearch}/>
       </div>
    );
 }