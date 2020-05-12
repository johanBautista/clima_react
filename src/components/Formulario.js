import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  //
  const { ciudad, pais } = busqueda;
  //
  const [error, guardarError] = useState(false);
  //
  const handleChange = (e) => {
    //
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === '' || pais.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    //
    guardarConsultar(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error ? <Error mensaje="Todos los campos Obligatorios" /> : null}
        <div className="input-field col s12">
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={ciudad}
            onChange={handleChange}
          />
          <label htmlFor="ciudad">Ciudad:</label>
        </div>
        <div className="input-field col s12">
          <select name="pais" id="pais" value={pais} onChange={handleChange}>
            <option value="">-- Selecciona --</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="pais">Pais:</label>
        </div>
        <div className="input-field col s12">
          <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
          >
            Buscar Clima
          </button>
        </div>
      </form>
    </div>
  );
};
Formulario.protoTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
