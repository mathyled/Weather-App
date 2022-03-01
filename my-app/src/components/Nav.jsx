import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./Nav.module.css";



export default function Nav({ onSearch }) {
    return (
        <nav className={style.nav} >
            <div>
                <Link to="/" className={style.link}  >
                    <span>Home</span>
                </Link>
            </div>
            <div>
                <Link to='/about' className={style.link} >
                    <span>About</span>
                </Link>
            </div>
            <div>

                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
};