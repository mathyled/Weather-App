import React from "react";

export default function SearchBar({onSearch}){
    return(
        <div>
            <input
            type="text"
            placeholder="City.."
            ></input>
        <button
         type="submit" 
         onClick={()=> onSearch("Searching..")}   
         >Search</button>
        </div>
    )
};