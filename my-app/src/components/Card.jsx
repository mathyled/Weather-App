import React from "react";
import "./Card.css"

export default function Card({max,min,name,img,onClose}) {
    return (
        <div className="card">
            <div id="closeIcon">
                <button className="btn" onClick={onClose} >X</button>
            </div>

            <div className="card-body" >
                <h4 className="card-title" >{name}</h4>
                <div>
                    <p>Min</p>
                    <p>{min}</p>
                </div>
                <div>
                    <p>Max</p>
                    <p>{max}</p>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
                </div>
            </div>

        </div>
    )
};