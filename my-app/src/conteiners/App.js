
import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import About from "../components/About";
import City from '../components/City';
import SearchBar from "../components/SearchBar"
import data, { Londres } from './data.js';

function App() {
  return (
    <div className="App">
       <Nav onSearch={(city)=> alert(city)} />

      <Routes>
        <Route
         exact path="/"
          element={<Cards cities={data} />}
           />
        <Route path="/about" element={<About />} />
        <Route path="/city:id" element={<City />} />
        {/* <Route element={<SearchBar onSearch={(city)=> alert(city)} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
