import React from 'react';

const Clima = ({ resultado }) => {
  const { name, main } = resultado;
  //
  if (!name) return null;
  //
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name}: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103; </span>
        </p>
        <p className="">
          Temp. Mínima:
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103; </span>
        </p>
        <p className="">
          Temp. Máxima:
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103; </span>
        </p>
      </div>
    </div>
  );
};

export default Clima;
