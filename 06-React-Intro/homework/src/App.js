import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          key = {Cairns.id}
          onClose={() => alert(Cairns.name)}
          
          /* Notar que los nombres de atributos corresponden a los nombres de las propiedades del props que usamos 
          para estructurar la CARD. Nombre ATRIBUTOS = PROPIEDADES del props */
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
          /* Notar que lo que va a recibir aca es un array, pero otra vez ATRIBUTOS = PROPIEDADES */
          /* data es un archivo data.js que va a exportar un arreglo con ciudades. */
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
