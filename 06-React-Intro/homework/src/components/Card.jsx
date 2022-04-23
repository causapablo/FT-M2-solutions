import React from 'react';

export default function Card(props) {
  // acá va tu código
  //A las propiedades se las obtiene del App.js. Ahi estan instanciados los componentes con sus propiedades. Cada atributo corresponde a una propiedad del props.
  //Por eso usamos props.onClose, props.name, props.min, props.max y props.img.
  return( 
  <div>
    <button onClick = {props.onClose}>X</button>
    <h4>{props.name}</h4>
    <div>
      <h6>Min</h6>
      <p>{props.min}</p>
    </div>
    <div>
      <h6>Max</h6>
      <p>{props.max}</p>
    </div>
    <img src={ `http://openweathermap.org/img/wn/${props.img}@2x.png` } />
  </div>
  )
};