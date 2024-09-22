// src/App.js
import  { useState } from 'react';
import Calendario from './components/Calendario';
import Horoscopo from './components/Horoscopo';
import { getZodiacSign } from './helpers/zodiac';

function App() {
  const [signo, setSigno] = useState('');
  const [titulo, setTitulo] = useState('Elige una fecha para ver tu horóscopo');
  const [horoscopo, setHoroscopo] = useState('');

  const handleDateChange = (fecha) => {
    const zodiacSign = getZodiacSign(fecha);
    setSigno(zodiacSign[0]);
    console.log("hola");
    console.log(zodiacSign);
    // Aquí puedes poner la lógica para mostrar un horóscopo real
    setTitulo(`Este es el horóscopo para ${zodiacSign[0]}`);
    setHoroscopo(zodiacSign[1]);
  };

  return (
    <div className="App">
      <h1>Horóscopo React</h1>
      <div className="container">
        <Calendario onDateChange={handleDateChange} />
        <Horoscopo signo={signo} horoscopo={horoscopo}  titulo={titulo} />
      </div>
    </div>
  );
}

export default App;