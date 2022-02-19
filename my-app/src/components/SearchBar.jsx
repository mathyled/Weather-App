import React from "react";
import style from "./SearchBar.module.css"
import lupa from "../assets/lupa.png";
import { FaSearchLocation } from 'react-icons/fa';

export default function SearchBar({onSearch}){
    return(
        <div className={style.root}>
            <input
            type="text"
            className={style.input}
            placeholder="City.."
            ></input>
        <button
         type="submit" 
         className={style.btn}
         onClick={()=> onSearch("Searching..")}   
         ><FaSearchLocation/></button>
        </div>
    )
};