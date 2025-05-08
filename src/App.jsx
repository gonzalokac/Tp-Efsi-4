import { useState } from 'react';
import Titulo from './Titulo';
import Formulario from './Formulario';
import ListadoCitas from './ListadoCitas';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  return (
    <div className="app">
      <Titulo />
      <div className="contenido">
        <Formulario onAgregarCita={agregarCita} />
        <ListadoCitas citas={citas} />
      </div>
    </div>
  );
}

export default App;
