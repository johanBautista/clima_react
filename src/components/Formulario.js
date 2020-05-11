import React, { useState } from 'react';

const Formulario = () => {
  //
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  //
  const { ciudad, pais } = busqueda;
  //
  const handleChange = (e) => {
    //
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default Formulario;
