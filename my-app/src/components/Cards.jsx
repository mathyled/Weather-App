import React from "react";
import Card from "./Card"
import "./Cards.css"


export default function Cards({cities}){
    return(
        <div className="cards" >
            {
                cities.map(c=> (
                    <div key={c.id} >
                        <Card
                            max={c.main.temp_max}
                            min={c.main.temp_min}
                            name={c.name}
                            img={c.weather[0].icon}
                            onClose={()=> alert(c.name)}
                        />
                    </div>
                ))
            }
        </div>
    )
};