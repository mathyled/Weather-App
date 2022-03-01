import React from "react";
import {useParams} from "react-router-dom";
import style from "./City.module.css";

export default function City({onFilter}) {
    const {id} = useParams();
    console.log(id)
    const city = onFilter(id)
    return (
        <div className={style.root} >
                <div >
                    <h2 className={style.name}>{city.name}</h2>
            </div>
                    <div >
                        <h4>Temperature: {city.temp} ºC</h4>
                        <h4>Weather: {city.weather}</h4>
                        <h4>Wind: {city.wind} km/h</h4>
                        <h4>Clouds: {city.clouds}</h4>
                        <h4>Latitud: {city.latitud}º</h4>
                        <h4>Longitud: {city.longitud}º</h4>
                    </div>
        </div>
    )
}