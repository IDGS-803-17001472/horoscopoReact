// src/components/Calendario.js
import { useState } from 'react';
import PropTypes from 'prop-types';

const Calendario = ({ onDateChange }) => {
  const [fecha, setFecha] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFecha(selectedDate);
    onDateChange(selectedDate);
  };

  

  return (
    <div>
      <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
      <input 
        type="date" 
        id="fecha-nacimiento" 
        value={fecha} 
        onChange={handleDateChange} 
      />
    </div>
  );
};


Calendario.propTypes = {
    onDateChange : PropTypes.any,
  };

export default Calendario;