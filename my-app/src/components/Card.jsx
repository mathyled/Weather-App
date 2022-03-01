import React from "react";
import {Link} from "react-router-dom";

import "./Card.css"

export default function Card({max,min,name,img,onClose,id}) {
    return (
        <div className="card">
            <div id="closeIcon">
                <button className="btn" onClick={onClose} >X</button>
            </div>

            <div className="card-body" >
               <Link to={`city/${id}`} >
                <h4 className="card-title" >{name}</h4>
               </Link>
                <div>
                    <p>Min</p>
                    <p>{min}</p>
                </div>
                <div>
                    <p>Max</p>
                    <p>{max}</p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="not found" />
                </div>
            </div>

        </div>
    )
};