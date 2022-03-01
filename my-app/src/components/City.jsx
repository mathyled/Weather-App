import React from "react";
import {useParams} from "react-router-dom";

export default function City({onFilter}) {
    const {id} = useParams();
    console.log(id)
    const city = onFilter(id)
    return (
        <div >
                <div >
                    <h2>{city.name}</h2>
                    <div >
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}