import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav';
import Cards from '../components/Cards'
import Swal from 'sweetalert2';
import City from "../components/City";
import About from '../components/About';

export default function App() {
  const [cities,setCities]= useState([])
  const apiKey= '4ae2636d8dfbdc3044bede63951a019b';
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          // alert("Ciudad no encontrada");
          Swal.fire({
            title: 'Error!',
            text: 'City not found',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });

    }
    function onClose(id){
      setCities(oldCities=> oldCities.filter(c=> c.id !== id))
    }

    function onFilter(id){
      let city = cities.filter(c=> c.id === parseInt(id))
      if(city.length > 0){
        return city[0]
      }else{
        return null
      }
    }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Routes>
      
      <Route 
      path="/about" 
      element={<About name={"mathias"} />}
       />

        <Route
         path="/" 
         element={ <Cards cities={cities} onClose={onClose} />} 
         />

        <Route 
        path="/city/:id"
        element={<City onFilter={onFilter} /> } 
        />

      </Routes>
    </div>
  );
}

