import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [city,setCity] = useState("");

  const handleInputChange= (e)=>{
    e.preventDefault();
    setCity(e.target.value)
  }
  //cuando haya un cambio en el input lo detecte mediante el listener onChange 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city)}}
    className={styles.root}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e)=> handleInputChange(e)}
        className={styles.input}
      />
      <input type="submit" value="Search"  className={styles.btn} />
    </form>
  );
}